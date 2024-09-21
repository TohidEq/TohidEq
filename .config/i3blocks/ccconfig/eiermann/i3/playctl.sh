#!/bin/bash

# use it in your i3 config like so
# bindsym XF86AudioPlay  exec $scriptdir/playctl.sh play
# bindsym XF86AudioPause exec $scriptdir/playctl.sh pause
# bindsym XF86AudioStop  exec $scriptdir/playctl.sh stop
# bindsym XF86AudioPrev  exec $scriptdir/playctl.sh prev
# bindsym XF86AudioNext  exec $scriptdir/playctl.sh next

command=$1

# clementine
ps h -C clementine | grep clementine
clementine_running=$?
if [ "$clementine_running" == "0" ]; then
    echo "using clementine commands"
    socket_file="$HOME/.config/mpv/socket"

    case "$command" in
        play | pause)
            clementine --play-pause
            ;;
        stop)
            clementine --stop
            ;;
        prev)
            clementine --previous
            ;;
        next)
            clementine --next
            ;;
        *)
            echo "Unknown command"
            ;;
    esac
    exit 0
fi

# mpv
ps h -C mpv | grep mpv
mpv_running=$?
if [ "$mpv_running" == "0" ]; then
    echo "using mpv commands"
    socket_file="$HOME/.config/mpv/socket"

    case "$command" in
        play | pause | stop)
            echo cycle pause   | socat - "$socket_file"
            ;;
        prev)
            echo playlist_prev | socat - "$socket_file"
            ;;
        next)
            echo playlist_next | socat - "$socket_file"
            ;;
        *)
            echo "Unknown command"
            ;;
    esac
    exit 0
fi

# fallback is music player daemon
echo "using mpc commands"
mpd_host=panton
case "$command" in
    play | pause)
        mpc --host=$mpd_host toggle
        ;;
    stop)
        mpc --host=$mpd_host stop
        ;;
    prev)
        mpc --host=$mpd_host prev
        ;;
    next)
        mpc --host=$mpd_host next
        ;;
    *)
        echo "Unknown command"
        ;;
esac
