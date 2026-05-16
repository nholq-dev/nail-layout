import axios from 'axios'

export type TokenProvider = () => Promise<string | null | undefined>

let tokenProvider: TokenProvider | null = null

export function setTokenProvider(provider: TokenProvider) {
  tokenProvider = provider
}

export async function fetchAuthenticated(url: string, options: RequestInit = {}) {
  const token = await tokenProvider?.()
  const headers = new Headers(options.headers)

  if (token) {
    headers.set('Authorization', `Bearer ${token}`)
  }

  if (!headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json')
  }

  const response = await fetch(url, {
    ...options,
    headers
  })

  if (response.status === 401) {
    throw new Error('UNAUTHENTICATED')
  }

  if (response.status === 403) {
    throw new Error('FORBIDDEN')
  }

  return response
}

const apiClient = axios.create({
  baseURL: 'http://localhost:9090',
  headers: {
    'Content-Type': 'application/json'
  }
})

apiClient.interceptors.request.use(async (config) => {
  const token = await tokenProvider?.()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default {
  getUser(id: number) {
    return apiClient.get(`/users/${id}`)
  },
  postUser(params: Record<string, unknown>) {
    return apiClient.post('/users', params)
  }
}
