import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/avatar.png'
import HeaderSocials from './HeaderSocials'

function Header(){
  return (
    
    
      <header id='home'>

        <div className="container header_container">

          <h5>Greetings, I'm</h5>
          <h1>Lehlohonolo Mcdonald Lekhoaba</h1>
          <h5 className="text-light">Web | Software Development Postgraduate</h5>
          <CTA/>
          <HeaderSocials/>

          <div className="me">

            <img src={me} alt='me'/>
          </div>

          <a href="#contacts" className='scroll_down'>Scroll Down</a>
        </div>
      </header>

    
    
  )
}

export default Header