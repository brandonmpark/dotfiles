return {
  paddings = 3,
  group_paddings = 5,

  icons = "sf-symbols", -- alternatively available: NerdFont

  -- This is a font configuration for SF Pro and SF Mono (installed manually)
  font = require("helpers.default_font"),

  -- Alternatively, this is a font config for JetBrainsMono Nerd Font
  font = {
    text = "Lato", -- Used for text
    numbers = "FiraCode Nerd Font Mono", -- Used for numbers
    style_map = {
      ["Regular"] = "Regular",
      ["Semibold"] = "SemiBold",
      ["Bold"] = "Bold",
      ["Heavy"] = "Heavy",
      ["Black"] = "Black",
    },
  },
}
