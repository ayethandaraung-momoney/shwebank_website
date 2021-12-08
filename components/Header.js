import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaBars } from 'react-icons/fa'

import MenuDropdown from './MenuDropdown'
import FlagIcon from './FlagIcon'
import MobileNavMenu from './MobileNavMenu'

export default function Header() {
  const [mobileMenuIsShown, setMobileMenuIsShown] = useState(false)

  return (
    <>
      <header className='text-gray-888 font-roboto'>
        <div className='container fixed top-0 z-20 shadow-md bg-white mx-auto flex flex-wrap px-10 py-5 flex-row justify-between md:flex-row items-center'>
          <Link href='/'>
            <a className='flex items-center cursor-pointer'>
              <Image
                src='/images/logo.png'
                alt='logo'
                width={150}
                height={45}
              />
            </a>
          </Link>

          <nav className='hidden md:flex flex-wrap items-center justify-center gap-10 text-sm font-medium md:ml-auto md:mr-auto cursor-pointer'>
            <Link href='/'>
              <a className='text-yellow-999'>Home</a>
            </Link>
            <Link href='/about'>
              <a className='hover:text-yellow-999'>About</a>
            </Link>
            <Link href='#'>
              <a className='hover:text-yellow-999'>Consumer Banking</a>
            </Link>
            <Link href='#'>
              <a className='hover:text-yellow-999'>Bussiness Banking</a>
            </Link>
            <MenuDropdown menuText={'Help & Support'} />
          </nav>

          <div className='flex flex-row'>
            <FlagIcon />

            <button className='hidden ml-10 md:inline-flex items-center bg-yellow-999 text-gray-888 py-2 px-5 focus:outline-none rounded text-sm font-medium mt-4 md:mt-0'>
              Login
            </button>

            {/* Hamburger menu on mobile */}
            <button
              onClick={() => setMobileMenuIsShown(true)}
              className='p-1 block md:hidden'
            >
              <FaBars className='h-8 w-auto' />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile navigation menu panel */}
      {mobileMenuIsShown && (
        <MobileNavMenu closeSelf={() => setMobileMenuIsShown(false)} />
      )}
    </>
  )
}
