import React from 'react'

const Subscribe = () => {
  return (
    <div className='w-full px-4 py-16 bg-black text-white text-center'>
      <h1>Join Our DeFi Communit</h1>
      <div className='py-4'>
        <input className='p-3 rounded-3xl mr-4 text-[#6a00ff]' type='email' placeholder='Enter your email' />
        <button>Sign Up</button>
      </div> {/* email-form end */}

      <div className='flex justify-center items-center py-2'>
        <input className='mr-2' type='checkbox'/>
        <p>Yes, I agree to receive email communications from DeFi.</p>
      </div> {/* agreement end */}
    </div>
  )
}

export default Subscribe