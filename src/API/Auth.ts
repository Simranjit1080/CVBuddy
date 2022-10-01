import axios from 'axios'

const baseUrl = 'http://localhost:3000'

// Sign In and Sign Up
export const getAuthDetails = async (data: {
  username: string
  password: string
}) => {
  const params = new URLSearchParams(data).toString()
  const configurationObject = {
    method: 'post',
    url: `${baseUrl}/auth/login`,
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: params,
  }
  const response = await axios(configurationObject)
  return response
}
export const getRegistrationDetails = async (data: {
  name: string
  mobile: string
  email: string
  password: string
  username: string
}) => {
  const params = new URLSearchParams(data).toString()
  const configurationObject = {
    method: 'post',
    url: `${baseUrl}/auth/register`,
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: params,
  }
  const response = await axios(configurationObject)
  return response
}
// Refresh Token
export const getRefreshToken = async (token: string) => {
  const configurationObject = {
    method: 'get',
    url: `${baseUrl}/auth/refreshToken`,
    headers: {
      app_secret: 'geek.stockApp',
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios(configurationObject)
  return response
}
