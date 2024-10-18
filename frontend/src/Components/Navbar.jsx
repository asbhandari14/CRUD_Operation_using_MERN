import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="navbar_outer_container w-full h-16 flex justify-center items-center shadow-md">
        <div className="navbar_inner_container container w-[95%] h-full flex justify-between items-center">
            <NavLink to="/"><h1 className='text-2xl font-semibold text-black'>CRUD Operations</h1></NavLink>
            <div className=' list-none flex justify-center items-center gap-4 text-lg'>
                <NavLink to="/show"><li>Show All User</li></NavLink>
            </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
