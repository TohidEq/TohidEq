#!/bin/bash

internal=eDP-1
command=$1
step=$2
new_gamma=$2

current_brightness=`xrandr --verbose | grep -m 1 -i brightness | sed -n 's/\s*Brightness:\s*\([0-9.]*\)/\1/p'`
tempdir=/tmp/i3-$USER
mkdir -p $tempdir

# xrandr bug causes xrandr to return inverted gamma value in xrand --verbose
# current_gamma=`xrandr --verbose | grep -m 1 -i gamma | sed -n 's/\s*Gamma:\s*\([0-9.]*\)/\1/p'`

gamma_file="$tempdir/gamma"
if [[ -e $gamma_file ]]; then
    current_gamma=`cat $gamma_file`
else
    current_gamma=1.0:1.0:1.0
fi

echo "Current brightness $current_brightness, gamma $current_gamma"

case $command in
    +)
        new_brightness=`echo $current_brightness + $step | bc -l`
        echo "Brightness increase to $new_brightness"
        xrandr --output $internal --brightness $new_brightness --gamma $current_gamma
        ;;
    -)
        new_brightness=`echo $current_brightness - $step | bc -l`
        echo "Brightness decrease to $new_brightness"
        xrandr --output $internal --brightness $new_brightness --gamma $current_gamma
        ;;
    gamma)
        echo "New gamma is $new_gamma"
        xrandr --output $internal --brightness $current_brightness --gamma $new_gamma
        echo $new_gamma > $gamma_file
        ;;
    *)
        echo "usage: backlight.sh [+|-|gamma] <step/gamma>"
esac