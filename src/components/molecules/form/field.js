import React from "react"
import PropTypes from "prop-types"

import { Icon } from "components"

const Field = props => {
  const {
    Component,
    helpText,
    optional,
    labelDefinition,
    counter,
    ...restOfTheProps
  } = props

  return (
    <div className="field">
      <label>
        {props.label}
        {counter ? <span className="counter">{counter}</span> : null}
        {labelDefinition ? (
          <Icon name="help" title={props.labelDefinition} />
        ) : null}
        {optional ? <span className="optional"> (optional)</span> : null}
      </label>
      <Component {...restOfTheProps} />
      {helpText ? <div className="help-text">{helpText}</div> : null}
    </div>
  )
}

Field.propTypes = {
  label: PropTypes.string.isRequired,
  optional: PropTypes.bool,
  helpText: PropTypes.string,
  labelDefinition: PropTypes.string
}

Field.defaultProps = {
  optional: false
}

export default Field
