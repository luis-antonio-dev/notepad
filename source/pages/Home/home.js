import React from 'react'
import { View, Text, Button } from 'react-native'
import ListNotes from '../listNotes/list-notes'
import styles from './home-style'

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>All notes</Text>
            </View>

            <ListNotes />
        </View>
    )
}