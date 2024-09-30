# i3wm config files

## Usage

[i3wm](https://i3wm.org/) is a window manager, not a complete desktop
environment. Therefore one has to install not only i3 but additional packages.
These are documented at the top of my i3/config file.

Clone this repo, then create a link in your ~/.config folder like so:

```
ln -s ~/Projects/i3config/hadid/i3 ~/.config/i3
```


## i3-gaps

As of i3 version 4.22 the gaps feature is now permanently included.

Instructions to build the most recent version are here:
https://github.com/Airblader/i3/wiki/Building-from-source

After building it you need to ensure that:

* the necessary i3 executables are in your $PATH, i.e. make them available in `/usr/local/bin` like so:
`sudo cp i3 i3bar i3-config-wizard i3-dump-log i3-input i3-msg i3-nagbar /usr/local/bin` and
`cd .. && sudo cp i3-dmenu-desktop i3-sensible-terminal i3-sensible-editor i3-sensible-pager i3-save-tree /usr/local/bin`
* suckless-tools, i3status, i3lock and i3blocks is installed: `sudo apt install i3blocks i3status i3lock suckless-tools`


## i3 specific keybindings

Key binding | Function
:--- | :---
<kbd>Super</kbd><kbd>Enter</kbd> or <kbd>t</kbd>                | Start terminal
<kbd>Super</kbd><kbd>c</kbd>                                    | Dmenu cheatsheets
<kbd>Super</kbd><kbd>d</kbd>                                    | Dmenu applications
<kbd>Super</kbd><kbd>x</kbd>                                    | Dmenu special applications
<kbd>Super</kbd><kbd>q</kbd>                                    | Kill selected window
<kbd>Super</kbd><kbd>e</kbd>                                    | Tiling workspace layout
<kbd>Super</kbd><kbd>s</kbd>                                    | Stacking workspace layout
<kbd>Super</kbd><kbd>w</kbd>                                    | Tabbed workspace layout
<kbd>Super</kbd><kbd>Space</kbd>                                | Toggle floating mode for window
<kbd>Super</kbd><kbd>Shift</kbd><kbd>Space</kbd>                | Switch focus between floating and other window
<kbd>Super</kbd><kbd>-</kbd>                                    | Toggle floating window stickiness
<kbd>Super</kbd><kbd>f</kbd>                                    | Toggle fullscreen
<kbd>Super</kbd><kbd>1</kbd> ... <kbd>0</kbd>                   | Switch to workspace 1 ... 10
<kbd>Super</kbd><kbd>Alt</kbd><kbd>1</kbd> ... <kbd>0</kbd>     | Move focussed window to workspace 1 ... 10
<kbd>Super</kbd><kbd>Tab</kbd>                                  | Switch back and forth between workspaces
<kbd>Super</kbd><kbd>z</kbd>                                    | Move workspace to other output
<kbd>Super</kbd><kbd>i</kbd>                                    | Focus window up
<kbd>Super</kbd><kbd>j</kbd>                                    | Focus window left
<kbd>Super</kbd><kbd>k</kbd>                                    | Focus window down
<kbd>Super</kbd><kbd>l</kbd>                                    | Focus window right
<kbd>Super</kbd><kbd>Alt</kbd><kbd>i</kbd>                      | Move window up
<kbd>Super</kbd><kbd>Alt</kbd><kbd>j</kbd>                      | Move window left
<kbd>Super</kbd><kbd>Alt</kbd><kbd>k</kbd>                      | Move window down
<kbd>Super</kbd><kbd>Alt</kbd><kbd>l</kbd>                      | Move window right
<kbd>Super</kbd><kbd>.</kbd>                                    | Hide window in scratchpad
<kbd>Super</kbd><kbd>,</kbd>                                    | Toggle scratchpad window visibility
<kbd>Super</kbd><kbd>v</kbd>                                    | Next tile split is vertical
<kbd>Super</kbd><kbd>h</kbd>                                    | Next tile split is horizontal
<kbd>Super</kbd><kbd>r</kbd>                                    | Activate resize mode
<kbd>Super</kbd><kbd>m</kbd>                                    | Activate floating window move mode
<kbd>Super</kbd><kbd>Ctrl</kbd><kbd>s</kbd>                     | Flameshot: take screenshot
<kbd>Super</kbd><kbd>Ctrl</kbd><kbd>c</kbd>                     | Calendar popup
<kbd>Super</kbd><kbd>Ctrl</kbd><kbd>l</kbd>                     | Lock desktop
<kbd>Super</kbd><kbd>Ctrl</kbd><kbd>p</kbd>                     | Processes in Htop
<kbd>Super</kbd><kbd>Ctrl</kbd><kbd>r</kbd>                     | Ranger filemanager
<kbd>Super</kbd><kbd>Ctrl</kbd><kbd>Escape</kbd>                | Suspend system
<kbd>Super</kbd><kbd>Shift</kbd><kbd>e</kbd>                    | Exit i3
<kbd>Super</kbd><kbd>Shift</kbd><kbd>c</kbd>                    | Reload i3 config
<kbd>Super</kbd><kbd>Shift</kbd><kbd>r</kbd>                    | Restart i3
<kbd>Super</kbd><kbd>F9</kbd>                                   | Switch keyboard layout
<kbd>Print</kbd>                                                | Flameshot: take screenshot

## Other keybindings (setxkbmap, xmodmap)

<kbd>Scroll lock</kbd>                                          | Compose key
