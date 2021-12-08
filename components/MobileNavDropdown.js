import { Fragment } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import Link from 'next/link'
import { Menu, Transition } from '@headlessui/react'

export default function MobileNavDropdown({ menuText }) {
  return (
    <Menu as='div' className='flex flex-col text-left mt-3'>
      <div>
        <Menu.Button className='inline-flex w-full font-roboto text-sm font-medium text-gray-888 hover:text-yellow-999 focus:outline-none'>
          {menuText}
          <FaAngleDown className='w-2 h-3.5 ml-1.5 mt-1' aria-hidden='true' />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='w-full mt-4 border-t-4 border-yellow-999 bg-white focus:outline-none'>
          <div className='py-1 '>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-white text-yellow-999' : 'text-gray-888'
                  } flex items-center w-full py-2 text-sm font-medium`}
                >
                  <Link href='/contact'>
                    <a>Contact Us</a>
                  </Link>
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-white text-yellow-999' : 'text-gray-888'
                  } flex items-center w-full py-2 text-sm font-medium`}
                >
                  <Link href='#'>
                    <a>Rates and Pricing</a>
                  </Link>
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-white text-yellow-999' : 'text-gray-888'
                  } flex items-center w-full py-2 text-sm font-medium`}
                >
                  <Link href='#'>
                    <a>General Terms and Conditions</a>
                  </Link>
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-white text-yellow-999' : 'text-gray-888'
                  } flex items-center w-full py-2 text-sm font-medium`}
                >
                  <Link href='#'>
                    <a>Product Disclosure Sheets</a>
                  </Link>
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-white text-yellow-999' : 'text-gray-888'
                  } flex items-center w-full py-2 text-sm font-medium`}
                >
                  <Link href='#'>
                    <a>Important Notices</a>
                  </Link>
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-white text-yellow-999' : 'text-gray-888'
                  } flex items-center w-full pt-2 text-sm font-medium`}
                >
                  <Link href='#'>
                    <a>Financial Knowledge &#38; Tools</a>
                  </Link>
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
