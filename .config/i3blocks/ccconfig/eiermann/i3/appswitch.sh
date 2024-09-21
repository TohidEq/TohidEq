#!/bin/bash


focus_or_start_browser() {
    local title=$1
    local url=$2
    shift 2
    i3-msg -t get_tree | grep -ie ".*$title.*Mozilla Firefox" >/dev/null
    if [[ $? -ne 0 ]] ; then
	echo Starting Firefox $url
	firefox -new-window $url $* &
	sleep 2
    fi
    echo Focusing $title
    i3-msg [class="firefox" title=".*$title.*Mozilla Firefox"] focus
}


focus_or_start() {
    local class=$1
    shift
    i3-msg -t get_tree | grep $class >/dev/null
    if [[ $? -ne 0 ]] ; then
	echo Starting $*
	$* &
	sleep 2
    fi
    echo Focusing $class
    i3-msg [class="$class"] focus
    #i3-msg [class="$class"] move window to workspace current
}


app=`cat ~/.config/i3/appswitch-items.txt | dmenu -i -b -sb '#bf616a'`

case $app in
    Cloud)
	focus_or_start_browser "Nextcloud" https://cloud.doctronic.de/index.php/login?redirect_url=/index.php/apps/files/
	;;
    Confluence)
	focus_or_start_browser "Confluence" https://doctronic.atlassian.net/wiki
	;;
    Displays...)
	~/.config/i3/displayswitch.sh &
        ;;
    DTMS)
	focus_or_start_browser "dtms" https://dtms.doctronic.de/ui#timelogging
	;;
    Gerrit)
	focus_or_start_browser "gerrit" https://gerrit.doctronic.de/login/%23%2Fq%2Fstatus%3Aopen
	;;
    Gitlist)
	focus_or_start_browser "GitList" https://gitlist-gerrit.doctronic.de/
	;;
    Jenkins)
	focus_or_start_browser "Jenkins" https://jenkins2.doctronic.de/view/clojure
	;;
    Jira)
	focus_or_start_browser "JIRA" https://doctronic.atlassian.net/jira
	;;
    Keepass)
	~/bin/dt-keepass.sh &
	;;
    Nexus)
	focus_or_start_browser "Nexus" https://nexus.doctronic.de
	;;
    Search)
        i3-msg workspace "3: "
	firefox &
	;;
    Speech-to-text)
        google-chrome --new-window https://www.textfromtospeech.com/de/voice-to-text/
        ;;
    System...)
	~/.config/i3/syscommand.sh &
	;;
    Terminal)
	i3-msg workspace "1: "
	;;
    Ticket...)
	i3-input -P "JIRA Nr: " -F "exec firefox -new-window https://jira.doctronic.de/browse/%s"
	;;
    Whereby)
        i3-msg workspace "7"
	firefox -new-window https://doctronic.whereby.com/org
        i3-msg move workspace to output eDP-1
        i3-msg [title=".*Whereby.*Mozilla Firefox"] focus
	;;
    WindowsVM)
	VBoxManage startvm doctronic &
	i3-msg workspace "10: "
	;;
esac
