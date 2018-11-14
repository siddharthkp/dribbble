import React from "react"
import PropTypes from "prop-types"
import "./card.scss"

const Card = props => {
  return <div className="card" {...props} />
}

Card.Body = props => <div className="card-body" {...props} />
Card.Footer = props => <div className="card-footer" {...props} />

export default Card
