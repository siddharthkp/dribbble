import React from "react"
import PropTypes from "prop-types"
import "./button.scss"

const Button = props => {
  return (
    <button
      className={`button button--${props.appearance}`}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  )
}

Button.propTypes = {
  disabled: PropTypes.bool,
  appearance: PropTypes.oneOf([
    "primary",
    "secondary",
    "secondary-alt",
    "info",
    "accent",
    "success"
  ])
}

Button.defaultProps = {
  disabled: false,
  appearance: "primary"
}

export default Button
