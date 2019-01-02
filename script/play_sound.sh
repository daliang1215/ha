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
elif [ "$1"x = "qmi"x ] ; then # Q米
	txt=`shuf -n1 /mnt/disks/music/lossless无损/list/qmi.txt`
elif [ "$1"x = "xiaoshoupaipai"x ] ; then # 小手拍拍
	txt='/mnt/disks/music/qmi/小手拍拍.mp3'
elif [ "$1"x = "hekuailezaiyiqi"x ] ; then # 和快乐在一起
	txt='/mnt/disks/music/qmi/和快乐在一起.mp3'
elif [ "$1"x = "huangliniao"x ] ; then # 蜗牛和黄鹂鸟
	txt='/mnt/disks/music/qmi/蜗牛和黄鹂鸟.mp3'
elif [ "$1"x = "shishangzhiyoumamahao"x ] ; then # 世上只有妈妈好
	txt='/mnt/disks/music/qmi/世上只有妈妈好.mp3'
elif [ "$1"x = "beishuang"x ] ; then # 倍爽
	txt='/mnt/disks/music/qmi/倍爽.mp3'
elif [ "$1"x = "jiuyuejiudejiu"x ] ; then # 九月九的酒
	txt='/mnt/disks/music/qmi/九月九的酒.mp3'
elif [ "$1"x = "xiaojingcha"x ] ; then # 我在马路边捡到一分钱
	txt='/mnt/disks/music/qmi/我在马路边捡到一分钱.mp3'
elif [ "$1"x = "xiaocangwa"x ] ; then # 小仓娃
	txt='/mnt/disks/music/qmi/豫剧-小仓娃.mp3'
else # 163 music
	## get music from 163
	## music from $1
	wget -O /tmp/${1}.txt "http://192.168.88.140:3000/search?keywords=${1}&type=1&limit=1"  2>/dev/null 
	#songid=`cat /tmp/${1}.txt |grep -Po '(?<=id":)[0-9]+'|head -n 1`
	songid=`cat /tmp/${1}.txt |jq '.result.songs[].id'|head -n 1`
	wget -O /tmp/${1}.mp3 "https://music.163.com/song/media/outer/url?id=${songid}.mp3"
	txt="/tmp/${1}.mp3"
fi
# qmi music
omxplayer -o local --font /usr/share/fonts/truetype/wqy/wqy-zenhei.ttc  --vol -602  $txt 
date
