import { useNavigation } from '@react-navigation/native'
import { Pressable } from 'native-base'
import LeftArrow from '../../../icons/LeftArrow.svg'
import React from 'react'

const BackNavigationButton = () => {
  const navigation = useNavigation()
  return (
    <Pressable onPress={() => navigation.goBack()}>
      {/* <ArrowBackIcon color="white" size="24px" /> */}
      <LeftArrow />
    </Pressable>
  )
}
export default BackNavigationButton
