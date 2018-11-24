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
else
	txt=$1
fi
# qmi music
omxplayer -o local --font /usr/share/fonts/truetype/wqy/wqy-zenhei.ttc  --vol -602  $txt 
date
