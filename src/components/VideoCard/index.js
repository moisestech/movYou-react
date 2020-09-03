import * as React from 'react'
import PropTypes from 'prop-types'

export default function VideoCard ({
  image,
  title,
  channel,
  views,
  timestamp,
  channelImage
}) {
  return (
    <div className='video-card'>
      Video Card
    </div>
  )
}

VideoCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  channel: PropTypes.string.isRequired,
  views: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired
  channelImage: PropTypes.string.isRequired
}