import React from 'react'
import Navbar from '../../navbar/Navbar'
import Tasks from './Tasks'

const TaskPage = () => {
  return (
    <div className='gradient-bg'>
        <Navbar/>
        <Tasks/>
    </div>
  )
}

export default TaskPage