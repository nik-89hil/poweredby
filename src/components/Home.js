import React from 'react'
import Header from './Header'

import './Header.css'
import Fotter from './Fotter.js'

const Home = () => {
  return (
    <>
    <Header/>
    <div className='container-one' id='home'>
      <h1>Get Your own Website</h1>
      <p>Grow your online presence in Digital India..</p>
      <button><a href="#get_started" style={{textDecoration:"none", color:"black"}}>Get Started</a></button>
    </div>
    <br />
    <div className="container-two" id='get_started'>
      <br />
      <h1>#Features</h1>
      <ul>
        <li>Your Content looks best across all devices. <i class="fa-solid fa-check"></i></li>
        <li>Free Templates for your website or you can customize it. <i class="fa-solid fa-check"></i></li>
        <li>Animation and Graphic in your website. <i class="fa-solid fa-check"></i></li>
        <li>Single page application(SPA) like youtube, insta etc. <i class="fa-solid fa-check"></i></li>
        <li>Unlimited landing pages. <i class="fa-solid fa-check"></i></li>
        <li>Freedom to sell your product anytime and anywhere. <i class="fa-solid fa-check"></i></li>
        <li>Connect with Anyone , Anywhere and Anytime. <i class="fa-solid fa-check"></i></li>
        <li>and so on....</li>
      </ul>
    </div>
    <br />
    <div className="container-three">
      <br />
      <h1>#websiteFor</h1>
      <div className="three-gallery">
        <div><p>Photography</p><span className='icon'><i class="fa-solid fa-camera"></i></span></div>
        <div><p>Baking</p><span className="icon"><i class="fa-solid fa-cake-candles"></i></span></div>
        <div><p>Cooking</p><span className="icon"><i class="fa-solid fa-utensils"></i></span></div>
        <div><p>Tour & Travel</p> <span className="icon"><i class="fa-solid fa-earth-americas"></i></span></div>
        <div><p>Startups</p><span className="icon"><i class="fa-brands fa-medapps"></i></span></div>
        <div><p>E-commerce</p><span className="icon"><i class="fa-solid fa-bag-shopping"></i></span></div>
        <div><p>Design & Craft</p><span className="icon"><i class="fa-solid fa-hand-holding-heart"></i></span></div>
        <div><p>Portfolio</p><span className="icon"><i class="fa-solid fa-users-line"></i></span></div>
        <div><p>More.</p><span className="icon"><i class="fa-solid fa-icons"></i></span></div>
      </div>
    </div>
    <br />
    <div className="container-four" id='about'>
      <br />
      <h1>#About</h1>
      <br/>
      <p>
        <span>Hello Everyone,</span> <br />
        This website is for those people who wants to show their skills and work to digital world. Website dont need any space in your device simply some keyword connect your business with Digital world.
        free templates are available and also you can customize it. you can enhance your profession with your personalised website. we help you to add your projects online so, interested people can connect easily with you.
        soon many blogs will post so you can grow your business online. <br />
        <span>Thank You...</span> 
      </p>
    </div>
    <br />
    <div className="container-five" id='pricing'>
      <br/>
      <h1>#Pricing</h1>
      <div className="pricing">
        <div className="standard">
          <p className='topic_price'>Standard</p>
          <p className="summarry">
            <ul>
              <li>Include</li>
              <li>Static Pages</li>
              <li>Survey forms</li>
              <li>Landing Pages</li>
              <li>Portfolio</li>
              <li>Digital Resume</li>
            </ul>
          </p>
          <p className="charge">
            <span>Pricing : </span>{"<"} $100 + hosting charge
          </p>
        </div>
        <div className="advance">
          <p className='topic_price'>Advance</p>
          <p className="summarry">
            <ul>
              <li>Include</li>
              <li>Single Page Applications</li>
              <li>MERN Application</li>
              <li>Startups</li>
              <li>Complex website</li>
              <li>and other those are not in standard</li>
            </ul>
          </p>
          <p className="charge">
           <span>Pricing :</span> contact
          </p>
      </div>
      </div>
    </div>

    <Fotter/>
    
      
    </>
  )
}

export default Home
