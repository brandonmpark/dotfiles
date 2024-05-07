-- Treesitter
return {
	{
		"nvim-treesitter/nvim-treesitter",
		build = ":TSUpdate",
		opts = {
			-- Add languages here
			ensure_installed = { "bash", "c", "go", "html", "lua", "luadoc", "markdown", "vim", "vimdoc" },
			ignore_install = { "latex" },
			auto_install = true,
			highlight = {
				enable = true,
				additional_vim_regex_highlighting = { "ruby" },
			},
			indent = { enable = true, disable = { "ruby" } },
			incremental_selection = {
				enable = true,
				keymaps = {
					init_selection = "<Leader>v",
					node_incremental = "<Tab>",
					node_decremental = "<S-Tab>",
				},
			},
			textobjects = {
				select = {
					enable = true,
					lookahead = true,
					keymaps = {
						["af"] = { query = "@function.outer", desc = "Select outer part of function" },
						["if"] = { query = "@function.inner", desc = "Select inner part of function" },
						["ac"] = { query = "@class.outer", desc = "Select outer part of class" },
						["ic"] = { query = "@class.inner", desc = "Select inner part of class" },
					},
					selection_modes = {
						["@function.outer"] = "V",
					},
					include_surrounding_whitespace = true,
				},
			},
		},
		config = function(_, opts)
			require("nvim-treesitter.install").prefer_git = true
			require("nvim-treesitter.configs").setup(opts)
		end,
	},
}
