#!/bin/sh

acpi | sed -n 's/.*Discharging, \([0-9%]\+\).*/\1/p'
