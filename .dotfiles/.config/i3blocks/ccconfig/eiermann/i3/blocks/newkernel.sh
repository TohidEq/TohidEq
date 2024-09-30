#!/bin/bash

installed_kernels=$(for f in $(ls -t /boot); do echo $f | sed -n -E 's/System.map-(.*)/\1/p'; done)
number_of_installed_kernels=$(echo "$installed_kernels" | wc -l)
latest_available_kernel=$(echo "$installed_kernels" | head -n 1)

active_kernel=$(uname -r)

if [ "$active_kernel" != "$latest_available_kernel" ]; then
    echo " $active_kernel < $latest_available_kernel"
fi
