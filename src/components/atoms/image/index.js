import React from "react"
import PropTypes from "prop-types"
import "./image.scss"

const Image = props => {
  return <img className="image" {...props} />
}

Image.propTypes = {
  src: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
}

export default Image
