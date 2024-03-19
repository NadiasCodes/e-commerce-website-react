
import React from 'react'
import "./Hero.css"
import clothes_hanger_icon from "../Assets/clothes_hanger_icon.png";
import arrow from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";


const Hero = () => {
  return (
    <div className='hero'>

<div className="hero-left">
    <h2>Available Now</h2>
<div>
    <div className="hero-clothes-hanger-icon">
        <p>New</p>
        <img src={clothes_hanger_icon} alt="hero-icon" />
    </div>
    <p>Collections</p>
    <p>For Everyone</p>
</div>
<div className="hero-latest-btn">
    <div>Latest Collection</div>
    <img src={arrow} alt="arrow"/>
</div>


</div>
<div className="hero-right">

<img src={hero_image} alt="hero"/>
</div>
    </div>
  )
}

export default Hero