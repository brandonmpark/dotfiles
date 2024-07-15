return {
	"catppuccin/nvim",
	name = "catppuccin",
	priority = 1000,
	-- Add catppuccin integrations here
	opts = {
		integrations = {
			fidget = true,
			mason = true,
			neotree = true,
			which_key = true,
			leap = true,
			indent_blankline = { colored_indent_levels = true },
		},
	},
	config = function(_, opts)
		require("catppuccin").setup(opts)
		vim.cmd.colorscheme("catppuccin-mocha")
	end,
}
