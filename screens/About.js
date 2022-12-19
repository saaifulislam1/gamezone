import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { golbalStyles  } from '../style/GlobalStyle'

const About = () => {
  return (
    <View style={golbalStyles.container}>
      <Text style={golbalStyles.titleText}>About Screen</Text>
    </View>
  )
}

export default About

const styles = StyleSheet.create({

})