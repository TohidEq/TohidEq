#!/bin/bash

active_sink=$(pactl list | grep "State\: RUNNING" -m 1 -B4 -A8)
muted=$(echo "$active_sink" | grep "Mute:" | sed -n 's/.*:\s\(.*\)/\1/p')
volume=$(echo "$active_sink" | grep Volume | sed -n 's/.*\s\([0-9]*%\).*/\1/p')

if [[ -z "$active_sink" ]] ; then
    echo ""
elif [[ "$muted" == "no" ]] ; then
    echo $volume
else
    echo "Mute"
fi
