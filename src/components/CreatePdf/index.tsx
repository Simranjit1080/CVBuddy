import React, { Component } from 'react'

import { Alert, Text, TouchableHighlight, View } from 'react-native'

import RNHTMLtoPDF from 'react-native-html-to-pdf'

export default function ExoportPDF() {
  const createPDF = async () => {
    let options = {
      html: '<h1>PDF TEST</h1>',
      fileName: 'test',
      directory: 'home',
    }

    let file = await RNHTMLtoPDF.convert(options)
    Alert.alert(file.filePath)
  }

  return (
    <View>
      <TouchableHighlight onPress={createPDF}>
        <Text>Create PDF</Text>
      </TouchableHighlight>
    </View>
  )
}
