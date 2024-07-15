return {
	"lervag/vimtex",
	init = function()
		vim.g.vimtex_view_method = "sioyek"
		vim.g.vimtex_view_sioyek_exe = "/Applications/sioyek.app/Contents/MacOS/sioyek"
		vim.opt.conceallevel = 1
		vim.g.tex_conceal = "abdmg"
		vim.g.vimtex_indent_on_ampersands = 0
		vim.g.vimtex_compiler_silent = 1
		vim.g.vimtex_quickfix_open_on_warning = 0
		vim.g.vimtex_log_verbose = 0
	end,
}
