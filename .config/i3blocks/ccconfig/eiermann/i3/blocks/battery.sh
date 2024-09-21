#!/bin/sh

# match percentage
acpi | sed -n 's/.*Discharging, \([0-9%]\+\).*/\1/p'

# match remaining time
# acpi | sed -n 's/.*\([0-9]\{2\}:[0-9]\{2\}:[0-9]\{2\}\).*/\1/p'
