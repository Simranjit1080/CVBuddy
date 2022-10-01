import AsyncStorage from '@react-native-async-storage/async-storage'

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
