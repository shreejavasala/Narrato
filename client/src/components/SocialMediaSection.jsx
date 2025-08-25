import React from 'react'
import { assets } from '../assets/assets'

const SocialMediaSection = () => {
  return (
    <div className='my-24 max-w-3xl mx-auto'>
          <p className='font-semibold my-4'>Share this article on social media</p>
          <div className='flex'>
            <img src={assets.facebook_icon} alt="" width={50}/>
            <img src={assets.twitter_icon} alt="" width={50}/>
            <img src={assets.googleplus_icon} alt="" width={50}/>
          </div>
        </div>
  )
}

export default SocialMediaSection