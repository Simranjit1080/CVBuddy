import React, { useState } from 'react'
import { Box, StatusBar } from 'native-base'
import ProgressBar from '../../components/Buttons/ProgressBar'
import PersonalInfo from './PersonalInfo'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'

const resumeTabs = ['Personal Info', 'Education', 'Experience', 'Skills']

const BuildResume = () => {
  const [activeDotIndex, setActiveDotIndex] = useState(0)
  return (
    <Box
      safeAreaBottom
      backgroundColor="white"
      flex={1}
      paddingTop="32px"
      px="16px"
    >
      <StatusBar backgroundColor="white" barStyle="light-content" />
      <ProgressBar
        activeDotIndex={activeDotIndex}
        setActiveDotIndex={setActiveDotIndex}
        dotData={resumeTabs}
      />
      {activeDotIndex === 0 && (
        <PersonalInfo setActiveDotIndex={setActiveDotIndex} />
      )}
      {activeDotIndex === 1 && (
        <Education setActiveDotIndex={setActiveDotIndex} />
      )}
      {activeDotIndex === 2 && (
        <Experience setActiveDotIndex={setActiveDotIndex} />
      )}
      {activeDotIndex === 3 && <Skills setActiveDotIndex={setActiveDotIndex} />}
    </Box>
  )
}
export default BuildResume
