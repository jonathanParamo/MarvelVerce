'use client'

import { Image } from '@nextui-org/react'

const Home = () => {
  const image = 'https://areajugones.sport.es/wp-content/uploads/2022/05/marvel-guia-1080x609.jpg'

  return (
    <section className='bg-gray-100 dark:bg-gray-800 py-12'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-semibold text-center text-gray-900 dark:text-white mb-8'>
          Información sobre la API de Marvel
        </h2>
        <div className='flex flex-col md:flex-row items-center justify-center space-y-4 md:space-x-8'>
          <div className='md:w-1/2'>
            <p className='text-lg text-gray-700 dark:text-gray-300'>
              Este proyecto utiliza la API pública de Marvel para mostrar información relacionada con los cómics, personajes, creadores, eventos y más del mundo de Marvel.
            </p>
            <p className='text-lg text-gray-700 dark:text-gray-300'>
              La API de Marvel proporciona acceso a una amplia gama de datos relacionados con el universo de Marvel, incluyendo detalles sobre tus personajes favoritos, las historias en las que aparecen y mucho más.
            </p>
            <p className='text-lg text-gray-700 dark:text-gray-300'>
              Hemos diseñado este proyecto para brindarte una experiencia interactiva y atractiva mientras exploras el vasto mundo de Marvel.
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
