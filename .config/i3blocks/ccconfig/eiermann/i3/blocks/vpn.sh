#!/bin/sh

output=`nmcli -t connection show | grep :vpn: | sed -n 's/\([^:]\+\).*:vpn:\(.\+\)/\1/p'`

if [ ! -z "$output" ]; then
    echo " $output"
fi
