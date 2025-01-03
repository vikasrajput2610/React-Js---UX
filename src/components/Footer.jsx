import React from 'react'
import footerLogo from '../images/Group 3554.png'
import logo1 from '../images/Group (1).png'
import logo2 from '../images/Group (2).png'
import logo3 from '../images/Group (3).png'
import logo4 from '../images/Group.png'
import logo5 from "../images/Group 3555.png"
const Footer = () => {
  return (
    <div className='flex justify-around items-center h-20'>
        <div className='flex  w-1/4 justify-between items-center'><img src={footerLogo} alt="" />
        <p className='text-my-gray'>press@showroom.store</p>
        </div>
        <div className='flex w-56 justify-around '>
          <img  src={logo4} alt="" />
          <img src={logo1} alt="" />
          <img src={logo5} alt="" />
          <img src={logo2} alt="" />
          <img src={logo3} alt="" />
        </div>
    </div>
  )
}

export default Footer