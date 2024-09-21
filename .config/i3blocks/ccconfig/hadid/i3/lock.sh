#!/bin/bash

# Depends on: convert, composite, i3lock, compton

# Randomy picks a wallpaper file from ~/Pitcures/Wallpapers
# converts it to the current screen resolution and starts i3-lock
# with it

geometry=`xdpyinfo | grep dimensions | sed -n 's/.*dimensions:\ \+\([0-9]\+\x[0-9]\+\)\ .*/\1/p'`
wallpapers=(~/Pictures/Wallpapers/*)

tempdir=/tmp/i3-$USERNAME
mkdir -p $tempdir

wallpaper=${wallpapers[RANDOM % ${#wallpapers[@]}]}
lock=~/.config/i3/lock.png
locked_wallpaper=$tempdir/i3-lockscreen.png

echo "Wallpaper file $wallpaper"

lock() {
  i3lock -n -i "$locked_wallpaper"
  compton -Gf -b -i 0.9
}

convert $wallpaper -resize $geometry! "$locked_wallpaper"
composite "$lock" "$locked_wallpaper"  "$locked_wallpaper"
lock &
sleep 1
killall compton
