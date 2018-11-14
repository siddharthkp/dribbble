import React from "react"
import PropTypes from "prop-types"
import "./avatar.scss"

const Avatar = props => {
  return <img className={`avatar ${props.size}`} src={props.src} />
}

Avatar.propTypes = {
  size: PropTypes.oneOf(["xsmall", "small", "medium", "large", "xlarge"])
}

Avatar.defaultProps = {
  size: "small"
}

export default Avatar
