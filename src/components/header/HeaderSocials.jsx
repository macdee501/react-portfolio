import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsMedium} from 'react-icons/bs'

function HeaderSocials() {
  return (
    <div className='header_socials'>

        <a href='https://www.linkedin.com/in/mcdonald-lekhoaba-6b79672ba/'  target='_blank' rel='noreferrer'><BsLinkedin/></a>
        <a href='https://github.com/macdee501?tab=repositories' target='_blank' rel='noreferrer'><BsGithub/></a>

    </div>
  )
}

export default HeaderSocials