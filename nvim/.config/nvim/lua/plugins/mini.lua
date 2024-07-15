-- Miscellaneous
return {
	{
		"echasnovski/mini.nvim",
		config = function()
			-- Better textobjects
			require("mini.ai").setup({ n_lines = 500 })

			-- Surroundings
			require("mini.surround").setup({
				mappings = {
					add = "gsa",
					delete = "gsd",
					find = "gsf",
					find_left = "gsF",
					highlight = "gsh",
					replace = "gsr",
					update_n_lines = "gsn",
				},
			})

			-- Split/join
			require("mini.splitjoin").setup()

			require("mini.files").setup({
				mappings = {
					go_in = "<Right>",
					go_in_plus = "<S-Right>",
					go_out = "<Left>",
					go_out_plus = "<S-Left>",
					close = "\\",
				},
			})
			vim.keymap.set("n", "\\", ":lua MiniFiles.open()<CR>")
		end,
	},
}
