import React from 'react'
import Banner from "../Navbar/dark1.png"

const BannerImg ={
    backgroundImage:'url(${Banner})',
    backgroundSize:'cover',
    backgroundPosition:'center',
    backgroundRepeat:'no-repeat',
    height:'100%',
    width:'100%',
    
}

const Subscribe = () => {
  return (
    <div 
    data-aos="zoom-in"
    className='bg-gray-100 mb-20 dark:bg-gray-800 text-primary'
    style={BannerImg}>
        <div className='container py-10 backdrop-blur-sm'>
            <div className='space-y-6 max-w-xl mx-auto'>
                <h1 className='text-2xl sm:text-4xl sm:text-left font-semibold !text-center'>
                    Get Notified About New Products</h1>
                <p className='text-sm text-gray-500 tracking-wide leading-5 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, officia.</p>
                <div className='flex gap-4'>
                    <input type="email" placeholder='Enter your email' className='p-2 border border-gray-300 dark:border-gray-600 rounded-md'/>
                    <button className='bg-blue-500 text-white p-2 rounded-md'>Subscribe</button>
                </div>
            </div>
        </div>
      <div></div>
    </div>
  )
}

export default Subscribe
