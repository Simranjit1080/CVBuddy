import { Box, ScrollView } from 'native-base'
import React from 'react'
import { SafeAreaView, View } from 'react-native'
import RenderHTML from 'react-native-render-html'
import { useSelector } from 'react-redux'
import ExoportPDF from '../../components/ExoportPDF'
import Header from '../../components/Header'
import { selectEmail } from '../../redux/Auth/authSelectors'
import {
  selectBio,
  selectFullName,
  selectPhone,
} from '../../redux/ResumeDetails/resumeDetailsSelectors'

const Preview = () => {
  const fullName = useSelector(selectFullName)
  const email = useSelector(selectEmail)
  const phone = useSelector(selectPhone)
  const bio = useSelector(selectBio)
  // const university = useSelector(selectUniversity)
  // const fieldOfStudy = useSelector(selectFieldOfStudy)
  // const gradStartDate = useSelector(selectGradStartDate)
  // const gradEndDate = useSelector(selectGradEndDate)
  // const jobTitle = useSelector(selectJobTitle)
  // const employer = useSelector(selectEmployer)
  // const jobStartDate = useSelector(selectJobStartDate)
  // const jobEndDate = useSelector(selectJobEndDate)
  // const city = useSelector(selectCity)
  // const skillName = useSelector(selectSkillName)
  // const proficiency = useSelector(selectProficiency)

  console.log('fullName', fullName)
  console.log('phone', phone)
  console.log('bio', bio)
  console.log('email', email)

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

  const source2 = `<body>
    <div id="header"></div>
    <div class="left"></div>
    <div class="stuff">
      <br><br>
        <div class="header-div">
          <div class="headerDivData">
            <h4></h4>
            <p>Design Lead</p>
            <p>---${fullName}</p>
            <img src="https://picsum.photos/200" alt="profile picture" class='image'/>
            </div>
        </div>
      <br>
      <div class="row">
          <div class="col-md-6 about-me-div">
            <p class="about-me">About me</p>
            <p class="about-me-description">
                I'm a multi-disciplinary Product Designer, specialising in no-code and visual development. Currently Design Lead @ Revolution. Take a look below! 
            </p>
          </div>
          <div class="col-md-6 social-links">
            <p>
                Hello@gmail.com
            </p>
          </div>
      </div>
      <div class="row">
            <div class="col-md-6 about-me-div">
                
            </div>
      </div>
    
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
      <h2 id="name">Emily</h2></div>
    </body>`

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

  const classesStyle = {
    headerDivData: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: 16,
      backgroundColor: 'red',
      width: '100%',
    },
    image: {
      width: 100,
      height: 100,
    },
  }

  return (
    <>
      <Header headerTitle={'Preview'} />
      <View style={{ flex: 1, padding: 20 }}>
        <ExoportPDF htmlData={source2} />
        <ScrollView>
          <Box
            borderWidth={1}
            bg="primary.400"
            width={'100%'}
            rounded="lg"
            height={'100%'}
          >
            <RenderHTML
              tagsStyles={tagsStyles}
              classesStyles={classesStyle}
              source={{ html: source2 }}
            />
            <ExoportPDF htmlData={source2} />
          </Box>
        </ScrollView>
      </View>
    </>
  )
}

export default Preview
