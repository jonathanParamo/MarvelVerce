'use client'

import { useState, useEffect } from 'react'
import { useSnackbar } from 'notistack'
import CardCharacter from '../../components/CardCharacter'
import { Pagination } from '@nextui-org/react'
import LoadingSpinner from '../../components/Loader'
import { fetchData } from '../../api/fetchData'
import { useRouter } from 'next/navigation'

const MarvelCharacters = () => {
  const [characters, setCharacters] = useState([])
  const { enqueueSnackbar } = useSnackbar()
  const totalCharacters = 100
  const itemsPerPage = 20
  const route = useRouter()
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    fetchData()
      .then((data) => {
        setCharacters(data)
        setIsLoading(false)
      })
      .catch((error) => {
        enqueueSnackbar('Error retrieving the characters of Marvel:', error, { variant: 'error' })
      })
  }, [])

  // Función para obtener los personajes que corresponden a la página actual
  const getCharactersForPage = (page) => {
    const startIndex = (page - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return characters.slice(startIndex, endIndex)
  }

  const handlePageChange = (event) => {
    const value = event
    setCurrentPage(value)
  }

  return (
    <div className='h-[calc(100vh-48px)] flex flex-col'>
      <h2 className='text-2xl md:text-3xl font-bold text-red-500
        text-center h-12 flex justify-center items-center'
      >
        Characters of Marvel
      </h2>
      <div className='flex-grow'>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center'>
            {getCharactersForPage(currentPage).map(({ name, thumbnail, id }) => (
              <li
                key={id}
                onClick={() => route.push(`/characters/${id}`)}
                className='list-none'
              >
                <div
                  key={id}
                  className='p-4 rounded-lg shadow-md'
                >
                  <CardCharacter
                    key={id}
                    id={id}
                    name={name}
                    thumbnail={`${thumbnail.path}.${thumbnail.extension}`}
                  />
                </div>
              </li>
            ))}

          </div>
        )}
      </div>
      <Pagination
        className='m-0 p-12 w-full h-28 flex justify-center items-center'
        showControls
        initialPage={currentPage}
        onChange={handlePageChange}
        total={Math.ceil(totalCharacters / itemsPerPage)}
        showShadow={true}
      />
    </div>
  )
}

export default MarvelCharacters
