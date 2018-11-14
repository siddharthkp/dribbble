import React from "react"
import PropTypes from "prop-types"
import "./toolbar.scss"

const Toolbar = props => {
  return (
    <div className="toolbar">
      {props.children}
      <div className="toolbar-clear" />
    </div>
  )
}

Toolbar.Left = props => <div className="toolbar-left" {...props} />
Toolbar.Right = props => <div className="toolbar-right" {...props} />

export default Toolbar
