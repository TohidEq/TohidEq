#!/bin/bash

scriptdir="$( cd "$( dirname "$0" )" && pwd )"

echo >&2 "$@"

event=$1
id=$2
type=$3
shift 3
description="$*"


#notify-send -t 2000 "$event $type $description"

if echo "$event $type $description" | grep -q "XIDeviceEnabled XISlaveKeyboard.*System Control"; then
    $scriptdir/setup-kbd.sh "us(altgr-intl)"
fi

if echo "$event $type" | grep -q "XIDeviceDisabled XISlaveKeyboard"; then
    $scriptdir/setup-kbd.sh "de(nodeadkeys)"
fi
