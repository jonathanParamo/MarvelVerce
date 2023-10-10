import { MD5 } from 'crypto-js'

const publicKey = process.env.NEXT_PUBLIC_API_PUBLIC_KEY
const privateKey = process.env.NEXT_PUBLIC_API_PRIVATE_KEY
const apiServer = process.env.NEXT_PUBLIC_API_SERVER

// Función para construir la URL base de la API de Marvel para cómics
const buildBaseUrl = () => {
  return `${apiServer}/v1/public/comics?apikey=${publicKey}`
}

// Función para construir los parámetros comunes (ts y hash)
const buildCommonParams = () => {
  const md5 = MD5
  const ts = new Date().getTime().toString()
  const hash = md5(ts + privateKey + publicKey)
  return `&ts=${ts}&hash=${hash}`
}

// Función para realizar la solicitud HTTP y manejar errores comunes
const makeRequest = async (url) => {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('The correct response could not be obtained from the API.')
    }
    return await response.json()
  } catch (error) {
    throw error
  }
}

export async function fetchComics() {
  const baseUrl = buildBaseUrl()
  const commonParams = buildCommonParams()
  const totalComics = 100
  const apiUrl = `${baseUrl}${commonParams}&limit=${totalComics}`
  return makeRequest(apiUrl).then(({ data }) => data.results)
}
