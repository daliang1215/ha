#!/bin/bash

ulimit -n 8192 
/usr/local/bin/caddy -conf /home/pi/.homeassistant/Caddyfile  
