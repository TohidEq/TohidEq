#!/bin/bash

interval=$(( 10*60 ))

tempdir=/tmp/i3-$USERNAME
mkdir -p $tempdir
cache=$tempdir/weather.txt
cache_timestamp=`stat -c %Y $cache`
now=`date +%s`

next_query=$(( $cache_timestamp + $interval ))

if [[ $now -ge $next_query ]]; then
    wget wttr.in/Bonn?format=3 -q -O $cache
fi

cache_size=`stat -c %s $cache`
if [[ "$cache_size" -eq "0" ]]; then
    rm $cache
else
    cat $cache
fi
