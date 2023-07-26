import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <>
    <div className='header-container'>
        <li>
            <a href='https://nikfolio.onrender.com/' target='_blank'>nikfolio.com</a>
        </li>
        <li>
            <a href="#home" title='Home'>Home</a>
        </li>
        <li>
            <a href="#about" title='About'>About</a>
        </li>
        <li>
            <a href="#pricing" title='Pricing'>Pricing</a>
        </li>
        <li>
            <a href="#contact" title='contact'>Contact</a>
        </li>
    </div>
      
    </>
  )
}

export default Header
