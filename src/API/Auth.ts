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

export const exportPdfApi = async (data: any) => {
  console.log('data :>> ', data)
  const configurationObject = {
    method: 'post',

    // url: `https://222b-106-51-67-220.in.ngrok.io/api/send-email`,
    url: 'http://cv-buddy.webrecorder.in/api/send-email',

    data: {
      resumeId: 1,
      file: data,
    },
  }
  const response = await axios(configurationObject)
  return response
}
