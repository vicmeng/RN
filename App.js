import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack=createStackNavigator()

class Home extends React.Component{

  _goSetting=()=>{
    let params={Screen:"Wifi",params:{uname:"ls"}}
    this.props.navigation.navigate("Setting",params)
  }

  render(){
    return (
      <View>
         <Text> home!</Text>
         <Button onPress={this._goSetting} title="go sitting"></Button>
      </View>


    )
  }
}


class Setting extends React.Component{
  render(){
    return (
    <Text> Setting! {this.props.route.params.uname}</Text>
    )
  }
}

export default class App extends Component {
  render() {
    return (
    
        <NavigationContainer >
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={Home}></Stack.Screen>
              <Stack.Screen name="Setting" component={Setting}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>

    )
  }
}
