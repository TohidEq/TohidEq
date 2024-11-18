return {
  "justinsgithub/oh-my-monokai.nvim",
  lazy = true,
  priority = 1000,
  config = function()
    require("oh-my-monokai").setup({
      transparent_background = true,
      terminal_colors = true,
      devicons = true, -- highlight the icons of `nvim-web-devicons`
      palette = "default", -- or create your own ^^ e.g. justinsgithub
      inc_search = "underline", -- underline | background
      background_clear = {
        "toggleterm",
        "float_win",
        "telescope",
        "which-key",
        "renamer",
        "neo-tree",
      }, -- "float_win", "toggleterm", "telescope", "which-key", "renamer", "neo-tree"
      plugins = {
        bufferline = {
          underline_selected = false,
          underline_visible = false,
        },
        indent_blankline = {
          context_start_underline = false,
        },
      },
      ---@param c Colorscheme
      override = function(c) end,
    })
  end,
}
