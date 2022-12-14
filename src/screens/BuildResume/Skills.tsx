import React, { useEffect } from 'react'
import {
  Box,
  Text,
  Input,
  Button,
  HStack,
  Center,
  Pressable,
} from 'native-base'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './styles'
import { useFormik } from 'formik'
import * as yup from 'yup'
import InputField from '../../components/InputField'
import {
  addResume,
  setProficiency,
  setSkillName,
} from '../../redux/ResumeDetails/resumeDetailsSlice'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectBio,
  selectCity,
  selectEmployer,
  selectFieldOfStudy,
  selectFullName,
  selectGradEndDate,
  selectGradStartDate,
  selectJobEndDate,
  selectJobStartDate,
  selectJobTitle,
  selectPhone,
  selectProficiency,
  selectUniversity,
  selectSkillName,
  selectEmail,
} from '../../redux/ResumeDetails/resumeDetailsSelectors'
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

  const fullName = useSelector(selectFullName)
  const email = useSelector(selectEmail)
  const phone = useSelector(selectPhone)
  const bio = useSelector(selectBio)
  const university = useSelector(selectUniversity)
  const fieldOfStudy = useSelector(selectFieldOfStudy)
  const gradStartDate = useSelector(selectGradStartDate)
  const gradEndDate = useSelector(selectGradEndDate)
  const jobTitle = useSelector(selectJobTitle)
  const employer = useSelector(selectEmployer)
  const jobStartDate = useSelector(selectJobStartDate)
  const jobEndDate = useSelector(selectJobEndDate)
  const city = useSelector(selectCity)
  const skillName = useSelector(selectSkillName)
  const proficiency = useSelector(selectProficiency)

  const data = {
    templet_id: 1,
    data: [
      {
        item_id: 3,
        sub_item_id: 10,
        value: fullName,
      },
      {
        item_id: 3,
        sub_item_id: 11,
        value: email,
      },
      {
        item_id: 3,
        sub_item_id: 12,
        value: phone,
      },
      {
        item_id: 3,
        sub_item_id: 13,
        value: bio,
      },
      {
        item_id: 2,
        sub_item_id: 6,
        value: university,
      },
      {
        item_id: 2,
        sub_item_id: 7,
        value: fieldOfStudy,
      },
      {
        item_id: 2,
        sub_item_id: 8,
        value: gradStartDate,
      },
      {
        item_id: 2,
        sub_item_id: 9,
        value: gradEndDate,
      },
      {
        item_id: 1,
        sub_item_id: 1,
        value: jobTitle,
      },
      {
        item_id: 1,
        sub_item_id: 2,
        value: employer,
      },
      {
        item_id: 1,
        sub_item_id: 3,
        value: jobStartDate,
      },
      {
        item_id: 1,
        sub_item_id: 4,
        value: jobEndDate,
      },
      {
        item_id: 1,
        sub_item_id: 5,
        value: city,
      },
      {
        item_id: 4,
        sub_item_id: 14,
        value: skillName,
      },
      {
        item_id: 4,
        sub_item_id: 15,
        value: proficiency,
      },
    ],
  }

  const formik = useFormik({
    initialValues: {
      skillName: 'React Native',
      proficiency: 'Intermediate',
    },
    onSubmit: () => {},
    validationSchema: ValidationSchema,
  })

  useEffect(() => {
    formik.setFieldValue('skillName', skillName)
    formik.setFieldValue('proficiency', proficiency)
  }, [])

  const handleSubmit = () => {
    dispatch(addResume(data))
  }

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

        <Pressable
          padding="12px"
          marginTop={10}
          width="80%"
          alignSelf="center"
          backgroundColor="coolGray.900"
          onPress={() => {}}
        >
          <Text color={'white'} bold textAlign={'center'} fontSize="md">
            Add Skill +
          </Text>
        </Pressable>
      </KeyboardAwareScrollView>
      <HStack width="full" justifyContent="space-between">
        <Button
          padding="12px"
          width="31%"
          alignSelf="flex-start"
          _text={{ fontWeight: 'bold', color: 'coolGray.900' }}
          borderColor="coolGray.200"
          backgroundColor="white"
          borderWidth={1}
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
          width="31%"
          alignSelf="flex-start"
          _text={{ fontWeight: 'bold', color: 'coolGray.900' }}
          backgroundColor="coolGray.200"
          onPress={() => {
            dispatch(setSkillName(formik.values.skillName))
            dispatch(setProficiency(formik.values.proficiency))
            navigation.navigate('Preview')
          }}
        >
          Preview
        </Button>
      </HStack>
      <Button
        padding="12px"
        marginTop={4}
        width="100%"
        alignSelf="flex-end"
        _text={{ fontWeight: 'bold' }}
        backgroundColor="coolGray.900"
        onPress={() => {
          dispatch(setSkillName(formik.values.skillName))
          dispatch(setProficiency(formik.values.proficiency))
          handleSubmit()
        }}
      >
        Save Template
      </Button>
    </>
  )
}
export default Skills
