import React from "react"
import PropTypes from "prop-types"
import "./counter.scss"

import { Icon } from "components"

const Counter = props => {
  return (
    <div className="counter" {...props}>
      {props.icon ? <Icon name={props.icon} /> : null}
      {props.value}
    </div>
  )
}

export default Counter
