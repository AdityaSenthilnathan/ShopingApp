
/*import LoginScreen from "./screens/LoginScreen";
import * as React from 'react'
import config from "./config";
import firebase from 'firebase'
import HomePage from './screens/HomePage'
import { SafeAreaProvider } from "react-native-safe-area-context";
import SellItem from './screens/SellItem'
import {SwitchNavigator, } from 'react-navigation'

export default class App extends React.Component {
  render(){
    return(
      <SafeAreaProvider>
      <SellItem></SellItem>
      </SafeAreaProvider>
    )

  }

 
}

*/import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';


import LoginScreen from './screens/LoginScreen';
import HomePage from './screens/HomePage';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function App() {
  return (
    <SafeAreaProvider>
    <AppContainer/>
    </SafeAreaProvider> 
  );
}


const switchNavigator = createSwitchNavigator({
  LoginScreen:{screen: LoginScreen},
  HomePage:{screen: HomePage}
})

const AppContainer =  createAppContainer(switchNavigator);


