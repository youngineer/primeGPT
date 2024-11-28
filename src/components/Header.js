import React from 'react'
import { HEADER_LOGO } from '../utils/constants'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex-wrap justify-center bg-sky-800 p-4 hidden md:flex items-center space-x-8'>
        <Link to="/">
          <img src={HEADER_LOGO} className='h-8 w-auto' alt='Login_page_logo'></img>
        </Link>
        <Link to="/browse" className=''>Movies</Link>
        <Link to="/browse" className=''>TV Shows</Link>
    </div>
  )
}

export default Header;