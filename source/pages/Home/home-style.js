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
        width: '100%'
    }
})