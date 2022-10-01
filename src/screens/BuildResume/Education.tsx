import React, { useEffect } from 'react'
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
import { useDispatch, useSelector } from 'react-redux'
import {
  selectFieldOfStudy,
  selectGradEndDate,
  selectGradStartDate,
  selectUniversity,
} from '../../redux/ResumeDetails/resumeDetailsSelectors'

const ValidationSchema = yup.object().shape({
  university: yup.string().required('University is a required field'),
  fieldOfStudy: yup.string().required('Field of study is a required field'),
  startDate: yup.string().required('Start date is a required field'),
  gradDate: yup.string().required('Graduation date is a required field'),
})

interface Props {
  setActiveDotIndex: React.Dispatch<React.SetStateAction<number>>
}

const Education = ({ setActiveDotIndex }: Props) => {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      university: 'Chitkara',
      fieldOfStudy: 'CSE',
      startDate: '30 July 2017',
      gradDate: '30 July 2021',
    },
    onSubmit: () => {},
    validationSchema: ValidationSchema,
  })

  const university = useSelector(selectUniversity)
  const fieldOfStudy = useSelector(selectFieldOfStudy)
  const gradStartDate = useSelector(selectGradStartDate)
  const gradEndDate = useSelector(selectGradEndDate)
  useEffect(() => {
    formik.setFieldValue('university', university)
    formik.setFieldValue('fieldOfStudy', fieldOfStudy)
    formik.setFieldValue('startDate', gradStartDate)
    formik.setFieldValue('gradDate', gradEndDate)
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
          onBlur={formik.handleBlur('university')}
          error={formik.errors.university}
          isInvalid={!!(formik.errors.university && formik.touched.university)}
          label="University"
        />
        <InputField
          value={formik.values.fieldOfStudy}
          onChangeText={formik.handleChange('fieldOfStudy')}
          onBlur={formik.handleBlur('fieldOfStudy')}
          isInvalid={
            !!(formik.errors.fieldOfStudy && formik.touched.fieldOfStudy)
          }
          error={formik.errors.fieldOfStudy}
          label="Field of Study"
        />
        <InputField
          value={formik.values.startDate}
          onChangeText={formik.handleChange('startDate')}
          onBlur={formik.handleBlur('startDate')}
          isInvalid={!!(formik.errors.startDate && formik.touched.startDate)}
          error={formik.errors.startDate}
          label="Start Date"
        />
        <InputField
          value={formik.values.gradDate}
          onBlur={formik.handleBlur('gradDate')}
          isInvalid={!!(formik.errors.gradDate && formik.touched.gradDate)}
          error={formik.errors.gradDate}
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
          borderColor="coolGray.200"
          backgroundColor="white"
          borderWidth={1}
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
          isDisabled={!(formik.dirty && formik.isValid)}
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
