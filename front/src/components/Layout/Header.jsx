import React from 'react'
import terrasse from '../../assets/images/terrasse.jpg'
import LogoACP from '../../assets/images/LogoACP.png'

const Header = () => {
  return (
    <header>
      <div className="image-banner">
        <img src={terrasse} alt="terrasse" />
        <div className="logo">
          <img src={LogoACP} alt="logo" />
        </div>
      </div>
    </header>
  )
}

export default Header