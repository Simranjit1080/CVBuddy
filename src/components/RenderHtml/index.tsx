import React from 'react'
import RenderHtml, {
  defaultSystemFonts,
  MixedStyleDeclaration,
} from 'react-native-render-html'
import { useWindowDimensions } from 'react-native'

type propType = {
  source: string
  tagsStyles?: Readonly<Record<string, MixedStyleDeclaration>>
}

const RenderHTMLData = (props: propType) => {
  const { width } = useWindowDimensions()
  const source = {
    html: props.source,
  }
  let systemFonts = [
    ...defaultSystemFonts,
    // FONTS.barlowMedium,
    // FONTS.barlowRegular,
    // FONTS.barlowSemiBold,
    // FONTS.barlowBold,
    // FONTS.barlowLight,
    // FONTS.F37BobbyRegular,
    // FONTS.F37BobbyBold,
    // FONTS.F37BobbyLight,
  ]

  return (
    <RenderHtml
      contentWidth={width}
      source={source}
      tagsStyles={props.tagsStyles}
      systemFonts={systemFonts}
    />
  )
}

export const RenderHTML = React.memo(RenderHTMLData)
