import { Button } from 'native-base'
import React, { Component } from 'react'

import { Alert, Text, TouchableHighlight, View } from 'react-native'

import RNHTMLtoPDF from 'react-native-html-to-pdf'

interface Props {
  htmlData: string
}

export default function ExoportPDF({ htmlData }: Props) {
  const createPDF = async () => {
    let options = {
      html: htmlData,
      fileName: 'test',
      directory: 'home',
      base64: true,
    }

    let file = await RNHTMLtoPDF.convert(options)
    console.log('file :>> ', file)
    // Alert.alert(file.filePath)
    Alert.alert(`${file.filePath}`)
  }

  return (
    <View>
      <Button
        padding="12px"
        width="48%"
        alignSelf="flex-end"
        _text={{ fontWeight: 'bold' }}
        backgroundColor="coolGray.900"
        onPress={createPDF}
      >
        <Text style={{ color: 'white' }}>Export PDF</Text>
      </Button>
    </View>
  )
}
