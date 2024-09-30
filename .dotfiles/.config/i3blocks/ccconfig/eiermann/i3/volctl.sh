#!/bin/bash

# usage: volctl.sh mute|+nn%|-nn%

volume=$1
sink=`pactl -- list short sinks | grep RUNNING | sed -r s/\([0-9]+\).*/\\\1/`
echo "Sink $sink $volume"

if [ ! -z "$sink" ]; then
    if [ "$volume" == "mute" ]; then
        pactl set-sink-mute $sink toggle
    else
        pactl -- set-sink-volume $sink $volume
    fi
fi
