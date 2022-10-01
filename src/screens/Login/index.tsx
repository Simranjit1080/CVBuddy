import React, { useEffect } from 'react'
import { View, Box, VStack, Text, Button, Center, StatusBar } from 'native-base'
import * as yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import InputField from '../../components/InputField'
import { useNavigation } from '@react-navigation/native'
import { signIn } from '../../redux/Auth/authSlice'

interface Props {
  setActiveDotIndex: React.Dispatch<React.SetStateAction<number>>
}

const ValidationSchema = yup.object().shape({
  email: yup.string().email('Must be a valid email address').required(),
  password: yup.string().required(),
})

interface Props {
  setActiveDotIndex: React.Dispatch<React.SetStateAction<number>>
}

const Login = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {},
    validationSchema: ValidationSchema,
  })
  const handleSubmit = () => {
    const data = {
      email: formik.values.email.toLowerCase(),
      password: formik.values.password,
    }
    dispatch(signIn(data))
  }

  return (
    <Box
      safeAreaBottom
      backgroundColor="white"
      flex={1}
      paddingTop="32px"
      px="16px"
    >
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <KeyboardAwareScrollView style={{ paddingTop: 36 }}>
        <Text
          fontSize="24px"
          fontWeight="bold"
          lineHeight="36px"
          color="coolGray.900"
        >
          Welcome to CVBuddy!
        </Text>
        <Text
          fontSize="14px"
          lineHeight="21px"
          mt="6px"
          color="coolGray.900"
          mb="8px"
        >
          Build your brand-new resume in as little as 5 minutes.
        </Text>
        <InputField
          value={formik.values.email}
          onChangeText={formik.handleChange('email')}
          onBlur={formik.handleBlur('email')}
          error={formik.errors.email}
          label="Email"
          isInvalid={!!(formik.errors.email && formik.touched.email)}
        />
        <InputField
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
          onBlur={formik.handleBlur('password')}
          error={formik.errors.password}
          label="Password"
          isInvalid={!!(formik.errors.password && formik.touched.password)}
        />

        <Button
          my={'10'}
          width="100%"
          isDisabled={!(formik.dirty && formik.isValid)}
          height={50}
          alignSelf="flex-end"
          _text={{ fontWeight: 'bold' }}
          backgroundColor="coolGray.900"
          onPress={() => {
            handleSubmit()
          }}
        >
          Login
        </Button>
      </KeyboardAwareScrollView>
      <Box>
        <Center>
          <Text fontSize="md">
            Don't have an account?{' '}
            <Text
              size={18}
              color="coolGray.900"
              fontWeight="bold"
              onPress={() => {
                navigation.navigate('SignUp')
              }}
            >
              Sign Up
            </Text>
          </Text>
        </Center>
      </Box>
    </Box>
  )
}
export default Login
