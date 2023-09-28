import React, { useEffect, useState } from 'react'
import { MD5 } from 'crypto-js'
import { useSnackbar } from 'notistack'
import CardCharacter from '../../components/CardCharacter'
import { Pagination } from '@nextui-org/react'
import LoadingSpinner from '../../components/Loader'

const MarvelCharacters = () => {
  const [characters, setCharacters] = useState([])
  const { enqueueSnackbar } = useSnackbar()
  const md5 = MD5
  const totalCharacters = 100
  const itemsPerPage = 20

  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_API_PUBLIC_KEY
    const privateKey = process.env.NEXT_PUBLIC_API_PRIVATE_KEY

    // Marca de tiempo actual
    const ts = new Date().getTime().toString()

    // Construir el hash según la documentación de Marvel
    const hash = md5(ts + privateKey + publicKey)

    // URL base de la API de Marvel con la clave pública
    const baseUrl = process.env.NEXT_PUBLIC_API_SERVER + publicKey

    // Parámetros adicionales (ts y hash)
    const queryParams = '&ts=' + ts + '&hash=' + hash

    // Realizar la solicitud HTTP para obtener los 100 personajes
    const apiUrl = baseUrl + queryParams + `&limit=${totalCharacters}`

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.data.results)
        setIsLoading(false)
      })
      .catch((error) => {
        enqueueSnackbar('Error al obtener los personajes de Marvel:', error, { variant: 'error' })
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
      <h1 className='text-4xl text-center'>Personajes de Marvel</h1>
      <div className='flex-grow'>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            {getCharactersForPage(currentPage).map(({ name, thumbnail, id }) => (
              <div key={id} className='p-4 rounded-lg shadow-md'>
                <CardCharacter
                  key={id}
                  id={id}
                  name={name}
                  thumbnail={`${thumbnail.path}.${thumbnail.extension}`}
                />
              </div>
            ))}
          </div>
        )}
      </div>
      <Pagination
        className='m-0 p-12 w-full h-28 flex justify-center items-center'
        loop
        color="primary"
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
