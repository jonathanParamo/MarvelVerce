'use client'

import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { fetchComic } from '../../../api/fetchComics'
import { enqueueSnackbar } from 'notistack'
import LoadingSpinner from '../../../components/Loader'
import { Card, CardHeader, CardBody, CardFooter, Button, Image } from '@nextui-org/react'

const Comic = () => {
  const params = useParams()
  const { id } = params
  const [comic, setComit] = useState(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    fetchComic(id)
      .then((data) => {
        setComit(data)
        setLoading(false)
      })
      .catch((error) => {
        enqueueSnackbar('Error while getting the comic.', error, { variant: 'error' })
        setLoading(false)
      })
  },[])

  if (loading) {
    return <LoadingSpinner />
  }
  console.log(comic);
  const { title, description, images, stories, thumbnail } = comic || {}
  const { items } = stories || {}

  return (
    <div className='h-[calc(100vh-48px)] flex flex-col justify-center items-center box-border'>
      <div className='flex flex-col md:flex-row justify-center items-center p-4'>
        <Card isFooterBlurred className='w-64 h-72 md:w-[369px] md:h-96 col-span-12 sm:col-span-7 mt-4'>
          <CardHeader className='absolute z-10 top-1 flex-col items-start rounded bg-slate-500'>
              <h4 className='text-white-90 font-medium text-xl'>{title}</h4>
          </CardHeader>
          <Image
            removeWrapper
            className='z-0 w-full h-full object-cover'
            src={`${thumbnail?.path}.${thumbnail?.extension}`}
            alt={title}
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
        <Card isFooterBlurred className='w-64 h-72 md:w-[369px] md:h-96 text-white dark:text-black mt-4 md:ml-6 dark:bg-slate-300 bg-black'>
          <CardHeader className='absolute z-10 top-1 flex-col items-start text-xl'>Comic details:</CardHeader>
          <CardBody className='h-auto mt-6'>
            <h4 className='text-xl'>Stories:</h4>
              {items && items.map(({ name }) => (
                <p key={name} className='font-medium text-sm'>{name}</p>
              ))}
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

export default Comic
