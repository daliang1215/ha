#!/bin/bash

cd /home/pi/.homeassistant/script/python-broadlink/cli

./broadlink_cli --host 192.168.88.166 --mac 780F775A6CC2 --send $1
