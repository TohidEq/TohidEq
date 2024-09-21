#!/bin/bash

free=`df -h --output=avail /dev/mapper/data-root | tail -1`
echo $free
