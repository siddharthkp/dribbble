import React from "react"
import PropTypes from "prop-types"
import "./text-input.scss"

const TextInput = props => {
  const { hasError, ...restOfTheProps } = props

  let className = "text-input"
  if (hasError) className += " error"

  return (
    <input
      className={className}
      disabled={props.disabled}
      {...restOfTheProps}
    />
  )
}

TextInput.propTypes = {
  hasError: PropTypes.bool,
  disabled: PropTypes.bool
}

TextInput.defaultProps = {
  hasError: false,
  disabled: false
}

export default TextInput
