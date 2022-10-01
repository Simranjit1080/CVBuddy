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
  name: yup.string().required(),
  email: yup.string().email('Must be a valid email address').required(),
  phone: yup
    .string()
    .matches(/^[0-9]+$/, 'Please enter the valid mobile number')
    .max(10, 'Please enter 10 digit number')
    .required(),
  password: yup.string().required(),
  confirmPasword: yup.string().required('Confirm password is required'),
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
      email: formik.values.email.toLowerCase(),
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
          onBlur={formik.handleBlur('name')}
          error={formik.errors.name}
          label="Full Name"
          isInvalid={!!(formik.errors.name && formik.touched.name)}
        />
        <InputField
          value={formik.values.email}
          onChangeText={formik.handleChange('email')}
          onBlur={formik.handleBlur('email')}
          error={formik.errors.email}
          label="Email"
          isInvalid={!!(formik.errors.email && formik.touched.email)}
        />
        <InputField
          value={formik.values.phone}
          onChangeText={formik.handleChange('phone')}
          onBlur={formik.handleBlur('phone')}
          error={formik.errors.phone}
          label="Phone"
          isInvalid={!!(formik.errors.phone && formik.touched.phone)}
        />
        <InputField
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
          onBlur={formik.handleBlur('password')}
          error={formik.errors.password}
          label="Password"
          isInvalid={!!(formik.errors.password && formik.touched.password)}
        />

        <InputField
          value={formik.values.confirmPasword}
          onChangeText={formik.handleChange('confirmPasword')}
          onBlur={formik.handleBlur('confirmPasword')}
          error={formik.errors.confirmPasword}
          label="Confirm Password"
          isInvalid={
            !!(formik.errors.confirmPasword && formik.touched.confirmPasword)
          }
        />
        <Button
          my={'10'}
          width="100%"
          isDisabled={
            formik.values.confirmPasword !== formik.values.password ||
            !(formik.dirty && formik.isValid)
          }
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
