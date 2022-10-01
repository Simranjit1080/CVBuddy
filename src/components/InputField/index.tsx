import React from 'react'
import { Box, Input, Text, TextArea } from 'native-base'

interface Props {
  label: string
  value: string
  onChangeText: (text: string) => void
  isTextArea?: boolean
}

const InputField = ({ label, value, onChangeText, isTextArea }: Props) => {
  return (
    <Box mt="16.5px">
      <Text
        fontSize="12px"
        lineHeight="18px"
        fontWeight="bold"
        color="coolGray.500"
      >
        {label}
      </Text>
      {isTextArea ? (
        <TextArea
          _focus={{ backgroundColor: 'white', borderColor: 'teal.600' }}
          variant="outline"
          color="coolGray.900"
          borderColor="coolGray.300"
          fontSize="14px"
          paddingY="12px"
          paddingX="12px"
          value={value}
          onChangeText={onChangeText}
          autoCompleteType={undefined}
        />
      ) : (
        <Input
          _focus={{ backgroundColor: 'white', borderColor: 'teal.600' }}
          variant="outline"
          color="coolGray.900"
          borderColor="coolGray.300"
          fontSize="14px"
          paddingY="12px"
          paddingX="12px"
          value={value}
          onChangeText={onChangeText}
        />
      )}
    </Box>
  )
}

export default InputField
