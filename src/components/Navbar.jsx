import React, {useState} from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='w-full h-[90px] bg-black'>
         
        {/* Main menu */}
        <div className='max-w-[1240px] mx-auto h-full px-4 flex justify-between items-center'>
            <div> 
                <h1 className='text-[#00d8ff]'>DEFI</h1>
            </div>

            <div className='hidden md:flex'> 
                <ul className='flex text-white items-center'>
                   <li>Platform</li>
                   <li>Developers</li>
                   <li>Comunity</li>
                   <li>About</li>
                   <button className='ml-4'>Use Defi</button>
                </ul>
            </div> {/* right menu */}

            {/* Hamburger menu */}
            <div className='block md:hidden' onClick={handleNav}>{nav ? <AiOutlineClose size={20} className='text-white cursor-pointer' /> : <AiOutlineMenu size={20} className='text-white cursor-pointer' />}
            </div>

            {/* Mobile Menu */}
            <div className={nav ? 'w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center' : 'absolute left-[-100%]'}>
                <ul>
                   <li className='text-2xl mb-3'>Platform</li>
                   <li className='text-2xl mb-3'>Developers</li>
                   <li className='text-2xl mb-3'>Comunity</li>
                   <li className='text-2xl'>About</li>
                   <button className='m-8'>Use Defi</button>
                </ul>
            </div> {/* mobile menu end */}


        </div>  {/* block container end */}
    </div> /* full block end */
  )
}

export default Navbar