import { Fragment } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, Transition } from '@headlessui/react'

export default function FlagIcon() {
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <Menu.Button className='mt-2 inline-flex justify-center w-full text-sm font-medium focus:outline-none'>
          <Image src='/images/engflag.jpg' alt='flag' width={27} height={18} />
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
        <Menu.Items className='absolute left-0 w-20 mt-auto bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='px-1 py-1 '>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-white text-yellow-999' : 'text-gray-888'
                  } group flex items-center w-full py-2 text-sm`}
                >
                  <Image
                    src='/images/engflag.jpg'
                    alt='flag'
                    width={27}
                    height={18}
                  />
                  <Link href='#'>
                    <a className='ml-2'>EN</a>
                  </Link>
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-white text-yellow-999' : 'text-gray-888'
                  } group flex items-center w-full pb-2 text-sm`}
                >
                  <Image
                    src='/images/mmflag.png'
                    alt='flag'
                    width={27}
                    height={18}
                  />
                  <Link href='#'>
                    <a className='ml-2'>MM</a>
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
