import React from "react"
import PropTypes from "prop-types"
import "./icon.scss"
import icons from "./icons-list"

const Icon = props => {
  const { color, ...restOfTheProps } = props
  return (
    <i className="icon" style={{ color: color }} {...restOfTheProps}>
      {icons[props.name]}
    </i>
  )
}

Icon.propTypes = {
  name: PropTypes.oneOf([
    "check",
    "heart",
    "link",
    "list",
    "paperclip",
    "comment",
    "view"
  ]),
  color: PropTypes.string
}

export default Icon
