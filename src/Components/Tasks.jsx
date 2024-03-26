import React from 'react'
import about from '../assets/about.avif'

const Tasks = () => {
  return (
    <div id='tasks' className='mx-4 my-4'>
        <img src={about} alt='/' className='h-[600px] w-[600px] md:h-[700px] md:w-full rounded-lg'/>
    </div>
  )
}

export default Tasks