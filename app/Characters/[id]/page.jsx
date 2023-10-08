'use client'

import { useParams, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { fetchCharacterById, fetchCharacterComics } from '../../../api/fetchData'
import { useSnackbar } from 'notistack'
import { Card, CardHeader, CardBody, CardFooter, Button } from '@nextui-org/react'
import Image from 'next/image'
import LoadingSpinner from '../../../components/Loader'

const CharacterDetail = () => {
  const params = useParams()
  const { id } = params
  const idCharacter = parseInt(id, 10)
  const router = useRouter()
  const [character, setCharacter] = useState(null)
  const [characterComics, setCharacterComics] = useState({})
  const { enqueueSnackbar } = useSnackbar()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchCharacterById(idCharacter)
      .then((data) => {
        setCharacter(data)
        setIsLoading(false)
      })
      .catch((error) => {
        enqueueSnackbar('Error al obtener los personajes de Marvel:', error, { variant: 'error' })
        setIsLoading(false)
      })
    fetchCharacterComics(idCharacter)
    .then((data) => {
      setCharacterComics(data)
      setIsLoading(false)
    })
    .catch((error) => {
      enqueueSnackbar('Error al obtener los personajes de Marvel:', error, { variant: 'error' })
      setIsLoading(false)
    })
  }, [])

  if (isLoading) {
    return <LoadingSpinner />
  }

  const { name, thumbnail, description } = character
  const { title, characters, creators } = characterComics
  const items = creators && creators.items
  const charactersComic = characters && characters.items

  return (
    <div className='h-[calc(100vh-48px)] flex flex-col justify-center items-center box-border'>
      <div className='flex flex-col md:flex-row justify-center items-center p-4'>
        <Card isFooterBlurred className='w-64 h-72 md:w-3/4 md:h-96 col-span-12 sm:col-span-7 mt-4'>
          <CardHeader className='absolute z-10 top-1 flex-col items-start rounded bg-slate-500'>
            <h4 className='text-white/90 font-medium text-xl'>{name}</h4>
          </CardHeader>
          <Image
            removeWrapper
            className='z-0 w-full h-full object-cover'
            src={`${thumbnail.path}.${thumbnail.extension}`}
            alt={character.name}
            width={320}
            height={320}
          />
          <CardFooter className='absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100'>
            <div className='flex flex-grow gap-2 items-center'>
              <div className='flex flex-col'>
                <p className='text-tiny text-white/60'>{description}</p>
              </div>
            </div>
          </CardFooter>
        </Card>
        <Card isFooterBlurred className='w-64 h-72 md:w-3/4 md:h-96 text-white dark:text-black mt-4 md:ml-6 dark:bg-slate-300 bg-black'>
          <CardHeader className='absolute z-10 top-1 flex-col items-start text-xl'>Character details:</CardHeader>
          <CardBody className='h-auto mt-6'>
            <h3>Comic:</h3>
            <h4>{title}</h4>
            <h4 className='text-xl'>Creators:</h4>
              {items && items.map(({ name }) => (
                <p key={name} className='font-medium text-sm'>{name}</p>
              ))}
            <h4 className='text-xl'>Characters comics:</h4>
              {charactersComic ? charactersComic.map(({ name }) => (
                <p key={name} className='font-medium text-sm'>{name}</p>
              )) : <p>No items</p>}
          </CardBody>
        </Card>
      </div>
      <div className='text-center mt-4'>
        <Button
          onClick={() => router.push('../')}
          radius='full'
          size='lg'
          color='primary'
          variant='ghost'
        >
          Back
        </Button>
      </div>
    </div>
  )
}

export default CharacterDetail
