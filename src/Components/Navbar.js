import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
        <nav className='Navbar'>
          <Link to='/'>
              <h2>React Redux Contact list App </h2>
           </Link>
              
        </nav>
        </div>
    )
}

export default Navbar;
