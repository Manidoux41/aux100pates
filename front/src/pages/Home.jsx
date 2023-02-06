import React from 'react'
import logo from '../assets/images/LogoACP.png'
import MainArticle from '../components/MainArticle'
import MenuBoard from '../components/MenuBoard'

const Home = () => {
 
  return (
    <div className='home'>
        <img src={logo} alt="logo aux cent pâtes" />
        <MenuBoard />
        <MainArticle />
    </div>
  )
}

export default Home