'use client'

import { useState, useEffect } from 'react'
import { useSnackbar } from 'notistack'
import LoadingSpinner from '../../components/Loader'
import { fetchComics } from '../../api/fetchComics'

const Comics = () =>  {
  const [comics, setComics] = useState([])
  const { enqueueSnackbar } = useSnackbar()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchComics()
      .then((data) => {
        console.log(data)
        setComics(data)
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error)
        enqueueSnackbar('Error retrieving the comics. of Marvel', error, { variant: 'error' })
      })
  }, [])

  if (isLoading) {
    return <LoadingSpinner />
  }

  console.log(comics)

  return (
    <div>
      hola desde comics
    </div>
  )
}

export default Comics