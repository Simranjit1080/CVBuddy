import React, { ReactElement } from 'react'
import { Box, HStack, Text } from 'native-base'
import BackNavigationButton from '../Buttons/BackNavigationButton'

interface Props {
  headerTitle: string | ReactElement
}
const Header = ({ headerTitle }: Props) => {
  return (
    <Box
      safeAreaTop
      backgroundColor={'coolGray.900'}
      paddingY="20px"
      paddingX="16px"
    >
      <HStack alignItems={'center'}>
        <BackNavigationButton />
        {typeof headerTitle === 'string' ? (
          <Text ml="12px" color="white" fontSize="18px" lineHeight="27px">
            {headerTitle}
          </Text>
        ) : (
          headerTitle
        )}
      </HStack>
    </Box>
  )
}

export default Header
