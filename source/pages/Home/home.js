import React from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
import ListNotes from '../ListNotes/list-notes'
import styles from './home-style'

import { 
    SimpleLineIcons,
    EvilIcons,
    Octicons
} from '@expo/vector-icons'

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <SimpleLineIcons style={[styles.icon, {marginLeft: 10,}]} size={20} name="menu"/>
                </TouchableOpacity>
                <Text style={styles.title}>All notes</Text>
                <TouchableOpacity>
                    <EvilIcons style={styles.icon} name="search" size={25}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Octicons style={[styles.icon, {marginLeft: 20}]} name="kebab-vertical" size={20}/>
                </TouchableOpacity>
            </View>

            <ListNotes />
        </View>
    )
}