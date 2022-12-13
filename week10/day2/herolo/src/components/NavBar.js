import React from 'react'
import { NavLink } from 'react-router-dom'



function NavBar() {

    return (
        <>
            <nav className='bg-blue h2'>
                <NavLink className='white' to='/' >home </NavLink>
                <NavLink className='white'to='/favorites' >favorites</NavLink>
            </nav>

        </>

    )
}

export default NavBar