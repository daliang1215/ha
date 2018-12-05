#!/bin/bash
date
if [ "$1"x = "jimmylin"x ] ; then # 林志颖
	txt=`shuf -n1 /mnt/disks/music/lossless无损/list/jimmylin.txt`
elif [ "$1"x = "davewang"x ] ; then # 王杰
	txt=`shuf -n1 /mnt/disks/music/lossless无损/list/davewang.txt`
elif [ "$1"x = "mayday"x ] ; then # 五月天
	txt=`shuf -n1 /mnt/disks/music/lossless无损/list/mayday.txt`
elif [ "$1"x = "tingting"x ] ; then # 粤语歌曲
	txt=`shuf -n1 /mnt/disks/music/lossless无损/list/tingting.txt`
elif [ "$1"x = "bandari"x ] ; then # 班得瑞/bandari
	txt=`shuf -n1 /mnt/disks/music/lossless无损/list/bandari.txt`
elif [ "$1"x = "zhouhuajian"x ] ; then # 周华健
	txt=`shuf -n1 /mnt/disks/music/lossless无损/list/zhouhuajian.txt`
elif [ "$1"x = "zhangxinzhe"x ] ; then # 张信哲
	txt=`shuf -n1 /mnt/disks/music/lossless无损/list/zhangxinzhe.txt`
else
	txt=$1
fi
# qmi music
omxplayer -o local --font /usr/share/fonts/truetype/wqy/wqy-zenhei.ttc  --vol -602  $txt 
date
