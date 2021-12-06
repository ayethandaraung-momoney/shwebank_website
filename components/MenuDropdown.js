import { Fragment } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import Link from 'next/link'
import { Menu, Transition } from '@headlessui/react'

export default function Example({ menuText }) {
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <Menu.Button className='inline-flex justify-center w-full font-medium hover:text-yellow-999 focus:outline-none'>
          {menuText}
          <FaAngleDown className='w-5 h-5 ml-1 mt-0.5' aria-hidden='true' />
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
        <Menu.Items className='absolute left-0 w-56 mt-9 border-t-4 border-yellow-999 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='px-1 py-1 '>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-white text-yellow-999' : 'text-gray-888'
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm font-medium`}
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
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm font-medium`}
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
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm font-medium`}
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
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm font-medium`}
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
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm font-medium`}
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
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm font-medium`}
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
