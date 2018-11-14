import React from "react"
import "./box.scss"
import rgbHex from "rgb-hex"
import Box from "./box"

const Boxes = props => {
  return (
    <div style={{ marginBottom: "10px" }}>
      {Object.keys(props.colors).map((key, index) => {
        const color = props.colors[key]
        const { r, g, b } = color
        const hex = "#" + rgbHex(r, g, b)
        return <Box key={index} color={hex} name={props.name + "-" + key} />
      })}
    </div>
  )
}

export default Boxes
