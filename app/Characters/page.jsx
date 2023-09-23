'use client'

import { useEffect, useState } from 'react'
import { MD5 } from 'crypto-js'
import { useSnackbar } from 'notistack'
import CardCharacter from '../../components/CardCharacter'

const MarvelCharacters = () => {
  const [characters, setCharacters] = useState([])
  const { enqueueSnackbar } = useSnackbar()
  const md5 = MD5

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

    // URL completa para la solicitud
    const apiUrl = baseUrl + queryParams

    // Realizar la solicitud HTTP
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.data.results)
      })
      .catch((error) => {
        enqueueSnackbar('Error al obtener los personajes de Marvel:', error, { variant: 'error' })
      })
  }, [])

  return (
    <div className='h-screen'>
      <h1 className='text-4xl text-center'>Personajes de Marvel</h1>
      <div className='h-full w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4
        '>
        {characters.map(({ name, thumbnail, id }) => (
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
    </div>
  )
}

export default MarvelCharacters
