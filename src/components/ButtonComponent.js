import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../utils';

const ButtonComponent = (props) => {
    const { title, backgroundColor, textColor,onPress } = props;
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, backgroundColor]}>
            <Text style={[styles.text, textColor]}>{title}</Text>
        </TouchableOpacity>
    )
}
export default ButtonComponent;
const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 40,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        alignSelf: 'center',
        borderColor: COLORS.black
    },
    text: {

        fontSize: 14,
        fontWeight: '600',
        lineHeight: 18,

    }
})