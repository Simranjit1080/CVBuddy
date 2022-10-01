import { NavigationProp, useNavigation } from '@react-navigation/native'
import { Box, VStack, Button, Text, StatusBar, HStack } from 'native-base'
import React from 'react'
import ExoportPDF from '../../components/ExoportPDF'
import { RenderHTML } from '../../components/RenderHtml'
import { NavigationStackParams } from '../../navigation/AuthNavigator'
import FillDetails from '../../icons/FillDetails.svg'
import Download from '../../icons/Download.svg'
import PickATemplate from '../../icons/PickTemplate.svg'
import { SafeAreaView, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { setIsLogged, setToken } from '../../redux/Auth/authSlice'
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

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <VStack space={2} alignItems="center" my={8} px={4}>
        {onboardingData.map((item, index) => (
          <View
            style={{
              width: '100%',
            }}
            key={item.title}
          >
            <Box m="6" px={2}>
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
            onPress={() => {
              disptach(setToken(''))
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

        {/* <ExoportPDF /> */}
      </VStack>
    </SafeAreaView>
  )
}

export default Onboarding
