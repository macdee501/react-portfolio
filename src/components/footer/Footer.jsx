import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsMedium} from 'react-icons/bs'

function Footer() {
  return (
    <footer>
        <a href="#home" className='footer_logo'>Lehlohonolo Mcdonald Lekhoaba</a>
        <ul className='permalinks'>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#experience'>Experience</a></li>
            <li><a href='#myprojects'>My Projects</a></li>
        </ul>

        <div className='footer_socials'>
            <a href='https://www.linkedin.com/in/mcdonald-lekhoaba-6b79672ba/'><BsLinkedin/></a>
            <a href='https://github.com/macdee501?tab=repositories'><BsGithub/></a>
        </div>

        <div className='footer_copyright'>
            <small>&copy ; Mcdonald Lekhoaba. All rights reserved</small>
        </div>
    </footer>
  )
}

export default Footer