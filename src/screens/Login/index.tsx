import React from 'react'
import { View, Box, VStack, Text, Button, Center, StatusBar } from 'native-base'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import InputField from '../../components/InputField'
import { useNavigation } from '@react-navigation/native'
import { signIn } from '../../redux/Auth/authSlice'

interface Props {
  setActiveDotIndex: React.Dispatch<React.SetStateAction<number>>
}

const ValidationSchema = yup.object().shape({
  email: yup.string().email('Must be a valid email address'),
  password: yup.string(),
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
      email: formik.values.email,
      password: formik.values.password,
    }
    console.log({ data })
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
          label="Email"
        />
        <InputField
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
          label="Password"
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
          Login
        </Button>
      </KeyboardAwareScrollView>
    </Box>
  )
}
export default Login
