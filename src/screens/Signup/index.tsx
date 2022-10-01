import React from 'react'
import { View, Box, VStack, Text, Button, Center, StatusBar } from 'native-base'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import InputField from '../../components/InputField'
import { useNavigation } from '@react-navigation/native'
import { signUp } from '../../redux/Auth/authSlice'

interface Props {
  setActiveDotIndex: React.Dispatch<React.SetStateAction<number>>
}

const ValidationSchema = yup.object().shape({
  name: yup.string(),
  email: yup.string().email('Must be a valid email address'),
  phone: yup
    .string()
    .matches(/^[0-9]+$/, 'Please enter the valid mobile number')
    .min(10, 'Please enter the valid mobile number'),
  password: yup.string(),
  confirmPasword: yup.string(),
})

interface Props {
  setActiveDotIndex: React.Dispatch<React.SetStateAction<number>>
}

const Signup = () => {
  const dispatch = useDispatch()

  const navigation = useNavigation()
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPasword: '',
    },
    onSubmit: (values) => {},
    validationSchema: ValidationSchema,
  })

  const handleSubmit = () => {
    const data = {
      name: formik.values.name,
      email: formik.values.email,
      password: formik.values.password,
      phone_number: formik.values.phone,
    }
    dispatch(signUp(data))
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
          value={formik.values.name}
          onChangeText={formik.handleChange('name')}
          label="Full Name"
        />
        <InputField
          value={formik.values.email}
          onChangeText={formik.handleChange('email')}
          label="Email"
        />
        <InputField
          value={formik.values.phone}
          onChangeText={formik.handleChange('phone')}
          label="Phone"
        />
        <InputField
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
          label="Password"
        />

        <InputField
          value={formik.values.confirmPasword}
          onChangeText={formik.handleChange('confirmPasword')}
          label="Confirm Password"
        />
        <Button
          my={'10'}
          width="100%"
          height={50}
          alignSelf="flex-end"
          _text={{ fontWeight: 'bold' }}
          backgroundColor="coolGray.900"
          onPress={() => {
            handleSubmit()
          }}
        >
          Sign Up
        </Button>
      </KeyboardAwareScrollView>
      <Box>
        <Center>
          <Text fontSize="md">
            Already have an account?{' '}
            <Text
              size={18}
              color="coolGray.900"
              fontWeight="bold"
              onPress={() => {
                navigation.navigate('Login')
              }}
            >
              Login
            </Text>
          </Text>
        </Center>
      </Box>
    </Box>
  )
}
export default Signup
