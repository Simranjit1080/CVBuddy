import axios from 'axios'
import { getData } from '../utils/helperFunctions'

const baseUrl = 'http://cv-buddy.webrecorder.in/api'

export const addResumeApi = async (data: any) => {
  const token = await getData('token')
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
