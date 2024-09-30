#!/bin/bash

workspace=$1
i3-msg "move container to workspace $workspace"
i3-msg "workspace $workspace"
