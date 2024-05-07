local colors = require("colors")

-- Equivalent to the --bar domain
sbar.bar({
  topmost = "window",
  height = 42,
  color = colors.transparent,
  padding_right = 2,
  padding_left = 2,
  position = "top",
  margin=0,
  y_offset=0,
})
