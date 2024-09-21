#!/bin/sh

idle=$(mpstat -P all 1 1 | tail -n 1 | sed -n 's/.*\s\([0-9,.]\+\)$/\1/p')
# the output of mpstat depends on LC_MEASUREMENT
# use commands locale and update-locale to set these to german defaults
idle=$(echo $idle | sed -n 's/,/./p')
usage=$(echo "v=100-$idle;if (v < 1) 0 else v" | bc | sed -e 's/\(.*\)\..*/\1/')
echo "$usage%"
