import { MD5 } from 'crypto-js'

const publicKey = process.env.NEXT_PUBLIC_API_PUBLIC_KEY
const privateKey = process.env.NEXT_PUBLIC_API_PRIVATE_KEY

export async function fetchData() {
  const md5 = MD5

  // Marca de tiempo actual
  const ts = new Date().getTime().toString()

  // Construir el hash según la documentación de Marvel
  const hash = md5(ts + privateKey + publicKey)

  // URL base de la API de Marvel con la clave pública
  const baseUrl = process.env.NEXT_PUBLIC_API_SERVER + publicKey

  // Parámetros adicionales (ts y hash)
  const queryParams = '&ts=' + ts + '&hash=' + hash

  // Define el límite de personajes (debe ser proporcionado o definido)
  const totalCharacters = 100

  // Realizar la solicitud HTTP para obtener los personajes
  const apiUrl = baseUrl + queryParams + `&limit=${totalCharacters}`

  try {
    const response = await fetch(apiUrl)
    if (!response.ok) {
      throw new Error('No se pudo obtener la respuesta correcta de la API')
    }

    const data = await response.json()
    return data.data.results
  } catch (error) {
    throw error
  }
}
