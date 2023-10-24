'use client'

import { useState, useEffect } from 'react'
import { useSnackbar } from 'notistack'
import LoadingSpinner from '../../components/Loader'
import { fetchComics } from '../../api/fetchComics'
import CardCharacter from '../../components/CardCharacter'

const Comics = () =>  {
  const [comics, setComics] = useState([])
  const { enqueueSnackbar } = useSnackbar()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchComics()
      .then((data) => {
        setComics(data)
        setIsLoading(false)
      })
      .catch((error) => {
        enqueueSnackbar('Error retrieving the comics. of Marvel', error, { variant: 'error' })
      })
  }, [])

  if (isLoading) {
    return <LoadingSpinner />
  }

  const hasData = !!comics && comics.length > 0

  return (
    <div className='w-full flex flex-col justify-center'>
      <h2 className='text-2xl md:text-3xl font-bold text-red-500
        text-center h-12 flex justify-center items-center'
      >
        Comics
      </h2>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center'>
        {hasData && comics.map(({ id, thumbnail, variants }) => (
          <div key={id}>
            <CardCharacter
              key={id}
              id={id}
              name={name}
              thumbnail={`${thumbnail.path}.${thumbnail.extension}`}
              variants={variants}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Comics