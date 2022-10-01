import React from 'react'
import { Box, HStack, Input, Text, TextArea } from 'native-base'
import ErrorExclamation from '../../icons/ErrorExclamation.svg'

interface Props {
  label: string
  value: string
  onChangeText: (text: string) => void
  isTextArea?: boolean
  isInvalid?: boolean
  onBlur?: (e: any) => void
  error?: string
}

const InputField = ({
  label,
  value,
  onChangeText,
  isTextArea,
  isInvalid,
  onBlur,
  error,
}: Props) => {
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
          invalidOutlineColor="red.600"
          isInvalid={isInvalid}
          value={value}
          onChangeText={onChangeText}
          onBlur={onBlur}
          autoCompleteType={undefined}
        />
      ) : (
        <Input
          _focus={{ backgroundColor: 'white', borderColor: 'teal.600' }}
          variant="outline"
          color="coolGray.900"
          borderColor="coolGray.300"
          invalidOutlineColor="red.600"
          isInvalid={isInvalid}
          fontSize="14px"
          paddingY="12px"
          paddingX="12px"
          value={value}
          onChangeText={onChangeText}
          onBlur={onBlur}
          secureTextEntry={label === 'Password' || label === 'Confirm Password'}
        />
      )}
      {!!(isInvalid && error) && (
        <HStack alignItems="center">
          <ErrorExclamation fill="red" />
          <Text fontSize="14px" lineHeight="20px" ml="6px" color="red.600">
            {error}
          </Text>
        </HStack>
      )}
      <></>
    </Box>
  )
}

export default InputField
