#!/bin/bash

layout=`setxkbmap -query | grep layout | sed -n 's/layout:\s*\([a-z]*\).*/\1/p'`
echo "$layout"
