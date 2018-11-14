import React from "react"
import PropTypes from "prop-types"
import "./avatar-block.scss"
import { Avatar, Badge } from "components"

const AvatarBlock = props => {
  return (
    <div className="avatar-block">
      <Avatar size="xsmall" src={props.src} />
      <a href={props.url}>{props.name}</a>
      <Badge>{props.label}</Badge>
    </div>
  )
}

AvatarBlock.propTypes = {}

AvatarBlock.defaultProps = {}

export default AvatarBlock
