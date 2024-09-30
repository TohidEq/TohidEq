#!/bin/bash

cmd=`cat ~/.config/i3/syscommand-items.txt | dmenu -i -b -nb \#ebcb8b -nf \#2e3440`
scriptdir="$( cd "$( dirname "$0" )" && pwd )"

case $cmd in
    Off)
	systemctl poweroff
	;;
    Reboot)
	systemctl reboot
	;;
    Suspend)
	$scriptdir/lock.sh
	systemctl suspend
	;;
    Logout)
	i3-msg exit
	;;
esac
