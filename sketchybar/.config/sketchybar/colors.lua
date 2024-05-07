return {
  black = 0xffdce0e8,
  white = 0xff4c4f69,
  red = 0xffd20f39,
  green = 0xff40a02b,
  blue = 0xff1e66f5,
  yellow = 0xffdf8e1d,
  orange = 0xfffe640b,
  magenta = 0xff8839ef,
  grey = 0xff5c5f77,
  pink = 0xffea76cb,
  teal = 0xff179299,
  lavender = 0xff7287fd,
  transparent = 0x00000000,

  bar = {
    bg = 0xffeff1f5,
    border = 0xffea76cb,
  },
  popup = {
    bg = 0xc02c2e34,
    border = 0xff7f8490
  },
  bg1 = 0xffCCD0DA,
  bg2 = 0xffbcc0cc,

  with_alpha = function(color, alpha)
    if alpha > 1.0 or alpha < 0.0 then return color end
    return (color & 0x00ffffff) | (math.floor(alpha * 255.0) << 24)
  end,
}
