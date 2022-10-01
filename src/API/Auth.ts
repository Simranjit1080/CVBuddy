import axios from 'axios'

const baseUrl = 'http://cv-buddy.webrecorder.in/api'

// Sign In and Sign Up
export const signUpApi = async (data: any) => {
  const configurationObject = {
    method: 'post',
    url: `${baseUrl}/signup`,
    data: data,
  }
  const response = await axios(configurationObject)
  return response
}

export const signInApi = async (data: any) => {
  const configurationObject = {
    method: 'post',
    url: `${baseUrl}/signin`,
    data: data,
  }
  const response = await axios(configurationObject)
  return response
}
