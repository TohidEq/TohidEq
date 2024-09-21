#!/bin/bash

# see also ~/Documents/Cheatsheets/make-pngs.sh
dir=~/Pictures/Cheatsheets
sheet=`ls $dir | dmenu -i -b -sf '#2e3440' -sb '#a3be8c'`
if [[ -n $sheet ]]; then
    echo $sheet
    feh -B black --class "cheatsheet" "$dir/$sheet"
fi
