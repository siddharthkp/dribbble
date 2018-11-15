import React from "react"
import getColor from "./color"
import "./box.scss"

const Box = props => {
  const color = getColor(props.color)
  return (
    <div className="h-box">
      <div
        className="color"
        style={{
          width: props.size,
          height: props.size,
          backgroundColor: color,
          ...props.style
        }}
      />
      <div>{props.name}</div>
      {color ? <div>{color}</div> : null}
    </div>
  )
}

Box.defaultProps = {
  size: 100
}

export default Box
