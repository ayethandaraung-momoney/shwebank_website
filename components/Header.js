import Link from 'next/link'
import Image from 'next/image'

import MenuDropdown from './MenuDropdown'
import FlagIcon from './FlagIcon'

export default function Header() {
  return (
    <header className='text-gray-888 font-roboto'>
      <div className='container fixed top-0 z-50 shadow-md bg-white mx-auto flex flex-wrap p-7 flex-col md:flex-row items-center'>
        <Link href='/'>
          <a className='flex items-center cursor-pointer'>
            <Image src='/images/logo.png' alt='logo' width={150} height={45} />
          </a>
        </Link>

        <nav className='flex flex-wrap items-center justify-center gap-10 text-sm font-medium md:ml-auto md:mr-auto cursor-pointer'>
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

        <FlagIcon />

        <button className='ml-10 inline-flex items-center bg-yellow-999 text-gray-888 py-2 px-5 focus:outline-none rounded text-sm font-medium mt-4 md:mt-0'>
          Login
        </button>
      </div>
    </header>
  )
}
