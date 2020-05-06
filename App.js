import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const AppStack = createStackNavigator();

import Home from './source/pages/Home/home'
import Note from './source/pages/Note/note'

export default function App() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name="Home" component={Home}/>
                <AppStack.Screen name="Note" component={Note}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}
