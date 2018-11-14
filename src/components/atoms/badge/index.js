import React from "react"
import PropTypes from "prop-types"
import "./badge.scss"

const Badge = props => {
  return (
    <span className="badge" style={{ backgroundColor: props.color }}>
      {props.children}
    </span>
  )
}

Badge.propTypes = {
  color: PropTypes.string
}

Badge.defaultProps = {
  color: "#bbb"
}

export default Badge
