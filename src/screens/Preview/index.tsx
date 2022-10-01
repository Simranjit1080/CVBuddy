import { Box, ScrollView } from 'native-base'
import React from 'react'
import { SafeAreaView, View } from 'react-native'
import RenderHTML from 'react-native-render-html'
import { useSelector } from 'react-redux'
import ExoportPDF from '../../components/ExoportPDF'
import Header from '../../components/Header'

import {
  selectBio,
  selectEmail,
  selectFullName,
  selectPhone,
  selectSkillName,
  selectProficiency,
  selectUniversity,
  selectFieldOfStudy,
  selectGradStartDate,
  selectGradEndDate,
  selectJobTitle,
  selectEmployer,
  selectJobStartDate,
  selectJobEndDate,
  selectCity,
} from '../../redux/ResumeDetails/resumeDetailsSelectors'

const Preview = () => {
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

  const source3 = `<body>   
    <div class="container">
          <div class="row infoRow">
          <div class='col'>
            <p>   ${fullName}
   ${email}
   ${phone}
   ${bio}</p>
 </div>
            <img src='https://picsum.photos/200/' class='img' />
          </div>

      <div class="row">
                  <div class="col colLeft ">
                  <h4 class='heading'>Experience</h4>
                          <ul class='expItem'>
                            <p>${jobTitle}</p>
                            <p>${employer}</p>
                            <p>${jobStartDate} - ${jobEndDate}</p>
                            <p>${city}</p>
                          </ul>
                  </div>
          
              <div class="col">

                <h4 class='heading'>Education</h4>
                <ul class='expItem'>

                  <p>${university}</p>

                  <p>${fieldOfStudy}</p>

                  <p>${gradStartDate} - ${gradEndDate}</p>

                  <p>${city}</p>

                </ul>

                
              </div>
      
      </div>



      <div class="row">
      <div class="col colLeft ">
      <h4 class='heading'>Skills</h4>
              <ul class='expItem'>

              <div class='row'>
              
              <p>   ${skillName}</p> 
   
              <p>${proficiency}</p>
            </div>


              </ul>
      </div>



</div>

      </div>
     
     
      </body>
      
      `

  const tagsStyles = {
    h4: {
      lineHeight: 26,
      fontSize: 22,
      letterSpacing: 0,
    },
    h5: {
      fontSize: 10,

      letterSpacing: 0,
    },
    p: {
      paddingLeft: 10,
    },
  }

  const classesStyle = {
    img: {
      width: 80,
      height: 80,
      borderRadius: 50,
      marginLeft: 16,
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      width: '100%',
      backgroundColor: 'white',
    },
    row: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
    },
    col: {
      display: 'flex',
      flexDirection: 'column',
      width: '50%',
    },
    heading: {
      fontSize: 22,
      letterSpacing: 0,
      paddingLeft: 10,
    },

    colLeft: {
      borderRightWidth: 1,
    },
    infoRow: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    expItem: {
      paddingLeft: -20,

      listStyleType: 'none',
    },
  }

  return (
    <>
      <Header headerTitle={'Preview'} />
      <View style={{ flex: 1, padding: 20 }}>
        <ExoportPDF htmlData={source3} />
        <ScrollView>
          <Box
            borderWidth={1}
            bg="white"
            width={'100%'}
            rounded="lg"
            height={'100%'}
            padding={5}
          >
            <RenderHTML
              tagsStyles={tagsStyles}
              classesStyles={classesStyle}
              source={{ html: source3 }}
            />
            {/* <ExoportPDF htmlData={source3} /> */}
          </Box>
        </ScrollView>
      </View>
    </>
  )
}

export default Preview
