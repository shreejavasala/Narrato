import React from 'react'
import { assets } from '../assets/assets.js'
import { useAppContext } from '../../context/AppContext.jsx';

const Navbar = () => {

  const { navigate, token } = useAppContext()

  return (
    <div className='flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32'>
      <div className='flex justify-center items-center mr-4 gap-2'>
        <img onClick={() => navigate('/')} src={assets.favicon} alt="logo" className='w-7 sm:w-5 xl:w-7 cursor-pointer'/>
        <p onClick={() => navigate('/')} className='text-2xl font-semibold cursor-pointer'>Narrato</p>
      </div>
      
      <button 
        onClick={() => navigate('/admin')} className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5'>
          { token ? 'Dashboard': 'Login' }
          <img src={assets.arrow} alt="arrow" className='w-3'/>
      </button>
    </div>
  )
}

export default Navbar