import React from 'react';
import showRoomLogo from '../images/Group 3553.png';

const Header = () => {
  return (
    <div className='flex justify-around items-center px-4 py-8'>
      <div className='flex items-center'>
        <img src={showRoomLogo} alt="Showroom Logo" />
        <p className='ml-4 mt-2 text-lg'>COMING SOON</p>
      </div>
      <div className='flex items-center space-x-6'>
        <p>Pricing</p>
        <a className='bg-my-blue px-4 py-2 rounded-full text-white' href="#">
          Get Early Access
        </a>
      </div>
    </div>
  );
};

export default Header;
