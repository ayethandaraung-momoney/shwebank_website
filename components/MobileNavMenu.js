import { FaTimes } from 'react-icons/fa'

const MobileNavMenu = ({ closeSelf }) => {
  console.log('Welcome Mobile Nav Menu')

  return (
    <div className='w-screen h-screen fixed top-0 left-0 overflow-y-scroll bg-white z-50 pb-6'>
      <div className='container h-full flex flex-col justify-between'>
        {/* Top section */}
        <div className='flex flex-row justify-between py-2 items-center'>
          {/* Company logo */}
          {/* <NextImage width='120' height='33' media={navbar.logo} /> */}
          {/* Close button */}
          <button onClick={closeSelf} className='py-1 px-1'>
            <FaTimes className='h-8 w-auto' />
          </button>
        </div>
        {/* Bottom section */}
        <div className='flex flex-col justify-end w-9/12 mx-auto'>
          {/* <ul className='flex flex-col list-none gap-6 items-baseline text-xl mb-10'>
            {navbar.links.map(navLink => (
              <li key={navLink.id} className='block w-full'>
                <CustomLink link={navLink}>
                  <div className='hover:text-gray-900 py-6 flex flex-row justify-between items-center'>
                    <span>{navLink.text}</span>
                    <MdChevronRight className='h-8 w-auto' />
                  </div>
                </CustomLink>
              </li>
            ))}
          </ul> */}
          {/* <ButtonLink
            button={navbar.button}
            appearance={getButtonAppearance(navbar.button.type, 'light')}
          /> */}
        </div>
      </div>
    </div>
  )
}

export default MobileNavMenu
