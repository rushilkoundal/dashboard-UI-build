import TeamMember from './TeamMember'
import './WidgetL.css'

function WidgetL() {
  return (
    <div className='widgetL'>
      <div className="heading">
        <span>Team Members</span>
        <span><button className='button'>View All</button></span>
      </div>
      <TeamMember />
      <TeamMember />
      <TeamMember />
    </div>
  )
}

export default WidgetL