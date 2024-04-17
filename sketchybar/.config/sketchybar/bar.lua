local colors = require("colors")

-- Equivalent to the --bar domain
sbar.bar({
  topmost = "window",
  height = 42,
  color = colors.bar.bg,
  padding_right = 2,
  padding_left = 2,
  corner_radius = 8,
  position = "top",
  margin=6,
  border_width=2,
  border_color=colors.bar.border,
  y_offset=8,
})
