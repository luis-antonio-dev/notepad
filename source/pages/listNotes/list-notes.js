import React from 'react'
import { View, Button } from 'react-native'

import styles from './list-notes-style'
import NoteItem from '../NoteItem/note-item'
import { FlatList } from 'react-native-gesture-handler'

export default function listNotes() {
    const data = [
        {
            id: "1",
            title: "React Native",
            content: "Expo init <nome do projeto>",
            modifiedDate: "May 1, 2020",
            creationDate: "Mar 27, 2020"
        },
        {
            id: "2",
            title: "Minha anotação",
            content: "Conteúdo da minha anotação",
            modifiedDate: "May 1, 2020",
            creationDate: "Mar 27, 2020"
        },
        {
            id: "3",
            title: "Terceira anotação",
            content: "Barulho",
            modifiedDate: "May 1, 2020",
            creationDate: "Mar 27, 2020"
        },
        {
            id: "4",
            title: "Terceira anotação",
            content: "Barulho",
            modifiedDate: "May 1, 2020",
            creationDate: "Mar 27, 2020"
        },
        {
            id: "5",
            title: "Terceira anotação",
            content: "Barulho",
            modifiedDate: "May 1, 2020",
            creationDate: "Mar 27, 2020"
        },
        {
            id: "6",
            title: "Terceira anotação",
            content: "Barulho",
            modifiedDate: "May 1, 2020",
            creationDate: "Mar 27, 2020"
        },
        {
            id: "7",
            title: "Terceira anotação",
            content: "Barulho",
            modifiedDate: "May 1, 2020",
            creationDate: "Mar 27, 2020"
        },
        {
            id: "8",
            title: "Terceira anotação",
            content: "Barulho",
            modifiedDate: "May 1, 2020",
            creationDate: "Mar 27, 2020"
        },
        {
            id: "9",
            title: "Terceira anotação",
            content: "Barulho",
            modifiedDate: "May 1, 2020",
            creationDate: "Mar 27, 2020"
        },
        {
            id: "10",
            title: "Terceira anotação",
            content: "Barulho",
            modifiedDate: "May 1, 2020",
            creationDate: "Mar 27, 2020"
        },
    ]
    return (
        <View style={styles.container}>
            <FlatList
                style={{width: '100%'}}
                data={data}
                renderItem={({item}) => (
                    <View style={{width: '100%', alignItems: 'center'}}>
                        <NoteItem 
                            title={item.title}
                            content={item.content}
                            modifiedDate={item.modifiedDate}
                            creationDate={item.creationDate}
                        />
                    </View>
                )}
                keyExtractor={item => item.id}
            />
        </View>
    )
}