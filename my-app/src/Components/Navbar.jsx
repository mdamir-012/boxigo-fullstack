import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const links=[
        {title:"My Moves",Path:"/mymoves"},
        {title:"My Profile",Path:"myprofile"}
    ]

  return (
    <div>
    <div className='flex justify-evenly bg-orange-800 text-white text-2xl h-12'>
    {links.map((elem)=>(
        <Link to={elem.Path}>{elem.title}</Link>
    ))}
    </div>
      
    </div>
  )
}

export default Navbar
