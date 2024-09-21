#!/bin/bash

wallpaper() {
    sleep 1
    feh --bg-fill ~/Pictures/Wallpapers/i3.jpg
}

scriptdir="$( cd "$( dirname "$0" )" && pwd )"

# find these with command: xrandr --listactivemonitors
internal=eDP-1
dp1=DP-1-1
dp2=DP-1-2
dp3=DP-3
mode=$1


menu() {
    local itemfile=~/.config/i3/displayswitch-items.txt
    echo "1-Internal only" >$itemfile
    echo "2-Office" >>$itemfile
    echo "3-Externals only" >>$itemfile
    echo "4-Projection left" >>$itemfile
    echo "5-Projection right" >>$itemfile
    echo "Nightlight" >>$itemfile
    echo "Daylight" >>$itemfile
    mode=`cat $itemfile | dmenu -i -b -sb '#bf616a' | head -c 1`
}


if [ -z "$mode" ]; then
    menu
fi

case $mode in
    1)
        echo "Internal on"
        xrandr --output $internal --auto --primary --mode 1920x1080
        sleep 1
        echo "$dp1 off"
        xrandr --output $dp1 --off
        sleep 1
        echo "$dp2 off"
        xrandr --output $dp2 --off
        echo "$dp3 off"
        xrandr --output $dp3 --off
        wallpaper
        ;;
    2)
        sleep 1
        echo "Internal off"
        xrandr --output $internal --off
        sleep 1
        echo "$dp1 on"
        xrandr --output $dp1 --auto --primary --brightness 1.0
        sleep 1
        echo "$dp2 on"
        xrandr --output $dp2 --auto --right-of $dp1 --brightness 1.0
        sleep 1
        echo "Internal on"
        xrandr --output $internal --auto --left-of $dp1 --mode 1920x1080
        wallpaper
        ;;
    3)
        echo "$dp1 on"
        xrandr --output $dp1 --auto --primary --mode 1920x1080
        sleep 1
        echo "$dp2 on"
        xrandr --output $dp2 --auto --right-of $dp1
        sleep 1
        echo "Internal off"
        xrandr --output $internal --off
        wallpaper
        ;;
    4)
        echo "Internal off"
        xrandr --output $internal --off
        sleep 1
        echo "$dp3 on"
        xrandr --output $dp3 --auto
        xrandr --output $dp3 --brightness 0.8
        sleep 1
        echo "Internal on"
        xrandr --output $internal --auto --mode 1920x1080
        sleep 1
        xrandr --output $internal --primary --right-of $dp3
        wallpaper
        ;;
    5)
        echo "Internal off"
        xrandr --output $internal --off
        sleep 1
        echo "$dp3 on"
        xrandr --output $dp3 --auto
        xrandr --output $dp3 --brightness 0.8
        sleep 1
        echo "Internal on"
        xrandr --output $internal --auto --mode 1920x1080
        sleep 1
        xrandr --output $internal --primary --left-of $dp3
        wallpaper
        ;;
    N)
        echo "Gamma correction for nightlight"
        $scriptdir/backlight.sh gamma 1.0:0.8:0.6
        ;;
    D)
        echo "Gamma correction for daylight"
        $scriptdir/backlight.sh gamma 1.0:1.0:1.0
        ;;
esac

# Fix keyboard speed
xset r rate 250 80
