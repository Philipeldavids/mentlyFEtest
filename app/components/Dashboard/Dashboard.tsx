import React from 'react'
import ProgramsWidget from '../Programs/ProgramsWidget'
import GroupCallWidget from '../Activities/GroupCallWidget'
import ApplicationWidget from '../Forums/ApplicationWidget'
import RecentActivityWidget from '../Forums/RecentActivityWidget'
import MentorWidget from '../Forums/MentorWidget'

type DashboardProps = {
    widgets: string[]
  }
const Dashboard = ({widgets}: DashboardProps) => {

    
  return (
    <div>
    <div className="m-10 absolute mt-45 ml-65 w-240 h-150 grid grid-cols-3 gap-4">
    {widgets.includes('programs') && (
        <ProgramsWidget />
    )}
     {widgets.includes('groupcalls') && (
       <GroupCallWidget />
     )}
     {widgets.includes('applications') && (
        <ApplicationWidget/>
     )}
     {widgets.includes('mentors') && (
        <MentorWidget/>
     )}
     {widgets.includes('recent') && (
        <RecentActivityWidget/>
     )}
</div>
    </div>
  )
}

export default Dashboard