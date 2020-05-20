import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import App2 from './App2'
import App3 from './App3'
const Stack=createStackNavigator()
export default class App extends Component {
  render() {
    return (
    
        <NavigationContainer >
            <Stack.Navigator>
              <Stack.Screen name="音乐流行排行榜" component={App2}></Stack.Screen>
              <Stack.Screen name="详情" component={App3}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>

    )
  }
}
