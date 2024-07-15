local wezterm = require("wezterm")
local config = wezterm.config_builder()
config.color_scheme = "Catppuccin Mocha"
config.font = wezterm.font_with_fallback({
	"Iosevka Term",
	"Symbols Nerd Font Mono",
})
config.font_size = 14
config.adjust_window_size_when_changing_font_size = false
config.enable_tab_bar = false
config.window_decorations = "RESIZE"
config.window_padding = {
	left = 15,
	right = 15,
	top = 5,
	bottom = 5,
}
config.default_cursor_style = "BlinkingBar"
config.window_close_confirmation = "NeverPrompt"
config.line_height = 1

config.allow_square_glyphs_to_overflow_width = "Never"

return config
