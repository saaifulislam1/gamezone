import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import {golbalStyles} from '../style/GlobalStyle'

const Home = ({navigation}) => {
   console.log(navigation)
// 
  
  const pressHandler =()=>{
    navigation.navigate('ReviewDetail')

  }
  
  return (
    <View style={golbalStyles.container}>
      <Text style={golbalStyles.titleText}> Sweet home</Text>
      <Button title="go to review"  onPress={pressHandler}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})