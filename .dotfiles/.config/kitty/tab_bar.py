import math
import os
from pathlib import Path
from kitty.boss import get_boss
from kitty.fast_data_types import Screen, get_options, Color
from kitty.tab_bar import (
    DrawData,
    ExtraData,
    TabBarData,
    as_rgb,
    draw_title
)

def createLogDir():
    xdg_state_home = os.getenv("XDG_STATE_HOME", Path.home() / ".local" / "state")

    # Define the log directory path
    log_dir = Path(xdg_state_home) / "kitty"

    # Create the directory (if it doesn't exist)
    log_dir.mkdir(parents=True, exist_ok=True)

    return log_dir

opts = get_options()

lavender = as_rgb(int("B4BEFE", 16))
surface1 = as_rgb(int("45475A", 16))
base = as_rgb(int("1E1E2E", 16))
window_icon = ""
layout_icon = ""
active_tab_layout_name = ""
active_tab_num_windows = 1
left_status_length = 0
log_dir = createLogDir()


def draw_tab(
    draw_data: DrawData,
    screen: Screen,
    tab: TabBarData,
    before: int,
    max_title_length: int,
    index: int,
    is_last: bool,
    extra_data: ExtraData,
) -> int:


    # Open the file in write mode
    global base
    global active_tab_layout_name
    global active_tab_num_windows

    try:
        # active_tab_idx = get_boss().active_tab_manager.active_tab_idx
        # curr_tab_id = tab.tab_id
        output = get_boss().call_remote_control(None, ('get-colors', f'--match=recent:0'))

        lines = output.split('\n')
        background_value = None

        for line in lines:
            if line.startswith('background'):
                background_value = line.split()[1]
                break


        base = int(background_value[1:], 16)
        r,g,b = extract_rgb(base)
        base_color = Color(r,g,b)

        new_draw_data = draw_data._replace(inactive_bg=base_color)

        draw_tab_with_separator(new_draw_data, screen, tab, before, max_title_length, index, is_last, extra_data, as_rgb(base))
    except Exception as e:
        with open(log_dir / "tab_bar.log", "a") as f:
            f.write(f"Error: {e}\n")



    return screen.cursor.x

def draw_tab_with_separator(
    draw_data: DrawData, screen: Screen, tab: TabBarData,
    before: int, max_tab_length: int, index: int, is_last: bool,
    extra_data: ExtraData,
    background: int
) -> int:
    screen.cursor.bg = background
    screen.cursor.fg = as_rgb(draw_data.active_fg.rgb)
    screen.cursor.bold = screen.cursor.italic = False

    if index==1:
        screen.draw(draw_data.sep)


    if tab.is_active:
        screen.cursor.bg = background
        screen.cursor.fg = as_rgb(draw_data.active_bg.rgb)
        screen.draw('')
        screen.cursor.bg = as_rgb(draw_data.active_bg.rgb)
        screen.cursor.fg = as_rgb(draw_data.active_fg.rgb)
    else:
        screen.cursor.bg = as_rgb(draw_data.inactive_bg.rgb)
        screen.cursor.fg = as_rgb(draw_data.inactive_fg.rgb)


    draw_title(draw_data, screen, tab, index, max_tab_length)

    if tab.is_active:
        screen.cursor.bg = background
        screen.cursor.fg = as_rgb(draw_data.active_bg.rgb)
        screen.draw('')
        screen.cursor.bg = background
        screen.cursor.fg = as_rgb(draw_data.active_fg.rgb)
    else:
        screen.cursor.bg = background
        screen.cursor.fg = as_rgb(draw_data.inactive_fg.rgb)



    if not is_last:
        screen.draw(draw_data.sep)

    if is_last:
        remaining_size = screen.columns - screen.cursor.x
        cwd = truncate_str(get_cwd() + draw_data.sep , remaining_size)

        screen.cursor.bg = background
        screen.cursor.fg = as_rgb(draw_data.inactive_fg.rgb)
        screen.cursor.bold = screen.cursor.italic = False
        screen.draw(' ' * (remaining_size - len(cwd)))
        screen.draw(cwd)

    end = screen.cursor.x
    return end

def truncate_str(input_str, max_length):
    if len(input_str) > max_length:
        half = max_length // 2
        return input_str[:half] + "…" + input_str[-half:]
    else:
        return input_str

def get_cwd():
    cwd = ""
    tab_manager = get_boss().active_tab_manager
    if tab_manager is not None:
        window = tab_manager.active_window
        if window is not None:
            cwd = window.cwd_of_child

    cwd_parts = list(Path(cwd).parts)

    if len(cwd_parts) > 1:
        if cwd_parts[1] == "home" or str(Path(*cwd_parts[:3])) == os.getenv("HOME") and len(cwd_parts) > 3:
            # replace /home/{{username}}
            cwd_parts = ["~"] + cwd_parts[3:]
            if len(cwd_parts) > 1:
                cwd_parts[0] = "~/"
        else:
            cwd_parts[0] = "/"
    else:
        cwd_parts[0] = "/"

    max_length = 10
    cwd = cwd_parts[0] + "/".join(
        [
            s if len(s) <= max_length else truncate_str(s, max_length)
            for s in cwd_parts[1:]
        ]
    )
    return cwd

def extract_rgb(hex_color: int):
    r = (hex_color >> 16) & 0xFF  # Extracts the red component
    g = (hex_color >> 8) & 0xFF   # Extracts the green component
    b = hex_color & 0xFF          # Extracts the blue component
    return r, g, b