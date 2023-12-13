import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity,useColorScheme } from 'react-native'
import React from 'react'
import { COLORS } from '../utils'
import { images } from '../assets'
import ButtonComponent from '../components/ButtonComponent'
import ButtonWithIcon from '../components/ButtonWithIcon'

export default function LoginScreen({ navigation }) {
    const theme = useColorScheme();
    const isDarkTheme = theme === 'dark';
    return (
        <View  style={[styles.container,{ backgroundColor:isDarkTheme?COLORS.black:COLORS.white}]}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backView}>
                <Image source={images.back} style={styles.backIcon} />
                <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>
            <View style={styles.inputBox}>
                <Text style={styles.emailtxt}>Email Address</Text>
                <TextInput
                    placeholder='Enter your email'
                    keyboardType='email-address'
                    style={{ borderBottomWidth: 1, borderBottomColor: COLORS.gray, marginTop: 7 }}
                />

            </View>
            <View style={{ marginTop: '10%' }}>
                <ButtonComponent title={"continue"} onPress={()=>navigation.navigate('ScrollAbleApiData')}  backgroundColor={{ backgroundColor: COLORS.blue }} textColor={{ color: COLORS.white }} />
            </View>
            <View style={styles.orView}>
                <View style={styles.line} />
                <Text>or</Text>
                <View style={styles.line} />

            </View>

            <ButtonWithIcon title={"Signup with Phone"} icon={images.phone} backgroundColor={{ backgroundColor: COLORS.white, marginTop: '14%' }} textColor={{ color: COLORS.black }} iconStyle={{ width: 14, height: 14, resizeMode: 'contain' }} />
            <ButtonWithIcon title={"Signup with Apple ID"} icon={images.apple} backgroundColor={{ backgroundColor: COLORS.white, marginTop: '5%' }} textColor={{ color: COLORS.black }} iconStyle={{ width: 16, height: 18, resizeMode: 'contain' }} />
            <ButtonWithIcon title={"Signup with Google"} icon={images.google} backgroundColor={{ backgroundColor: COLORS.white, marginTop: '5%' }} textColor={{ color: COLORS.black }} iconStyle={{ width: 16, height: 21, resizeMode: 'contain' }} />
            <ButtonWithIcon title={"Signup with Facebook"} icon={images.facebook} backgroundColor={{ backgroundColor: COLORS.white, marginTop: '5%' }} textColor={{ color: COLORS.black }} iconStyle={{ width: 18, height: 18, resizeMode: 'contain' }} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
    },
    backView: {
        flexDirection: 'row',
        marginLeft: 20,
        marginTop: '17%'

    },
    backIcon: {
        width: 12,
        height: 12,
        resizeMode: 'contain'
    },
    backText: {
        marginLeft: 13,
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 17,

    },
    inputBox: {
        marginTop: '10%',

        alignSelf: 'center',
        width: '90%',
        height: 52
    },
    emailtxt: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 14,
        color: COLORS.gray
    },
    line: {
        borderBottomWidth: 1,
        borderBlockColor: COLORS.black,
        width: 141,


    },
    orView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 70
    }
})