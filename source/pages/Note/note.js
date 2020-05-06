import React, { useState } from 'react'
import { View, 
    Text, 
    TextInput, 
    KeyboardAvoidingView, 
    TouchableOpacity 
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import styles from './note-style'

import {
    MaterialCommunityIcons,
    SimpleLineIcons,
    Octicons,
    Ionicons,
    Foundation,
    Feather,
    FontAwesome5 
 } from '@expo/vector-icons'

import firebaseConnection from '../../services/firebase'

export default function Note() {
    const navigation = useNavigation()
    
    const [content, setContent] = useState(String())
    const [title, setTitle] = useState(String())

    function saveNote() {
        firebaseConnection.database().ref('notes').set({
            title,
            content
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.textOptions}>
                    <View style={[styles.option, {backgroundColor: '#e6e6e6'}]}>
                        <MaterialCommunityIcons style={styles.optionIcon} name="keyboard-outline" size={26}/>
                        <Text style={styles.textOption}>Text</Text>
                    </View>
                    <View style={styles.option}>
                        <MaterialCommunityIcons style={styles.optionIcon} name="alphabetical" size={28}/>
                        <Text style={styles.textOption}>Pen</Text>
                    </View>
                    <View style={styles.option}>
                        <MaterialCommunityIcons style={styles.optionIcon} name="palette" size={28}/>
                        <Text style={styles.textOption}>Brush</Text>
                    </View>
                </View>

                <View style={styles.actionButtons}>
                    <TouchableOpacity style={styles.button} onPress={saveNote}>
                        <Text style={styles.textButton}>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <SimpleLineIcons style={styles.iconButton} name="paper-clip" size={16}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Octicons style={styles.iconButton} name="kebab-vertical" size={16}/>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.labelInput}>
                <TextInput 
                    style={styles.title}
                    placeholder="Title"
                    onChangeText={text => setTitle(text)}
                />

                <KeyboardAvoidingView behavior='padding'>
                    <TextInput 
                        placeholder="Notes" 
                        style={styles.content} 
                        multiline={true}
                        onChangeText={text => setContent(text)}
                    />
                </KeyboardAvoidingView>
            </View>

            <KeyboardAvoidingView style={[styles.formatOptions, {position: 'absolute', bottom: 0}]} behavior='height'>
                <TouchableOpacity>
                    <Ionicons style={[{marginLeft: -5}]} name="ios-checkbox-outline" size={25}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Foundation style={styles.formatIcon} name="list-number" size={24}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Foundation style={styles.formatIcon} name="list-bullet" size={24}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialCommunityIcons style={styles.formatIcon} name="format-bold" size={24}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Feather style={styles.formatIcon} name="italic" size={20}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome5 style={styles.formatIcon} name="underline" size={16}/>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    )
}