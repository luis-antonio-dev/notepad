import React, { useState, useEffect } from 'react'
import { View, Button, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

import styles from './list-notes-style'
import NoteItem from '../NoteItem/note-item'

import { useNavigation } from '@react-navigation/native'
import firebase from '../../services/firebase'

export default function listNotes() {
    const navigation = useNavigation()
    const [data, setData] = useState([])
    
    async function getNotes() {
        var notes = []

        await firebase.database().ref('notes').once('value', (data) => {
            data = data.toJSON()
            
            for(var key in data) {
                const id = key
                const title = data[key]['title']
                const content = data[key]['content']

                notes.push({
                    id,
                    title,
                    content
                })
            }

           
        }).then(setData(notes))
    }

    function navigateToNote(id) {
        navigation.navigate('Note', { id })
    }

    useEffect(() => {
        getNotes()
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                style={{width: '100%'}}
                data={data}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigateToNote(item.id)} style={{width: '100%', alignItems: 'center'}}>
                        <NoteItem
                            id={item.id}
                            title={item.title}
                            content={item.content}
                            modifiedDate={"May 1, 2020"}
                            creationDate={"Mar 27, 2020"}
                        />
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
                />
        </View>
    )
}