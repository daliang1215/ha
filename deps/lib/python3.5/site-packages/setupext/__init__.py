'''
    setupext.py: A python module with utility functions to ease creation
    of python setup (installation) scripts

    Copyright (C) 2016 Sundar Nagarajan

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

    For details of the GNU General Pulic License version 3, see the
    LICENSE-GPLv3.txt file that accompanied this program
'''
import sys
import os
import subprocess
import traceback
from distutils.command.build import build
from distutils.command.build_clib import build_clib
from distutils.command.build_ext import build_ext
from distutils.command.build_py import build_py
from distutils.command.build_scripts import build_scripts
from distutils.command.install import install
from distutils.command.install_data import install_data
from distutils.command.install_headers import install_headers
from distutils.command.install_lib import install_lib
from distutils.command.install_scripts import install_scripts


# Patch this variable from outside the module
config = {}
known_steps = [
    'build',
    'build_clib',
    'build_ext',
    'build_py',
    'build_scripts',
    'install_data',
    'install_lib',
    'install_headers',
    # Following do not work
    # 'install',
    # 'install_scripts',
]
trace_triggers = False

# setup config, so that user only needs to add cmdlist and optionally
# set show_output, show_err, ignore_err for different triggers
for step in known_steps:
    config[step] = {}
    for pre_post in ['pre', 'post']:
        config[step][pre_post] = {}
del step, pre_post


def get_dirtree(module_name, dirlist=[]):
    '''
    module_name-->str: must be name of a dir under current working dir
    dirlist-->list of str: must all be names of dirs under module_name
    '''
    ret = []
    curdir = os.getcwd()
    if not os.path.isdir(module_name):
        return ret
    os.chdir(module_name)
    try:
        for dirname in dirlist:
            if not os.path.isdir(dirname):
                continue
            for (d, ds, fs) in os.walk(dirname):
                for f in fs:
                    ret += [os.path.join(d, f)]
        return ret
    except:
        return ret
    finally:
        os.chdir(curdir)


def get_cmdclass():
    '''
    Returns-->dict: to be assigned to setuptools.setup
                    cmdclass param
    '''
    ret = {}
    cfg = __get_config()
    if cfg is None:
        return
    mapdict = {
        'build': CustomBuild,
        'build_clib': CustomBuildCLib,
        'build_ext': CustomBuildExt,
        'build_py': CustomBuildPy,
        'build_scripts': CustomBuildScripts,
        'install': CustomInstall,
        'install_data': CustomInstallData,
        'install_headers': CustomInstallHeaders,
        'install_lib': CustomInstallLib,
        'install_scripts': CustomInstallScripts,
    }
    for step in cfg.keys():
        if step in mapdict:
            ret[step] = mapdict[step]
    return ret


def run_in_order(l, show_output=True, show_err=True, ignore_err=False,
                 args=(), **kwargs):
    '''
    Processes each element of l in order:
        if it is a string: execute it as a shell command
        elif it is a callable, call it with *args, **kwargs

    l-->list: Each elem is either a string (shell command) or callable
              Any other type is ignored
    show_output-->boolean: Show stdout of shell commands
                           Does not affect callables
    show_err-->Boolean: Show stderr of shell commands
                        Does not affect callables
    ignore_err-->boolean: Continue after exception or shell command
                          wth return code != 0
    Returns-->Nothing

    if ignore_err == False, exceptions are re-raised, hence shown

    ------------------------------------------------------------------
    show_output show_err ignore_err   stdout stderr exception continue
                                                    trace
    ------------------------------------------------------------------
    True        True     False        SHOW   SHOW   SHOW      NO
    True        False    False        SHOW   HIDE   SHOW      NO
    False       True     False        HIDE   SHOW   SHOW      NO
    False       False    False        HIDE   HIDE   SHOW      NO

    True        True     True         SHOW   SHOW   SHOW      YES
    True        False    True         SHOW   HIDE   HIDE      YES
    False       True     True         HIDE   SHOW   SHOW      YES
    False       False    True         HIDE   HIDE   HIDE      YES
    ------------------------------------------------------------------
    ----------- DEFAULT -----------   SHOW   SHOW   SHOW      NO
    ------------------------------------------------------------------
    '''
    # Set defaults
    if show_output is None:
        show_output = True
    if show_err is None:
        show_err = True
    if ignore_err is None:
        ignore_err = False
    if args is None:
        args = ()

    for c in l:
        try:
            if isinstance(c, str):
                devnull = open(os.devnull, 'w')
                if not show_err:
                    stderr = devnull
                else:
                    stderr = None
                if not show_output:
                    stdout = devnull
                else:
                    stdout = None
                retcode = subprocess.call(
                    c, shell=True, stdout=stdout, stderr=stderr)
                if not ignore_err and retcode != 0:
                    break
            elif hasattr(c, '__call__'):
                c(*args, **kwargs)
        except:
            if not ignore_err:
                raise
            if show_err:
                sys.stderr.write(traceback.format_exc())


def run_triggers(step, pre_post, args=(), **kwargs):
    '''
    step, pre_post-->str: Looked up in CONFIG_VAR
                          step must be key in CONFIG_VAR
                          pre_post must be key in CONFIG_VAR[step]
    args-->tuple: Passed to run_in_order()
    '''
    if not isinstance(step, str) or not isinstance(pre_post, str):
        return
    if trace_triggers:
        msg = 'Trigger for %s: %s' % (step, pre_post)
        sys.stderr.write(msg.center(80, '-') + '\n')
    if args is None:
        args = ()
    if not isinstance(args, tuple):
        return
    cfg = __get_config()
    if cfg is None:
        return
    if step not in cfg:
        return
    if not isinstance(cfg[step], dict):
        return
    if pre_post not in cfg[step]:
        return
    d = cfg[step][pre_post]
    l = d.get('cmdlist', [])
    if not l:
        return

    show_output = d.get('show_output', None)
    show_err = d.get('show_err', None)
    ignore_err = d.get('ignore_err', None)

    run_in_order(
        l,
        show_output=show_output,
        show_err=show_err,
        ignore_err=ignore_err,
        args=args,
        pre_post=pre_post,
        kwargs=kwargs
    )


def __get_config():
    '''
    Returns-->dict or None
    '''
    if 'config' not in globals():
        return None
    cfg = globals().get('config', None)
    if cfg is None:
        return None

    if not isinstance(cfg, dict):
        return None
    return cfg


class CustomBuild(build):
    def run(self):
        run_triggers('build', 'pre', args=(self,))
        build.run(self)
        run_triggers('build', 'post', args=(self,))


class CustomBuildCLib(build_clib):
    def run(self):
        run_triggers('build_clib', 'pre', args=(self,))
        build_clib.run(self)
        run_triggers('build_clib', 'post', args=(self,))


class CustomBuildExt(build_ext):
    def run(self):
        run_triggers('build_ext', 'pre', args=(self,))
        build_ext.run(self)
        run_triggers('build_ext', 'post', args=(self,))


class CustomBuildPy(build_py):
    def run(self):
        run_triggers('build_py', 'pre', args=(self,))
        build_py.run(self)
        run_triggers('build_py', 'post', args=(self,))


class CustomBuildScripts(build_scripts):
    def run(self):
        run_triggers('build_scripts', 'pre', args=(self,))
        build_scripts.run(self)
        run_triggers('build_scripts', 'post', args=(self,))


class CustomInstall(install):
    def run(self):
        # run_triggers('install', 'pre', args=(self,))
        install.run(self)
        run_triggers('install', 'post', args=(self,))


class CustomInstallData(install_data):
    def run(self):
        run_triggers('install_data', 'pre', args=(self,))
        install_data.run(self)
        run_triggers('install_data', 'post', args=(self,))


class CustomInstallHeaders(install_headers):
    def run(self):
        run_triggers('install_headers', 'pre', args=(self,))
        install_headers.run(self)
        run_triggers('install_headers', 'post', args=(self,))


class CustomInstallLib(install_lib):
    def run(self):
        run_triggers('install_lib', 'pre', args=(self,))
        install_lib.run(self)
        run_triggers('install_lib', 'post', args=(self,))


class CustomInstallScripts(install_scripts):
    def run(self):
        run_triggers('install_scripts', 'pre', args=(self,))
        install_scripts.run(self)
        run_triggers('install_scripts', 'post', args=(self,))


if __name__ == '__main__':
    def test(*args, **kwargs):
        if len(args) < 2:
            raise ValueError('test: Insufficient arguments')
        if len(kwargs) == 0:
            sys.stderr.write('test: kwargs is empty\n')
        print('test: args: ' + str(args))

    l = ['uname -a', 'uname --nosuchoption', test, 'uname']
    run_in_order(l, ignore_err=True, args=(1, 2))
