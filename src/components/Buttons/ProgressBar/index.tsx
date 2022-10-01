import { Text, HStack, Box } from 'native-base'
import React from 'react'
import { Pressable } from 'react-native'
import CheckMark from '../../../icons/CheckMark.svg'

interface Props {
  activeDotIndex: number
  dotData: Array<string>
  setActiveDotIndex: React.Dispatch<React.SetStateAction<number>>
}

const ProgressBar = ({ activeDotIndex, dotData, setActiveDotIndex }: Props) => {
  return (
    <HStack width="full" justifyContent="space-between" alignItems="center">
      {dotData.map((item, index) => {
        if (activeDotIndex === index) {
          return (
            <>
              <Box
                backgroundColor="coolGray.900"
                px="12px"
                py="4px"
                borderRadius="full"
              >
                <Text fontSize="12px" lineHeight="18px" color="white">
                  {item}
                </Text>
              </Box>
              {index !== dotData.length - 1 && (
                <Box flex={1} height="1px" backgroundColor="coolGray.400" />
              )}
            </>
          )
        }
        return (
          <>
            <Pressable
              onPress={() => {
                setActiveDotIndex(index)
              }}
            >
              <Box
                backgroundColor={
                  index > activeDotIndex ? 'coolGray.400' : 'teal.600'
                }
                p="4px"
                borderRadius="full"
                alignItems="center"
                justifyContent="center"
              >
                <CheckMark />
              </Box>
            </Pressable>
            {index !== dotData.length - 1 && (
              <Box flex={1} height="1px" backgroundColor="coolGray.400" />
            )}
          </>
        )
      })}
    </HStack>
  )
}

export default ProgressBar
