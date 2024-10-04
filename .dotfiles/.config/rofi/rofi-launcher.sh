#!/usr/bin/env bash

## Copyright (C) 2020-2024 Aditya Shakya <adi1090x@gmail.com>



# Import Current Theme
STYLE="rofi-blur"
RASI="$STYLE/launcher.rasi"

# Run
rofi \
    -show drun \
    -theme ${RASI}
