import React from 'react'
import CV from '../../assets/Mcdonald-Lehlohonolo-Lekhoaba.pdf'

function CTA() {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA