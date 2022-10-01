import { NavigationProp, useNavigation } from '@react-navigation/native'
import { Box, VStack, Button, Text, StatusBar, HStack } from 'native-base'
import React from 'react'
import ExoportPDF from '../../components/CreatePdf'
import { RenderHTML } from '../../components/RenderHtml'
import { NavigationStackParams } from '../../navigation/AuthNavigator'
import FillDetails from '../../icons/FillDetails.svg'
import Download from '../../icons/Download.svg'
import PickATemplate from '../../icons/PickTemplate.svg'
import { SafeAreaView, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { setIsLogged } from '../../redux/Auth/authSlice'
import { removeData } from '../../utils/helperFunctions'
const Onboarding = () => {
  const disptach = useDispatch()
  const onboardingData = [
    {
      title: 'Pick a Template',
      description: 'Choose from our hand-crafted resume templates.',
      image: '',
    },
    {
      title: 'Fill in the Details',
      description:
        'Fill in your resume information, and see your resume changes dynamically in real time.',
      image: '',
    },

    {
      title: 'Hit Download',
      description: "You're good to go! Your brand-new resume is ready",
      image: '',
    },
  ]

  interface Props {
    navigation: NavigationProp<NavigationStackParams>
  }

  const navigation = useNavigation<Props['navigation']>()
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
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <VStack space={2} alignItems="center" my={8} px={4}>
        {onboardingData.map((item, index) => (
          <View
            style={{
              width: '100%',
            }}
          >
            <Box key={index} m="6" px={2}>
              {index === 0 && <PickATemplate />}
              {index === 1 && <FillDetails />}
              {index === 2 && <Download />}
              <Text fontSize="xl" color={'black.800'} bold marginTop={2}>
                {item.title}
              </Text>
              <Text fontSize="sm" color={'gray.800'}>
                {item.description}
              </Text>
            </Box>
          </View>
        ))}
        <HStack width="full" justifyContent="space-between">
          <Button
            padding="12px"
            width="48%"
            alignSelf="flex-start"
            _text={{ fontWeight: 'bold', color: 'coolGray.900' }}
            borderColor="coolGray.200"
            backgroundColor="white"
            borderWidth={1}
            onPress={async () => {
              await removeData('token')
              disptach(setIsLogged(false))
            }}
          >
            SignOut
          </Button>
          <Button
            padding="12px"
            width="48%"
            alignSelf="flex-end"
            _text={{ fontWeight: 'bold' }}
            backgroundColor="coolGray.900"
            onPress={() => {
              navigation.navigate('BuildResume')
            }}
          >
            Get Started
          </Button>
        </HStack>

        {/* <RenderHTML
          tagsStyles={tagsStyles}
          source={`<h1 style='text-align:center;'>

          
</h1>`}
        /> */}

        {/* <ExoportPDF /> */}
      </VStack>
    </SafeAreaView>
  )
}

export default Onboarding
