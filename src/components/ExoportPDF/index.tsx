import { Button, HStack } from 'native-base'
import React, { Component } from 'react'

import { Alert, Share, Text, TouchableHighlight, View } from 'react-native'

import RNHTMLtoPDF from 'react-native-html-to-pdf'
import { useDispatch } from 'react-redux'
import { exportPdf } from '../../redux/Auth/authSlice'

interface Props {
  htmlData: string
}

export default function ExoportPDF({ htmlData }: Props) {
  const dispatch = useDispatch()

  const [filePath, setFilePath] = React.useState('')
  const [fileBase64, setFileBase64] = React.useState('')
  const createPDF = async () => {
    let options = {
      html: htmlData,
      fileName: 'test',
      directory: 'home',
      base64: true,
    }

    let file = await RNHTMLtoPDF.convert(options)
    setFilePath(file.filePath)
    setFileBase64(file.base64)

    dispatch(exportPdf(file.base64))
  }
  const sharePdf = async () => {
    Share.share({
      message: 'file',
      url: filePath,
      title: 'test',
    })
  }
  return (
    <HStack width={'full'} justifyContent="space-between" marginY={10}>
      <Button
        padding="12px"
        width="40%"
        alignSelf="flex-end"
        _text={{ fontWeight: 'bold' }}
        backgroundColor="coolGray.900"
        onPress={createPDF}
      >
        <Text style={{ color: 'white' }}>Send Email </Text>
      </Button>
      <Button
        padding="12px"
        width="40%"
        alignSelf="flex-end"
        _text={{ fontWeight: 'bold' }}
        backgroundColor="coolGray.900"
        onPress={sharePdf}
      >
        <Text style={{ color: 'white' }}>Share PDF</Text>
      </Button>
    </HStack>
  )
}
