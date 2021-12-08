import Image from 'next/image'
import { FaTimes } from 'react-icons/fa'

import MobileNavDropdown from './MobileNavDropdown'

const MobileNavMenu = ({ closeSelf }) => {
  return (
    <div className='w-screen h-screen fixed top-0 left-0 overflow-y-scroll bg-white z-40 py-4 px-10 shadow-md'>
      <div className='container h-full flex flex-col'>
        {/* Top section */}
        <div className='flex flex-row justify-between py-2 items-center'>
          {/* Company logo */}
          <Image src='/images/logo.png' alt='logo' width={150} height={45} />

          {/* Close button */}
          <button onClick={closeSelf} className='text-gray-999'>
            <FaTimes className='h-8 w-auto' />
          </button>
        </div>

        {/* Bottom section */}
        <div className='flex flex-col justify-end'>
          <ul className='flex flex-col list-none gap-4 font-roboto text-sm font-medium mt-5 text-gray-888 cursor-pointer'>
            <li className='hover:text-yellow-999'>Home</li>
            <li className='hover:text-yellow-999'>About</li>
            <li className='hover:text-yellow-999'>Consumer Banking</li>
            <li className='hover:text-yellow-999'>Business Banking</li>
          </ul>

          <MobileNavDropdown menuText={'Help & Support'} />

          <button className='items-center bg-yellow-999 text-gray-888 mt-4 py-2 px-5 focus:outline-none rounded text-sm font-medium'>
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default MobileNavMenu
