#!/bin/sh

temp=$(cat /sys/class/thermal/thermal_zone4/temp)
echo $(( $temp / 1000 ))℃
