import * as React from 'react'
import PropTypes from 'prop-types'

export default function SidebarRow () {
  return (
    <div className='side-bar-row'>
      SidebarRow
    </div>
  )
}

SidebarRow.propTypes = {
  selected: PropTypes.bool.isRequired,
  Icon: PropTypes.component.isRequired,
  title: PropTypes.string.isRequired
}