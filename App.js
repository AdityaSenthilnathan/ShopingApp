
import LoginScreen from "./screens/LoginScreen";
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

