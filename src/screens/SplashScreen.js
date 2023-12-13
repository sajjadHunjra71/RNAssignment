import { StyleSheet, Text, View ,Image} from 'react-native'
import React,{useEffect} from 'react'
import { images } from '../assets'

export default function SplashScreen({navigation}) {

    useEffect(() => {
      setTimeout(() => {
        navigation.navigate('WelcomeScreen')
      }, 2000);
    }, [])
    


  return (
    <View style={styles.container}>
      <Image source={images.logo} style={styles.imageStyle}  />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        justifyContent: 'center',
        alignItems:'center'
    },
    imageStyle:{
        width:148,
        height:151,
        resizeMode:'contain'
    }
})