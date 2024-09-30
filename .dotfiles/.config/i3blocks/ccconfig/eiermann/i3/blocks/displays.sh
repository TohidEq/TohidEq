#!/bin/bash

connected_displays=$(xrandr | grep -e " connected" | sed -n 's/\([^\s]\)\s.*/\1/p' | tr '\n' ' ')
display_number=$(echo "$connected_displays" | wc -w)
internal_display_name="eDP-1"
internal_display_symbol=""
external_display_symbol=""


if [ $display_number -gt 1 ]; then
    for display in $connected_displays ; do
        if [ "$display" == "$internal_display_name" ] ; then
            output="$internal_display_symbol $display"
        else
            output="$output   $external_display_symbol $display"
        fi
    done
    echo "$output"
else
    echo "$internal_display_symbol 1"
fi
