import React from 'react'
import terminal from '../assets/terminal.png'

const Developers = () => {
  return (
    <div className='w-full text-white bg-black'>
        <div className='max-w-[1240px] mx-auto px-4 py-16 flex flex-col'>
          <div>
            <h1>Superpowers for <span className='text-[#00d8ff]'>DEFI</span> developers.</h1>
            <p> 
              Checkout the <span className='text-[#00d8ff]'>documentation</span>, the <span className='text-[#00d8ff]'>quick start</span>  or a guide below to integrate your project with thousands of tokens and billions of liquidity.
            </p>
          </div> {/* text elem end */}

          <div className='w-full py-16 flex justify-center'>
            <img className='max-w-[450px] shadow-lg shadow-cyan-500/50' src={terminal} alt='/' />
          </div> {/* img elem end */}
            
        </div> {/* container end */}
    </div>
  )
}

export default Developers