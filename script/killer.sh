#!/bin/bash
date
# kill process of omxplayer
if [ "$1"x = "omxplayer"x ] ; then
	txt=$1
	killall -9 ${txt}.bin
	killall -9 ${txt}.bin
	killall -9 $txt
else
	exit 
fi
date
