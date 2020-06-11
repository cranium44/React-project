import React from 'react'
import iphone from '../../images/iphone6.png'
import './IphoneBanner.css'

const IphoneBanner = () => {
  return (
    <div className="iphone_banner">
      <div className="iphone_banner_container container">
        <div className="iphone_banner_text_container col-5">
            <span className="large_text">iPhone 6 Plus</span>
            <p>Performance and design. Taken right to the edge.</p>
            <a href="/store" className="more_link blue">SHOP NOW</a>
        </div>
        <div className="iphone_banner_image col-5">
            <img src={iphone} alt="iphone"/>
        </div>
      </div>
    </div>
  )
}

export default IphoneBanner
