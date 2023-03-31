import { postsList } from '../tests/mocks/postsList'

const API_URL = 'https://api-v1.com'

const defaultOptions = {
  headers: {
    'Content-Type': 'application/json',
  },
}

const DUMMY_API_FETCH = async (mockData) => {
  await new Promise((resolve) => setTimeout(resolve, 500)) // simulate a delay of 500ms to make the mock call more realistic

  const response = {
    json: () => Promise.resolve(mockData),
  }

  return response.json()
}

const apiFetch = async (url, options = {}) => {
  const mergedOptions = { ...defaultOptions, ...options }
  const response = await fetch(`${API_URL}${url}`, mergedOptions)
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }
  const data = await response.json()
  return data
}

export const getPosts = async () => {
  return await DUMMY_API_FETCH(postsList)
  const url = `/posts`
  return apiFetch(url)
}

export const login = async (body) => {
  return await DUMMY_API_FETCH(true)
  const url = `/login`
  const options = {
    method: 'POST',
    body: JSON.stringify(body),
  }
  return apiFetch(url, options)
}
