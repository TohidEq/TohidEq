#!/bin/bash

active_sink=$(pacmd list-sinks | grep "state\: RUNNING" -B4 -A7 | grep "index:\|name:\|volume: \(front\|mono\)\|muted:")
muted=$(echo "$active_sink" | grep muted | sed -n 's/.*:\s\(.*\)/\1/p')
volume=$(echo "$active_sink" | grep volume | sed -n 's/.*\s\([0-9]*%\).*/\1/p')

if [[ -z "$active_sink" ]] ; then
    echo ""
elif [[ "$muted" == "no" ]] ; then
    echo $volume
else
    echo "Mute"
fi
