#!/bin/bash

window_id=$(xprop -root | awk '/_NET_ACTIVE_WINDOW\(WINDOW\)/{print $NF}')
xprop -id $window_id | awk '/_NET_WM_NAME/{$1=$2="";print}' | cut -d'"' -f2
