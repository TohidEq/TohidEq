#!/bin/bash

notmuch search --output=files --duplicate=1 tag:unread | wc -l
