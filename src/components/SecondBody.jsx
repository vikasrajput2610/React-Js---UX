import React from 'react'

const SecondBody = () => {
  return (
    <div className='bg-my-blue mt-12 '>
        <div className='flex justify-between  h-[42.3rem] '>
            <div className='flex justify-center items-center  mt-10 h-11/12 w-[44%] bg-black '>
              <div className='flex flex-col justify-around items-start text-white h-4/5 w-2/4 ml-56 '>
                <p className='text-3xl font-semibold'>Give your online shoppers a better brand experience
                  and level up your customer behaviour insights
                </p>
                <p className='border border-my-border p-2 rounded-3xl'>Store Builder</p>
                <p className='border border-my-border p-2 rounded-3xl'>Customer Journey Visualizations</p>
                <p className='border border-my-border p-2 rounded-3xl'>A/B Testing</p>
                <p className='border border-my-border p-2 rounded-3xl'>Amplified Brand</p>
                <p className='border border-my-border p-2 rounded-3xl'>Centralized Management Portal</p>
              </div>
            </div>
           
           


            <div className='bg-show-room  w-[56%] relative h-full  ' >
              <p className='text-white bg-my-blue-2 opacity-80 absolute bottom-0 left-0 w-full  p-8'>Drag-and-Drop Products to rearrange store based on data findings</p>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center h-96 '>
            <p className='text-4xl text-white font-bold mb-12'>Are you ready to create your Showroom?</p>
            <div className='justify-around flex ' >
                <a href='#' className='bg-white rounded-3xl p-2 mr-4'>Get Early Access</a>
                <a href='#' className='border border-white text-white rounded-3xl p-2'>Plans and Pricing</a>
            </div>
        </div>
    </div>
  )
}

export default SecondBody