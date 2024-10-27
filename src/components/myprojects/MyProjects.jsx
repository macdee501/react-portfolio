import React from 'react'
import './myprojects.css'
import firstPortfolio from '../../assets/firstPortfolio.jpg'
import secondPortfolio from '../../assets/secondPortfolio.png'
import BagsNBeauty from '../../assets/BagNBeauty.jpg'

function MyProjects() {
  return (
    <section id='myprojects'>

    <h5>My Recent Works</h5>
    <h2>Projects</h2>

    <div className="container portfolio_container">

      <article className='portfolio_item'>
          <div className="portfolio_item-image">
              <img src={firstPortfolio} alt="" />
          </div>
          <h3>First Portfolio</h3>
          <small className='text-light'>HTML | Javascript | CSS</small>
          <div className="portfolio_item-cta">
            <a href="https://github.com/macdee501/MyProfile" target="_blank" rel='noreferrer' className='btn'>Github</a>
            <a href="https://macdee501.github.io/MyProfile/" target="_blank" rel='noreferrer' className='btn btn-primary'>View Site</a>
          </div>
            
      </article>

      <article className='portfolio_item'>
          <div className="portfolio_item-image">
              <img src={secondPortfolio} alt="" />
          </div>
          <h3>Current Portfolio</h3>
          <small className='text-light'>ReactJS</small>
          <div className="portfolio_item-cta">
            <a href="#" target="_blank" rel='noreferrer' className='btn'>Github</a>  
            <a href="#" target="_blank" rel='noreferrer' className='btn btn-primary'>View Site</a>  
          </div>
          
      </article>

      <article className='portfolio_item'>
          <div className="portfolio_item-image">
              <img src={BagsNBeauty} alt="" />
          </div>
          <h3>BagsNBeauty SPA (First Client Website)</h3>
          <small className='text-light'>HTML | Javascript | CSS</small>
          <div className="portfolio_item-cta">
            <a href="https://macdee501.github.io/BagsNBeauty/" target="_blank" rel='noreferrer' className='btn btn-primary'>View Site</a>  
          </div>
          
      </article>
      
    </div>
  </section>
  )
}

export default MyProjects