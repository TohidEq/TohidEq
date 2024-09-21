#!/bin/bash

layout="$1"
scriptdir="$( cd "$( dirname "$0" )" && pwd )"
tempdir=/tmp/i3-$USERNAME
mkdir -p $tempdir

notify-send -t 2000 "Switching keyboard layout: $layout"

setxkbmap -layout "$layout" -option "compose:sclk" -option "caps:capslock"
xmodmap -pke > $tempdir/i3-xmodmap-last
xmodmap $scriptdir/xmodmaprc
xmodmap -pke > $tempdir/i3-xmodmap-current
xset r rate 250 80
