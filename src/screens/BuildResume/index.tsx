import React, { useState } from 'react'
import { NavigationProp } from '@react-navigation/native'
import { Box } from 'native-base'
import ProgressBar from '../../components/Buttons/ProgressBar'
import { NavigationStackParams } from '../../navigation/AuthNavigator'

interface Props {
  navigation: NavigationProp<NavigationStackParams>
}

const resumeTabs = ['Personal Info', 'Education', 'Experience', 'Skills']
const BuildResume = ({ navigation }: Props) => {
  const [activeDotIndex, setActiveDotIndex] = useState(0)
  return (
    <Box
      safeAreaBottom
      backgroundColor="white"
      flex={1}
      paddingTop="32px"
      px="16px"
    >
      <ProgressBar
        activeDotIndex={activeDotIndex}
        setActiveDotIndex={setActiveDotIndex}
        dotData={resumeTabs}
      />
    </Box>
  )
}
export default BuildResume
