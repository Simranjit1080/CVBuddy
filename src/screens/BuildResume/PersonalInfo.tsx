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
  fullName: yup.string().required('Full Name is a required field'),
  email: yup
    .string()
    .email('Must be a valid email address')
    .required('Email is a required field'),
  phone: yup
    .string()
    .matches(/^[0-9]+$/, 'Please enter the valid mobile number')
    .max(10, 'Please enter 10 digit mobile number')
    .min(10, 'Please enter 10 digit mobile number')
    .required('Phone is a required field'),
  bio: yup.string().required('Bio is a required field'),
})

interface Props {
  setActiveDotIndex: React.Dispatch<React.SetStateAction<number>>
}

const PersonalInfo = ({ setActiveDotIndex }: Props) => {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phone: '',
      bio: '',
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
          isInvalid={!!(formik.errors.fullName && formik.touched.fullName)}
          onBlur={formik.handleBlur('fullName')}
          error={formik.errors.fullName}
          label="Full Name"
        />
        <InputField
          value={formik.values.email}
          onChangeText={formik.handleChange('email')}
          isInvalid={!!(formik.errors.email && formik.touched.email)}
          onBlur={formik.handleBlur('email')}
          error={formik.errors.email}
          label="Email"
        />
        <InputField
          value={formik.values.phone}
          onChangeText={formik.handleChange('phone')}
          isInvalid={!!(formik.errors.phone && formik.touched.phone)}
          onBlur={formik.handleBlur('phone')}
          error={formik.errors.phone}
          label="Phone"
        />
        <InputField
          isTextArea={true}
          value={formik.values.bio}
          onChangeText={formik.handleChange('bio')}
          onBlur={formik.handleBlur('bio')}
          error={formik.errors.bio}
          isInvalid={!!(formik.errors.bio && formik.touched.bio)}
          label="Bio"
        />
      </KeyboardAwareScrollView>
      <Button
        padding="12px"
        width="48%"
        alignSelf="flex-end"
        isDisabled={!(formik.dirty && formik.isValid)}
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
