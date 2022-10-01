import axios from 'axios'

const baseUrl = 'http://cv-buddy.webrecorder.in/api'

export const addResumeApi = async (data: any, token: any) => {
  const configurationObject = {
    method: 'post',
    url: `${baseUrl}/add-resume`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: data,
  }

  const response = await axios(configurationObject)
  return response
}
