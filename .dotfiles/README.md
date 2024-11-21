# My Configs

## Preview

![SS](https://raw.githubusercontent.com/TohidEq/TohidEq/master/assets/ss-9.11.2024.png)

rofi launcher
![SS-roofi](https://raw.githubusercontent.com/TohidEq/TohidEq/master/assets/ss-rofi-3.10.2024.png)

## Live Wallpaper (gif)

<https://github.com/user-attachments/assets/a58bbcb3-7d35-453b-aa19-95981e079213>

### Usage

Run terminal and go somewhere u like to clone github for example:

```bash
# create a directory for clone github repoes > go to that folder and clone this repo
mkdir myTemps
cd myTemps
git clone https://github.com/TohidEq/TohidEq
```

#### myScripts

```bash
# copy myScripts folder to your home directory
cp -r ./.dotfiles/myScripts/ ~/myScripts/
# make scripts executable
chmod +x ~/myScripts/*
```

Add scripts folder to your PATH

- Fish users can easily use `fish_add_path -g ~/myScripts`

Or just edit your shell config (`~/.bashrc` or `~/.zshrc` or whatever u use) (fish: ~/.config/fish/config.fish)

```bash
# open shell config with nano or vim or vscode or ...
nano ~/.config/fish/config.fish
# add this line at the end of the config file
set PATH /home/tohid-eq/myScripts/ $PATH

```

Now u can run scripts anywhere u like (in terminal), just write name of the script

#### myScripts: Requirement & Config

- holycowsay

A random animal in ascii art comes and say something in your terminal :D

packages:

```
cowsay
fortune
lolcat
```

- nvim-by-fzf

run fzf to find config files/folders or anything u want, then run nvim with that file/folder ez pz
packages:

```
bat
nvim
fzf
```

#### Live wallpaper scripts: (`wallpaper-set-gif` , `wllppr-set-random-gif` , `wllppr-kill-gif` , `wallpaper-random-gif`)

packages:

```bash
# ffmpeg: convert videos to gif, to use:
# ffmpeg -i your-video-name-as-input.mp4 your-gif-name-as-output.gif
ffmpeg
xwinwrap
gifview
```

- `wallpaper-random-gif` script to return a random gif from our gifs folder

Set your directory that has your `GIFs` in `wallpaper-random-gif`

I put my gifs to `~/myworld/Media/wallpaper/gifs-raw` so:

line 5 of `wallpaper-random-gif`

```bash
directory=~/myworld/Media/wallpaper/gifs-raw
```

- `wllppr-set-random-gif`

Just run this to choose a gif and set that to your system wallpaper

- wallpaper live in 2nd monitor (`wallpaper-set-gif-2nd-monitor`)

My 1nd monitor res = `1920x1080` and 2nd monitor res = `1920x1080` and setted in right of my first monitor that means it's transformed `1920` pixels forward at `X` position so i use: `1920x1080+1920+0` to move it `+1920` pixels forward

If your 2nd monitor is not same as me u can change settings in line 10 of `wallpaper-set-gif-2nd-monitor`:

```bash
#     W: Widht  ,  H: height
#           ( W x H )+  x +y
xwinwrap -g 1920x1080+1920+0 -ov -ni -s -nf -- gifview -w %WID $1 -a
```

- If u want to set your 2nd monitor wallpaper u can use `wllppr-set-random-gif-2nd-monitor`

REMEMBER: DON'T USE `..2nd-monitor script` REPEATEDLY, it will EAT your RAM

U should use `wllppr-kill-gif` before u want to change 2nd monitor wallpaper (and your first monitor will change to :D (idk how handle that))

Example:

```bash
# set 1nd monitor wllppr (it kills any gif wallpaper and set new one for 1nd monitor)
wllppr-set-random-gif
# set 2nd monitor (it's NOT gonna kill any gif process)
wllppr-set-random-gif-2nd-monitor
# kill all gif wallpapers (both monitors)
wllppr-kill-gif
# then u can choose new random gif for your 1nd and after that for 2nd monitor
```
