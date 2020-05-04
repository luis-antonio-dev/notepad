import React from 'react'
import { View, Text, Button } from 'react-native'
import styles from './note-item-style'

export default function noteItem(props) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{props.title}</Text>
            </View>

            <View style={styles.containerContent}>
                <Text style={styles.content}>{props.content}</Text>
            </View>

            <View style={styles.containerDate}>
                <Text style={styles.date}>Modified: {props.modifiedDate}</Text>
                <Text style={styles.division}>/</Text>
                <Text style={styles.date}>Created: {props.creationDate}</Text>
            </View>
        </View>
    )
}