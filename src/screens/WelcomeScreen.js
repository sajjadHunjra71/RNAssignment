import { StyleSheet, Text, View, Image,useColorScheme } from 'react-native'
import React from 'react'
import { images } from '../assets'
import { COLORS } from '../utils'
import { fontFamilies } from '../assets/fonts'
import ButtonComponent from '../components/ButtonComponent'
export default function WelcomeScreen({navigation}) {
    const theme = useColorScheme();
    const isDarkTheme = theme === 'dark';
    return (
        <View style={[styles.container,{ backgroundColor:isDarkTheme?COLORS.black:COLORS.white}]}>
            <View  style={styles.logoBox}>
                <Image source={images.logo} style={styles.logo} />
                <Text style={styles.headText}>Welcome to  LempMe</Text>
                <Text style={styles.subText}>Contacts - simple & secure</Text>
            </View>
            
        <View style={styles.BtnBox}>
            <ButtonComponent onPress={()=>navigation.navigate('LoginScreen')}  title={"Create new account"}  backgroundColor={{backgroundColor: COLORS.blue}} textColor={{color:COLORS.white}} />
            <ButtonComponent title={"Login"}  backgroundColor={{backgroundColor: COLORS.white,marginTop:20}} textColor={{color:COLORS.black}} />
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
        justifyContent: 'center',
    },
    logoBox: {
        width: 240,
        height: 218,
        alignSelf: 'center',
       
    },
    logo: {
        width: 128,
        height: 128,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    headText: {
        fontSize: 24,
        fontWeight: '700',
        lineHeight: 26,
        alignSelf: 'center',
        marginTop: 10,
        // fontFamily: fontFamilies.Archivo

    },
    subText: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 24,
        color: COLORS.gray,
        alignSelf: 'center',
        marginTop: 7,
    },
    BtnBox:{
        position:'absolute',
        bottom:0,
        width:'100%',
       alignSelf:'center',
       marginBottom:50,
       justifyContent: 'space-between',
    }
})