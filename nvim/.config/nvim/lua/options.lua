-- Add line numbers
vim.opt.number = true
vim.opt.relativenumber = true

-- Hide command line
-- vim.opt.cmdheight = 0

-- Enable mouse
vim.opt.mouse = "a"

-- Don't show statusline
vim.opt.laststatus = 0
vim.opt.ruler = false

-- Sync clipboard
vim.opt.clipboard = "unnamedplus"

-- Enable break indent
vim.opt.breakindent = true

-- Enable undo history
vim.opt.undofile = true

-- Case-insensitive search
vim.opt.ignorecase = true
vim.opt.smartcase = true

-- Enable signcolumn always
vim.opt.signcolumn = "yes"

-- Decrease buffer update time
vim.opt.updatetime = 250

-- Decrease sequence timeout time
vim.opt.timeoutlen = 300

-- Configure split position
vim.opt.splitright = true
vim.opt.splitbelow = true

-- Configure whitespace
vim.opt.list = true
vim.opt.listchars = { tab = "▏ ", trail = "·", nbsp = "␣" }

-- Preview command results
vim.opt.inccommand = "split"

-- Don't show cursor line
vim.opt.cursorline = false

-- Center cursor
vim.opt.scrolloff = 9999

-- Enable search highlight
vim.opt.hlsearch = true

-- Set tab options
vim.opt.tabstop = 4
vim.opt.shiftwidth = 4
vim.opt.softtabstop = 0
vim.opt.expandtab = false
vim.opt.smarttab = true

-- Line wrapping
vim.opt.wrap = false
-- vim.opt.textwidth = 79

-- Virtual editing
vim.opt.virtualedit = "block"

-- Full colors
vim.opt.termguicolors = true

-- Spell check
vim.opt.spell = true
vim.opt.spelllang = "en_us"
