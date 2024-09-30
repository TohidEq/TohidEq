#!/bin/bash

focus_or_start_browser() {
    local title=$1
    local url=$2
    shift 2
    i3-msg -t get_tree | grep $title >/dev/null
    if [[ $? -ne 0 ]] ; then
	echo Starting Firefox $url
	firefox -new-window $url $*
    fi
    i3-msg [class="Firefox" title="$title"] focus
}


focus_or_start() {
    local class=$1
    shift
    i3-msg -t get_tree | grep $class >/dev/null
    if [[ $? -ne 0 ]] ; then
	echo Starting $*
	$*
    fi
    i3-msg [class="$class"] focus
}


app=`cat ~/.config/i3/appswitch-items.txt | dmenu -b -i`

case $app in
    Bash)
	focus_or_start_browser "Bash" https://linuxize.com/post/bash-functions &
	;;
    Calculator)
        gnome-calculator &
        ;;
    Cantata)
	focus_or_start cantata cantata &
	;;
    Clementine)
	focus_or_start Clementine clementine &
	;;
    Emacs)
	focus_or_start Emacs emacs &
	;;
    Firefox)
        i3-msg workspace "3: "
	firefox &
	;;
    Krusader)
	focus_or_start krusader krusader &
	;;
    Mixxx)
	focus_or_start Mixxx ~/bin/music-dj.sh &
	;;
    Search)
        i3-msg workspace "3: "
	firefox &
	;;
    System...)
	~/.config/i3/syscommand.sh &
	;;
    Terminal)
	i3-msg workspace "1: "
	;;
    Thunderbird)
	focus_or_start Thunderbird thunderbird &
	;;
esac
