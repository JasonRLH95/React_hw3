import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar_container'>
        <h1><a href='https://jasonrlh95.github.io/all_projects/' target='_blank'>JasonR95</a></h1>
        <Link to={"/color_picker"}><button>Color picker</button></Link>
        <Link to={"/reminder_pro"}><button>Reminder Pro</button></Link>
    </div>
  )
}
