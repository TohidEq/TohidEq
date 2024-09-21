#!/bin/sh

output=`mpstat -P all 1 1 | tail -n 1 | sed -n 's/.*all\ *\([0-9]\+\).*/\1/p'`
echo "$output%"
