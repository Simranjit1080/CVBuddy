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
import RenderHTML from 'react-native-render-html'
import { useNavigation } from '@react-navigation/native'

const ValidationSchema = yup.object().shape({
  skillName: yup.string(),
  proficiency: yup.string(),
})
interface Props {
  setActiveDotIndex: React.Dispatch<React.SetStateAction<number>>
}

const Skills = ({ setActiveDotIndex }: Props) => {
  const navigation = useNavigation()
  const tagsStyles = {
    h2: {
      fontSize: 22,
      lineHeight: 26,
      letterSpacing: 0,
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      letterSpacing: 0,

      marginTop: 16,
    },
    h6: {
      fontSize: 10,
      letterSpacing: 0,
    },

    p: {
      fontSize: 16,
      lineHeight: 24,
      letterSpacing: 0,
    },
  }
  const source = `<div id="header"></div>
  <div class="left"></div>
  <div class="stuff">
    <br><br>
    <h1>Resume</h1>
    <h2>Emily</h2>
    <hr />
    <br>
    <p class="head">Interests</p>
    <ul>
      <li>Drawing</li>
      <li>Photography</li>
      <li>Design</li>
      <li>Programming</li>
      <li>Computer Science</li>
    </ul>
    <p class="head">Skills</p>
    <ul>
      <li>Web Design with HTML & CSS</li>
    </ul>
    <p class="head">Education</p>
    <ul>
      <a href="http://www.wiltonhighschool.org/pages/Wilton_High_School">
        <li>Wilton High School</li>
      </a>
      <!--Link-->
      <a href="https://www.silvermineart.org/">
        <li>Silvermine School of Arts</li>
      </a>
      <li>Codeacademy</li>
    </ul>
    <p class="head">Experience</p>
    <ul>
      <li>Student Technology Intern for Wilton School District</li>
      <li>Babysitter</li>
    </ul>
    <p class="head">Extracurriculars</p>
    <ul>
      <li>Recycling Club</li>
      <li>Gardening Club</li>
      <li>Book Club</li>
    </ul>
  </div>
  <div class="right"></div>
  <div id="footer">
    <h2 id="name">Emily</h2></div>`
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

      <Button
        padding="12px"
        width="48%"
        alignSelf="flex-start"
        _text={{ fontWeight: 'bold', color: 'coolGray.900' }}
        backgroundColor="coolGray.200"
        onPress={() => {
          navigation.navigate('Preview')
        }}
      >
        preview
      </Button>
    </>
  )
}
export default Skills
