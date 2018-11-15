import rgbHex from "rgb-hex"

const color = rawColor => {
  if (!rawColor) return null
  if (typeof rawColor === "string") return rawColor

  const { r, g, b } = rawColor
  const hex = "#" + rgbHex(r, g, b)
  return hex
}

export default color
