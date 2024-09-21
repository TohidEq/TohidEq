#!/bin/bash

current_layout=$(setxkbmap -query | grep layout | awk '{print $2}')

if [ "$current_layout" == "ir" ]; then
    setxkbmap -layout us
else
    setxkbmap -layout ir
fi