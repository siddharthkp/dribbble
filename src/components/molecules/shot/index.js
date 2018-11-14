import React from "react"
import PropTypes from "prop-types"
import "./shot.scss"
import { AvatarBlock, Card, Counter, Icon, Image, Toolbar } from "components"

const Shot = props => {
  return (
    <div className="shot">
      <Card>
        <Card.Body>
          <Image src={props.src} />
        </Card.Body>
        <Card.Footer>
          <Toolbar>
            <Toolbar.Left>
              <Icon name="paperclip" />
            </Toolbar.Left>
            <Toolbar.Right>
              <Counter value={props.stats.views} icon="view" />
              <Counter value={props.stats.comments} icon="comment" />
              <Counter value={props.stats.likes} icon="heart" />
            </Toolbar.Right>
          </Toolbar>
        </Card.Footer>
      </Card>
      <AvatarBlock {...props.user} />
    </div>
  )
}

Shot.propTypes = {
  url: PropTypes.string,
  stats: PropTypes.shape({
    views: PropTypes.number,
    comments: PropTypes.number,
    likes: PropTypes.number
  }),
  user: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
    label: PropTypes.string,
    src: PropTypes.string
  })
}

export default Shot
