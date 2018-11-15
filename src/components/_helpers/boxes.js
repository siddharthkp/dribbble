import React from "react"
import "./box.scss"
import Box from "./box"

const Boxes = props => {
  return (
    <div style={{ marginBottom: "10px" }}>
      {Object.keys(props.colors).map((key, index) => {
        const rawColor = props.colors[key]

        return (
          <Box key={index} color={rawColor} name={props.name + "-" + key} />
        )
      })}
    </div>
  )
}

export default Boxes
