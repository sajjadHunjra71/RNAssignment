import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { COLORS } from '../utils';

const ButtonWithIcon = (props) => {
    const { title, backgroundColor, textColor, onPress,icon,iconStyle } = props;
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, backgroundColor]}>
            <View style={{ width: '10%',height:'100%' ,alignItems: 'center',justifyContent: 'center', }} >
                <Image source={icon} style={iconStyle} />
            </View>
            <View style={{ width: '80%', justifyContent: 'center', alignItems: 'center', }}>
                <Text style={[styles.text, textColor]}>{title}</Text>
            </View>
            <View style={{ width: '10%', backgroundColor: 'red' }} />

        </TouchableOpacity>
    )
}
export default ButtonWithIcon;
const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 40,
        flexDirection: 'row',
        borderRadius: 100,
        alignItems: 'center',
        borderWidth: 1,
        alignSelf: 'center',
        borderColor: COLORS.black,
        paddingHorizontal:10
    },
    text: {

        fontSize: 14,
        fontWeight: '600',
        lineHeight: 18,

    },
   
})