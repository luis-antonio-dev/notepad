import React from 'react'
import { View, Text, Button } from 'react-native'

import NoteItem from '../noteItem/note-item'

export default function listNotes() {
    return (
        <View style={{alignItems: 'center'}}>
            <NoteItem 
                title="React Native"
                content="Expo init <nome do projeto>"
                modifiedDate="May 1, 2020"
                creationDate="Mar 27, 2020"
            />
        </View>
    )
}