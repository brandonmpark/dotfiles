return {
	"luukvbaal/nnn.nvim",
	opts = {
		picker = {
			style = { border = "rounded" },
		},
		auto_close = true,
		quitcd = "cd",
	},
	config = function(_, opts)
		require("nnn").setup(opts)
		vim.keymap.set("n", "\\", ":NnnPicker<CR>")
	end,
}
