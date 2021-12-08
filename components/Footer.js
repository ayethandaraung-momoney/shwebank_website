import Image from 'next/image'
import {
  FaPhoneSquareAlt,
  FaUser,
  FaMapMarkerAlt,
  FaLinkedin,
  FaTwitterSquare,
  FaFacebookSquare,
} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className='font-roboto text-gray-888'>
      <div className='container px-5 py-3 mx-auto flex justify-around md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col'>
        <div className='w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left'>
          <a className='flex items-center justify-center md:justify-start mb-10'>
            <Image
              src='/images/logo.png'
              alt='footer logo'
              width={150}
              height={45}
            />
          </a>
        </div>

        <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
          <h2 className='font-roboto font-bold text-gray-999 tracking-widest text-sm mb-7'>
            QUICK LINKS
          </h2>
          <nav className='cursor-pointer list-none mb-10'>
            <li className='mb-5'>
              <a className='text-gray-888 hover:text-yellow-999 text-base'>
                About Shwe Bank
              </a>
            </li>
            <li className='mb-5'>
              <a className='text-gray-888 hover:text-yellow-999 text-base'>
                Consumer Banking
              </a>
            </li>
            <li className='mb-5'>
              <a className='text-gray-888 hover:text-yellow-999 text-base'>
                Business Banking
              </a>
            </li>
            <li className='mb-5'>
              <a className='text-gray-888 hover:text-yellow-999 text-base'>
                Lastest News
              </a>
            </li>
          </nav>
        </div>

        <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
          <h2 className='font-roboto font-bold text-gray-999 tracking-widest text-sm mb-7'>
            CONTACT US
          </h2>
          <nav className='font-roboto cursor-pointer list-none mb-10'>
            <li className='flex flex-row mb-5'>
              <FaPhoneSquareAlt className='text-yellow-999 -mt-1' size={24} />
              <a className='text-gray-888 hover:text-yellow-999 text-base ml-2 -mt-1'>
                +95 9123456789
              </a>
            </li>
            <li className='flex flex-row mb-5'>
              <FaUser className='text-yellow-999 -mt-1' size={24} />
              <a className='text-gray-888 hover:text-yellow-999 text-base ml-2 -mt-1'>
                +95 9123456789
              </a>
            </li>
            <li className='flex flex-row mb-5'>
              <FaMapMarkerAlt className='text-yellow-999 -mt-1' size={24} />
              <a className='text-gray-888 hover:text-yellow-999 text-base ml-2 -mt-1'>
                No.66-67, Sule, Yangon, Myanmar.
              </a>
            </li>
          </nav>
        </div>
      </div>

      <hr className='divide-y border-2 border-gray-300 mx-20' />

      <div className='container mx-auto py-5 px-20 flex flex-wrap flex-col sm:flex-row'>
        <p className='font-roboto text-gray-888 text-sm text-center sm:text-left'>
          © 2021 Copyright Shwe Bank. All rights reserved.
        </p>
        <span className='inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start'>
          <p className='font-roboto text-gray-999 text-sm font-semibold pr-4'>
            CONNECT WITH US
          </p>
          <div className='inline-flex -mt-1 text-yellow-999'>
            <a className='mr-2 cursor-pointer'>
              <FaLinkedin size={24} />
            </a>
            <a className='mr-2 cursor-pointer'>
              <FaTwitterSquare size={24} />
            </a>
            <a className='mr-2 cursor-pointer'>
              <FaFacebookSquare size={24} />
            </a>
          </div>
        </span>
      </div>
    </footer>
  )
}
