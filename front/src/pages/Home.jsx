import React from 'react'
import logo from '../assets/images/LogoACP.png'
import MenuBoard from '../components/MenuBoard'

const Home = () => {
 
  return (
    <div className='home'>
        <img src={logo} alt="logo aux cent pâtes" />
        <MenuBoard />
    </div>
  )
}

export default Home