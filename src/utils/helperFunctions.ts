import AsyncStorage from '@react-native-async-storage/async-storage'
import Toast from 'react-native-toast-message'

export const storeData = async (key: any, value: any) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (e) {
    // saving error
  }
}
export const getData = async (key: any) => {
  let data
  try {
    data = await AsyncStorage.getItem(key)
  } catch (e) {
    // saving error
  }
  return data
}
export const removeData = async (key: any) => {
  try {
    await AsyncStorage.removeItem(key)
  } catch (e) {
    // remove error
  }
}
/**
 * Show Toast messages
 */
export const showErrorToast = (text: any) => {
  Toast.show({
    type: 'error',
    text1: 'Something went wrong!',
    text2: text,
  })
}
export const showSuccessToast = (text: any) => {
  Toast.show({
    type: 'success',
    text1: 'Successfull',
    text2: text,
  })
}
