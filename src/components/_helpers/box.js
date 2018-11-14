import React from "react"
import "./box.scss"

const Box = props => {
  return (
    <div className="h-box">
      <div
        className="color"
        style={{
          width: props.size,
          height: props.size,
          backgroundColor: props.color,
          ...props.style
        }}
      />
      <div>{props.name}</div>
      {typeof props.color === "string" ? <div>{props.color}</div> : null}
    </div>
  )
}

Box.defaultProps = {
  size: 100
}

export default Box
