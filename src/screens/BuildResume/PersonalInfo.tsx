import React, { useEffect } from 'react'
import { Box, Text, Input, Button } from 'native-base'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './styles'
import { useFormik } from 'formik'
import * as yup from 'yup'
import InputField from '../../components/InputField'
import { useDispatch, useSelector } from 'react-redux'
import {
  setBio,
  setEmail,
  setFullName,
  setPhone,
} from '../../redux/ResumeDetails/resumeDetailsSlice'
import {
  selectFullName,
  selectEmail,
  selectPhone,
  selectBio,
} from '../../redux/ResumeDetails/resumeDetailsSelectors'

const ValidationSchema = yup.object().shape({
  fullName: yup.string(),
  email: yup.string().email('Must be a valid email address'),
  phone: yup
    .string()
    .matches(/^[0-9]+$/, 'Please enter the valid mobile number')
    .min(10, 'Please enter the valid mobile number'),
  bio: yup.string(),
})

interface Props {
  setActiveDotIndex: React.Dispatch<React.SetStateAction<number>>
}

const PersonalInfo = ({ setActiveDotIndex }: Props) => {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      fullName: 'Simranjit Singh',
      email: 'simranjits@geekyants.com',
      phone: '8559062363',
      bio: 'Hey there',
    },
    onSubmit: (values) => {},
    validationSchema: ValidationSchema,
  })

  const fullName = useSelector(selectFullName)
  const email = useSelector(selectEmail)
  const phone = useSelector(selectPhone)
  const bio = useSelector(selectBio)
  useEffect(() => {
    formik.setFieldValue('fullName', fullName)
    formik.setFieldValue('email', email)
    formik.setFieldValue('phone', phone)
    formik.setFieldValue('bio', bio)
  }, [])

  return (
    <>
      <KeyboardAwareScrollView style={styles.scrollView}>
        <Text
          fontSize="24px"
          fontWeight="bold"
          lineHeight="36px"
          color="coolGray.900"
        >
          Let us know who you are
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
          value={formik.values.fullName}
          onChangeText={formik.handleChange('fullName')}
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
          isTextArea={true}
          value={formik.values.bio}
          onChangeText={formik.handleChange('bio')}
          label="Bio"
        />
      </KeyboardAwareScrollView>
      <Button
        padding="12px"
        width="48%"
        alignSelf="flex-end"
        _text={{ fontWeight: 'bold' }}
        backgroundColor="coolGray.900"
        onPress={() => {
          dispatch(setFullName(formik.values.fullName))
          dispatch(setEmail(formik.values.email))
          dispatch(setPhone(formik.values.phone))
          dispatch(setBio(formik.values.bio))
          setActiveDotIndex(1)
        }}
      >
        Next
      </Button>
    </>
  )
}
export default PersonalInfo
