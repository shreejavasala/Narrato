import React from 'react'
import { assets } from '../../assets/assets'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/admin/Sidebar'
import { useAppContext } from '../../../context/AppContext'

const Layout = () => {
  const { setToken, navigate, axios} = useAppContext()


  const logout = () => {
    localStorage.removeItem('token')
    axios.defaults.headers.common['Authorization'] = null
    setToken(null)
    navigate('/')
  }
  return (
    <>
      <div className='flex items-center justify-between py-2 h-[70px] px-4 sm:px-12 border-b border-gray-200'>
        <div className='flex justify-center items-center mr-4 gap-2'>
          <img src={assets.favicon}alt="logo" className='w-7 sm:w-5 cursor-pointer' onClick={() => navigate(("/"))}/>
          <p onClick={() => navigate('/')} className='text-2xl font-semibold cursor-pointer'>Narrato</p>
        </div>
        <button onClick={logout} className='text-sm px-8 py-2 bg-primary text-white rounded-full cursor-pointer'>Logout</button>
      </div>

      <div className='flex h-[calc(100vh-70px)]'>
        <Sidebar />
        <Outlet />
      </div>


    </>
  )
}

export default Layout