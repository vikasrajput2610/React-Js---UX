import React from 'react'
import phone from '../images/Group 13.png'
import landingPage from '../images/Landing_background.png'
const Body = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-between'>
      <div className='flex flex-col justify-center items-end  w-2/4 ml-5'>
        <div className='flex flex-col justify-around  h-4/6'>
          <p className=' text-8xl  font-bold text-start '>Start today. <br />
            Sell tomorrow.</p>
          <p className='text-lg'> You don’t need an agency to launch a 3D Showroom. Do it yourself. <br /> No coding or design experience necessary.</p>
          <form className='flex flex-col justify-around   h-48 w-3/4'>
            <div class="flex gap-4">
              <input type="text" class="bg-gray-200 p-2 sm:w-full" placeholder="Full Name*" />
              <input type="text" class="bg-gray-200 p-2 sm:w-full" placeholder="Company Name*" />
            </div>
            <input type="text" className='bg-gray-200 p-2' placeholder='Company Name*' />
            <button className='bg-green-800 text-white p-1 '>
              <p className='font-bold text-xl'>Put me in line</p>
              <p className='text-sm'>No commitment</p>
            </button>
          <p className='text-my-gray'>*fields are mandatory</p>
          </form>
        </div>
      </div>
      <div className="flex items-start  bg-my-img bg-no-repeat   w-2/6 mt-5">
 
  <img 
    src={phone} 
    className="mt-20 relative h-5/6 -translate-x-52" 
    alt="" 
  />
</div>

    </div>
  )
}

export default Body