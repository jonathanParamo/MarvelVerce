'use client'

import { Image } from '@nextui-org/react'

const Home = () => {
  const image = 'https://areajugones.sport.es/wp-content/uploads/2022/05/marvel-guia-1080x609.jpg'

  return (
    <section className='bg-gray-100 dark:bg-gray-800 py-12'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row items-center justify-center space-y-4 md:space-x-8'>
          <div className='md:w-1/2'>
            <p className='text-lg text-gray-700 dark:text-gray-300'>
            This project utilizes the public Marvel API to display information related to comics, characters, creators, events, and more from the Marvel universe.
            </p>
            <p className='text-lg text-gray-700 dark:text-gray-300'>
              The Marvel API provides access to a wide range of data related to the Marvel universe, including details about your favorite characters,
              the stories they appear in, and much more.
            </p>
            <p className='text-lg text-gray-700 dark:text-gray-300'>
              We have designed this project to provide you with an interactive and engaging experience as you explore the vast world of Marvel.
            </p>
          </div>
          <div className='md:w-1/2'>
            <Image
              src={image}
              alt='Logo de Marvel API'
              className='rounded-lg shadow-lg'
            />
          </div>
        </div>
      </div>
    </section>
  );
};


export default Home
