import Image from 'next/image'

import Layout from '@/components/Layout'

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className='bg-white-999 text-gray-888 font-roboto'>
        <div className='container mx-auto flex px-10 py-40 md:flex-row flex-col items-center'>
          <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
            <h1 className='sm:text-4xl text-3xl mb-4 font-medium text-blue-999'>
              Shwe Bank
              <br className='hidden lg:inline-block' />
              At Your Service
            </h1>
            <p className='mb-8 leading-relaxed'>
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div className='flex justify-center'>
              <button className='inline-flex text-blue-999 bg-transparent border-2 border-blue-999 py-2 px-5 font-roboto focus:outline-none rounded font-medium'>
                More About
              </button>
            </div>
          </div>
          <div className='flex justify-center lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
            <Image
              className='object-cover object-center rounded'
              alt='hero'
              src='/images/hero.png'
              width={750}
              height={600}
            />
          </div>
        </div>
      </section>

      {/* Features Section - row */}
      <section className='bg-gray-100 dark:bg-gray-900 lg:py-12 lg:flex lg:justify-center'>
        <div className='bg-white dark:bg-gray-800 lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg'>
          <div className='lg:w-1/2'>
            <div className='h-64 bg-cover lg:rounded-lg lg:h-full'>
              <Image
                src='/images/hero.png'
                width={750}
                height={600}
                alt='feature image 1'
              />
            </div>
          </div>

          <div className='max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2'>
            <h2 className='text-2xl font-bold text-gray-800 dark:text-white md:text-3xl'>
              Build Your New{' '}
              <span className='text-blue-600 dark:text-blue-400'>Idea</span>
            </h2>
            <p className='mt-4 text-gray-600 dark:text-gray-400'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
              modi reprehenderit vitae exercitationem aliquid dolores ullam
              temporibus enim expedita aperiam mollitia iure consectetur dicta
              tenetur, porro consequuntur saepe accusantium consequatur.
            </p>

            <div className='mt-8'>
              <a
                href='#'
                className='px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-700'
              >
                Start Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - column */}
      <section className='bg-gray-100 dark:bg-gray-900 lg:py-12 lg:flex lg:justify-center'>
        <div className='bg-white dark:bg-gray-800 lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg'>
          <div className='lg:w-1/2'>
            <div className='h-64 bg-cover lg:rounded-lg lg:h-full'>
              <Image
                src='/images/hero.png'
                width={750}
                height={600}
                alt='feature image 1'
              />
            </div>
          </div>

          <div className='max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2'>
            <h2 className='text-2xl font-bold text-gray-800 dark:text-white md:text-3xl'>
              Build Your New{' '}
              <span className='text-blue-600 dark:text-blue-400'>Idea</span>
            </h2>
            <p className='mt-4 text-gray-600 dark:text-gray-400'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
              modi reprehenderit vitae exercitationem aliquid dolores ullam
              temporibus enim expedita aperiam mollitia iure consectetur dicta
              tenetur, porro consequuntur saepe accusantium consequatur.
            </p>

            <div className='mt-8'>
              <a
                href='#'
                className='px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-700'
              >
                Start Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-wrap -m-4'>
            <div className='lg:w-1/3 lg:mb-0 mb-6 p-4'>
              <div className='h-full text-center'>
                <Image
                  alt='testimonial'
                  className='w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100'
                  src='/images/hero.png'
                  width={302}
                  height={300}
                />
                <p className='leading-relaxed'>
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>
                <span className='inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4'></span>
                <h2 className='text-gray-900 font-medium title-font tracking-wider text-sm'>
                  HOLDEN CAULFIELD
                </h2>
                <p className='text-gray-500'>Senior Product Designer</p>
              </div>
            </div>
            <div className='lg:w-1/3 lg:mb-0 mb-6 p-4'>
              <div className='h-full text-center'>
                <Image
                  alt='testimonial'
                  className='w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100'
                  src='/images/hero.png'
                  width={302}
                  height={300}
                />
                <p className='leading-relaxed'>
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>
                <span className='inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4'></span>
                <h2 className='text-gray-900 font-medium title-font tracking-wider text-sm'>
                  ALPER KAMU
                </h2>
                <p className='text-gray-500'>UI Develeoper</p>
              </div>
            </div>
            <div className='lg:w-1/3 lg:mb-0 p-4'>
              <div className='h-full text-center'>
                <Image
                  alt='testimonial'
                  className='w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100'
                  src='/images/hero.png'
                  width={302}
                  height={300}
                />
                <p className='leading-relaxed'>
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>
                <span className='inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4'></span>
                <h2 className='text-gray-900 font-medium title-font tracking-wider text-sm'>
                  HENRY LETHAM
                </h2>
                <p className='text-gray-500'>CTO</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
