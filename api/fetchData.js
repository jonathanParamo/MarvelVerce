import { MD5 } from 'crypto-js'

const publicKey = process.env.NEXT_PUBLIC_API_PUBLIC_KEY
const privateKey = process.env.NEXT_PUBLIC_API_PRIVATE_KEY
const apiServer = process.env.NEXT_PUBLIC_API_SERVER

// Función para construir la URL base de la API de Marvel
const buildBaseUrl = () => {
  return `${apiServer}/v1/public/characters?apikey=${publicKey}`
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
      throw new Error('No se pudo obtener la respuesta correcta de la API')
    }
    return await response.json()
  } catch (error) {
    throw error
  }
}

export async function fetchData() {
  const baseUrl = buildBaseUrl()
  const commonParams = buildCommonParams()
  const totalCharacters = 100
  const apiUrl = `${baseUrl}${commonParams}&limit=${totalCharacters}`
  return makeRequest(apiUrl).then((data) => data.data.results)
}

export async function fetchCharacterById(characterId) {
  const md5 = MD5
  const ts = new Date().getTime().toString()
  const hash = md5(ts + privateKey + publicKey)
  const baseUrl = `${apiServer}/v1/public/characters/${characterId}`
  const queryParams = `?apikey=${publicKey}&ts=${ts}&hash=${hash}`

  const apiUrl = baseUrl + queryParams

  try {
    const response = await fetch(apiUrl)
    if (!response.ok) {
      throw new Error('No se pudo obtener la respuesta correcta de la API')
    }

    const data = await response.json()
    return data.data.results[0]
  } catch (error) {
    throw error
  }
}
