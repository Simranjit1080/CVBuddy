import { NavigationProp, useFocusEffect } from '@react-navigation/native'
import { Box, Text, Pressable } from 'native-base'
import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { NavigationStackParams } from '../../navigation/AuthNavigator'
import {
  clearAuthData,
  clearRegistrationData,
} from '../../redux/Auth/authSlice'

// import GoogleLogo from '../../icons/GoogleLogo.svg'

interface Props {
  navigation: NavigationProp<NavigationStackParams>
}

const AuthHome = ({ navigation }: Props) => {
  const dispatch = useDispatch()

  const clearAuth = useCallback(() => {
    dispatch(clearAuthData())
    dispatch(clearRegistrationData())
  }, [dispatch])

  useFocusEffect(clearAuth)

  return (
    <Box safeArea backgroundColor="white" flex={1}>
      <Box mt="166px" mx="16px" mb="26px" flex={1}>
        <Text
          mt="70px"
          mb="4px"
          fontSize="70px"
          fontWeight="bold"
          letterSpacing="1px"
          lineHeight="84.72px"
          color="black"
        >
          Smart.
        </Text>
        <Text
          fontSize="22px"
          lineHeight="26.63px"
          letterSpacing="3px"
          fontWeight="medium"
          mb="25px"
          color="black"
        >
          On the go investing.
        </Text>
        <Box flex={1} justifyContent="flex-end">
          <Text
            textAlign={'center'}
            fontSize="14px"
            lineHeight="20px"
            color="black"
          >
            By proceeding, I accept Stock's <Text color={'teal.600'}>T&C</Text>,{' '}
            <Text color={'teal.600'}>Privacy Policy</Text> and{' '}
            <Text color={'teal.600'}>Tariff Rates</Text>.
          </Text>
          <Pressable
            onPress={() => navigation.navigate('AuthSignUp')} //change later
            backgroundColor="black"
            _pressed={{ backgroundColor: 'gray.600' }}
            width="full"
            mt="14px"
            mb="20px"
            borderRadius="40px"
            justifyContent="center"
            alignItems="center"
            paddingY="10px"
            flexDirection="row"
          >
            {/* <GoogleLogo /> */}
            <Text
              pl="6px"
              textAlign="center"
              fontSize="14px"
              lineHeight="20px"
              color="white"
              fontWeight="medium"
            >
              Continue with Google
            </Text>
          </Pressable>
          <Text
            textAlign={'center'}
            fontSize="14px"
            lineHeight="20px"
            color={'contrast.shade2'}
          >
            Already have an account?{' '}
            <Text
              onPress={() => navigation.navigate('AuthEnterMobile')}
              color={'teal.600'}
              fontWeight="semibold"
            >
              Login
            </Text>
          </Text>
        </Box>
      </Box>
    </Box>
  )
}
export default AuthHome
