import * as React from 'react'
import ReactDOM from 'react-dom'

export default function VideoRow ({
  views,
  subs,
  description,
  timestamp,
  channel,
  title,
  image
}) {
  return (
    <div className='video-row'>
      Video Row
    </div>
  )
}

VideoRow.propTypes = {
  views: PropTypes.string.isRequired,
  subs: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  channel: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}