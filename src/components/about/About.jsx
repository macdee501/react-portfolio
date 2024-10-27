import React from 'react'
import './about.css'
import myImage from '../../assets/avatar.png'
import {GiGraduateCap} from 'react-icons/gi'
import {BsBookmarkStar} from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'


function About() {
  return (
    <section id='about'>

            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className='container about_container'>

                <div className='about_me'>
                    <div className='about_me-image'>
                        <img src={myImage} alt='picture of me'/>
                    </div>
                </div>

                <div className='about_content'>
                    <div className='about_cards'>

                        <article className='about_card'>
                            <GiGraduateCap className='about_icon'/>
                            <h5>Diploma</h5>
                            <small>National Diploma Software Development<br/><i>Central University Of Technology</i></small>
                        </article>

                        
                    </div>

                    <p> Im a <b>Web/Software development post graduate</b> with aspiration to work in the tech world and create amazing website and apps. </p>
                    <br/>
                    <br/>
                    <p>From a young age I have been interested in developing apps and eventually broaden my skills into the world of game developing. Along the way I have acquired skills that work hand in hand with web developing such as Adobe Photoshop,After Effects, InDesign and Illustrator</p>

                </div>

            </div>

    </section>
  )
}

export default About