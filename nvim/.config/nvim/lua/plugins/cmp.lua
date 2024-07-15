local cmp_kinds = {
	Text = "",
	Method = "",
	Function = "",
	Constructor = "",
	Field = "",
	Variable = "",
	Class = "",
	Interface = "",
	Module = "",
	Property = "",
	Unit = "",
	Value = "",
	Enum = "",
	Keyword = "",
	Snippet = "",
	Color = "",
	File = "",
	Reference = "",
	Folder = "",
	EnumMember = "",
	Constant = "",
	Struct = "",
	Event = "",
	Operator = "",
	TypeParameter = "",
	Copilot = "",
}

return {
	{
		"hrsh7th/nvim-cmp",
		event = "InsertEnter",
		dependencies = {
			"SirVer/ultisnips",
			"quangnguyen30192/cmp-nvim-ultisnips",
			"hrsh7th/cmp-nvim-lsp",
			"hrsh7th/cmp-path",
			"nvim-treesitter",
		},
		config = function()
			local cmp = require("cmp")
			local cmp_ultisnips_mappings = require("cmp_nvim_ultisnips.mappings")
			cmp.setup({
				window = {
					completion = {
						border = "rounded",
						winhighlight = "Normal:Normal,FloatBorder:FloatBorder,CursorLine:CursorLine,Search:None",
						side_padding = 1,
						col_offset = -1,
						scrollbar = false,
					},
					documentation = {
						border = "rounded",
						winhighlight = "Normal:Normal,FloatBorder:FloatBorder,CursorLine:CursorLine,Search:None",
						side_padding = 1,
					},
				},
				formatting = {
					expandable_indicator = true,
					fields = { "abbr", "kind" },
					format = function(_, vim_item)
						vim_item.kind = (cmp_kinds[vim_item.kind] or "") .. " " .. vim_item.kind
						return vim_item
					end,
				},
				snippet = {
					expand = function(args)
						vim.fn["UltiSnips#Anon"](args.body)
					end,
				},
				completion = { completeopt = "menu,menuone,noinsert" },

				mapping = cmp.mapping.preset.insert({
					["<Down>"] = cmp.mapping.select_next_item(),
					["<Up>"] = cmp.mapping.select_prev_item(),

					["<C-b>"] = cmp.mapping.scroll_docs(-4),
					["<C-f>"] = cmp.mapping.scroll_docs(4),

					["<C-Space>"] = cmp.mapping.complete({}),

					["<Tab>"] = cmp.mapping(function(fallback)
						if cmp.visible() then
							cmp.confirm({ select = false })
						else
							cmp_ultisnips_mappings.expand_or_jump_forwards(fallback)
						end
					end, { "i", "s" }),
					["<S-Tab>"] = cmp.mapping(function(fallback)
						cmp_ultisnips_mappings.jump_backwards(fallback)
					end, { "i", "s" }),

					-- ["<Esc>"] = cmp.mapping.abort(),
				}),
				sources = {
					{ name = "ultisnips" },
					{ name = "copilot" },
					{ name = "nvim_lsp" },
					{ name = "path" },
				},
				experimental = {
					ghost_text = true,
				},
			})
		end,
	},
}
