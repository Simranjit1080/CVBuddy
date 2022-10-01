import React from 'react'
import { Box, Text, Input, Button, HStack } from 'native-base'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './styles'
import { useFormik } from 'formik'
import * as yup from 'yup'
import InputField from '../../components/InputField'
import {
  setCity,
  setEmployer,
  setJobEndDate,
  setJobStartDate,
  setJobTitle,
} from '../../redux/ResumeDetails/resumeDetailsSlice'
import { useDispatch } from 'react-redux'

const ValidationSchema = yup.object().shape({
  jobTitle: yup.string(),
  employer: yup.string(),
  startDate: yup.string(),
  endDate: yup.string(),
  city: yup.string(),
})

interface Props {
  setActiveDotIndex: React.Dispatch<React.SetStateAction<number>>
}

const Experience = ({ setActiveDotIndex }: Props) => {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      jobTitle: '',
      employer: '',
      startDate: '',
      endDate: '',
      city: '',
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
          Tell us more about you
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
          value={formik.values.jobTitle}
          onChangeText={formik.handleChange('jobTitle')}
          label="Job Title"
        />
        <InputField
          value={formik.values.employer}
          onChangeText={formik.handleChange('employer')}
          label="Employer"
        />
        <InputField
          value={formik.values.startDate}
          onChangeText={formik.handleChange('startDate')}
          label="Start Date"
        />
        <InputField
          value={formik.values.endDate}
          onChangeText={formik.handleChange('endDate')}
          label="End Date"
        />
        <InputField
          value={formik.values.city}
          onChangeText={formik.handleChange('city')}
          label="City"
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
            setActiveDotIndex(1)
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
            dispatch(setJobTitle(formik.values.jobTitle))
            dispatch(setEmployer(formik.values.employer))
            dispatch(setJobStartDate(formik.values.startDate))
            dispatch(setJobEndDate(formik.values.endDate))
            dispatch(setCity(formik.values.city))
            setActiveDotIndex(3)
          }}
        >
          Next
        </Button>
      </HStack>
    </>
  )
}
export default Experience