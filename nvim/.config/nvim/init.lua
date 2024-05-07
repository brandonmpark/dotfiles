-- Set leader key
vim.g.mapleader = " "
vim.g.maplocalleader = " "

-- Enable nerd font
vim.g.have_nerd_font = true

require("options")
require("keymaps")
require("lazy-bootstrap")
require("lazy-plugins")
