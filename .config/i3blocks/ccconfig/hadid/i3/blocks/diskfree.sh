#!/bin/bash

free=`df -h --output=avail /dev/ubuntu-vg/root | tail -1`
echo $free
