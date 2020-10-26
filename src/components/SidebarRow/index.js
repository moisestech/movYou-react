import './sidebar-row.css';
import PropTypes from 'prop-types'

export default function SidebarRow ({ selected, Icon, title }) {
  return (
    <div className={`sidebar-row ${selected & && 'selected'}`}>
      <Icon className="sidebar-row-icon" />
      <h2 className="sidebar-row-title">{title}</h2>
    </div>
  )
}

SidebarRow.propTypes = {
  selected: PropTypes.bool.isRequired,
  Icon: PropTypes.component.isRequired,
  title: PropTypes.string.isRequired
}