import React from 'react'
import { Box, Text, Input, Button } from 'native-base'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './styles'
import { useFormik } from 'formik'
import * as yup from 'yup'
import InputField from '../../components/InputField'
import {
  setProficiency,
  setSkillName,
} from '../../redux/ResumeDetails/resumeDetailsSlice'
import { useDispatch } from 'react-redux'

const ValidationSchema = yup.object().shape({
  skillName: yup.string(),
  proficiency: yup.string(),
})
interface Props {
  setActiveDotIndex: React.Dispatch<React.SetStateAction<number>>
}

const Skills = ({ setActiveDotIndex }: Props) => {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      skillName: '',
      proficiency: '',
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
          value={formik.values.skillName}
          onChangeText={formik.handleChange('skillName')}
          label="Skill Name"
        />
        <InputField
          value={formik.values.proficiency}
          onChangeText={formik.handleChange('proficiency')}
          label="Proficiency"
        />
      </KeyboardAwareScrollView>
      <Button
        padding="12px"
        width="48%"
        alignSelf="flex-start"
        _text={{ fontWeight: 'bold', color: 'coolGray.900' }}
        backgroundColor="coolGray.200"
        onPress={() => {
          dispatch(setSkillName(formik.values.skillName))
          dispatch(setProficiency(formik.values.proficiency))
          setActiveDotIndex(2)
        }}
      >
        Back
      </Button>
    </>
  )
}
export default Skills
