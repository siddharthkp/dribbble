import React from "react"
import PropTypes from "prop-types"
import "./text-area.scss"

const TextArea = props => {
  const { hasError, ...restOfTheProps } = props

  let className = "text-input"
  if (hasError) className += " error"

  return (
    <textarea
      className={className}
      disabled={props.disabled}
      {...restOfTheProps}
    />
  )
}

TextArea.propTypes = {
  hasError: PropTypes.bool,
  disabled: PropTypes.bool
}

TextArea.defaultProps = {
  hasError: false,
  disabled: false
}

export default TextArea
