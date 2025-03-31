import React from 'react'

export default function Task({ task }) {
  return (
    <div className='task_container'>
        <h2>{task.text}</h2>
        <p>{task.date}</p>
    </div>
  )
}
