import React from 'react'
import { Box, Text, Input, HStack, Button } from 'native-base'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './styles'
import { useFormik } from 'formik'
import * as yup from 'yup'
import InputField from '../../components/InputField'
import {
  setFieldOfStudy,
  setGradEndDate,
  setGradStartDate,
  setUniversity,
} from '../../redux/ResumeDetails/resumeDetailsSlice'
import { useDispatch } from 'react-redux'

const ValidationSchema = yup.object().shape({
  university: yup.string(),
  fieldOfStudy: yup.string(),
  startDate: yup.string(),
  gradDate: yup.string(),
})

interface Props {
  setActiveDotIndex: React.Dispatch<React.SetStateAction<number>>
}

const Education = ({ setActiveDotIndex }: Props) => {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      university: '',
      fieldOfStudy: '',
      startDate: '',
      gradDate: '',
    },
    onSubmit: () => {},
    validationSchema: ValidationSchema,
  })
  return (
    <>
      <KeyboardAwareScrollView style={styles.scrollView}>
        <Text
          fontSize="24px"
          fontWeight="bold"
          lineHeight="36px"
          color="coolGray.900"
        >
          Tell us about your education
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
          value={formik.values.university}
          onChangeText={formik.handleChange('university')}
          label="University"
        />
        <InputField
          value={formik.values.fieldOfStudy}
          onChangeText={formik.handleChange('fieldOfStudy')}
          label="Field of Study"
        />
        <InputField
          value={formik.values.startDate}
          onChangeText={formik.handleChange('startDate')}
          label="Start Date"
        />
        <InputField
          value={formik.values.gradDate}
          onChangeText={formik.handleChange('gradDate')}
          label="Graduation Date"
        />
      </KeyboardAwareScrollView>
      <HStack width="full" justifyContent="space-between">
        <Button
          padding="12px"
          width="48%"
          alignSelf="flex-start"
          _text={{ fontWeight: 'bold', color: 'coolGray.900' }}
          backgroundColor="coolGray.200"
          onPress={() => {
            setActiveDotIndex(0)
          }}
        >
          Back
        </Button>
        <Button
          padding="12px"
          width="48%"
          alignSelf="flex-end"
          _text={{ fontWeight: 'bold' }}
          backgroundColor="coolGray.900"
          onPress={() => {
            dispatch(setUniversity(formik.values.university))
            dispatch(setFieldOfStudy(formik.values.fieldOfStudy))
            dispatch(setGradStartDate(formik.values.startDate))
            dispatch(setGradEndDate(formik.values.gradDate))
            setActiveDotIndex(2)
          }}
        >
          Next
        </Button>
      </HStack>
    </>
  )
}
export default Education
