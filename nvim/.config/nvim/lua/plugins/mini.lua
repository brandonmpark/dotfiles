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
		end,
	},
}
