#!/bin/bash

de="de(nodeadkeys)"
us="us(altgr-intl)"

current_layout=`setxkbmap -query | grep layout | sed -n 's/layout:\s*\(.*\)/\1/p'`
next_layout="$us"

if [[ "$current_layout" == "$de" ]]; then
    next_layout="$us"
fi

if [[ "$current_layout" == "$us" ]]; then
    next_layout="$de"
fi

scriptdir="$( cd "$( dirname "$0" )" && pwd )"
$scriptdir/setup-kbd.sh "$next_layout"
