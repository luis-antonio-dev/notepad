import React from 'react'
import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#f2f2f2',
        marginTop: Constants.statusBarHeight
    },
    header: {
        width: '100%',
        backgroundColor: '#fff',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        textTransform: 'uppercase',
        color: '#262626',
        fontFamily: 'Roboto',
        marginLeft: 15,
        letterSpacing: -0.5,
        fontWeight: 'bold',
        width: '65%'
    },

    icon: {
        color: '#d85a2c',
    }
})