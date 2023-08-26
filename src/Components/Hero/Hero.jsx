import React from 'react'
import './Hero.css'
import hero from '../../images/hero.png'
const Hero = () => {
  return (

    <div className='Hero'>
      <div className="HeroContainer">


        <div className='HeroText'>
          <span>Alowishus</span><br />
          <span>Delicious</span><br />
          <span>Coffee</span>

          <p>A drink from the 'My Alowishus' bottled brews<br />range OR grab one of our delicious coffee's.</p>

          <div className='Buttons'>
            <button className='DownloadBtn'>Download App</button >
            <button className='CoffeeBtn'>Shop Coffee</button >
          </div>
        </div>
        <div className="image-container">
          <img src={hero} alt="Logo" className="rotated-image" />
        </div>
      </div>
    </div>
  )
}

export default Hero