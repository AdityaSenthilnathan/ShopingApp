import * as React from 'react'
import { View, TouchableOpacity, Text, TextInput, StyleSheet, Modal, ScrollView, KeyboardAvoidingView, Alert } from 'react-native'
import db from '../config'
import firebase from 'firebase'
import AppHeader from '../components/Header'
export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          

        }

    }
    
    render(){
        return(
            <View>
                <AppHeader></AppHeader> 
                
    
              
                <TextInput placeholder = 'Search Items'></TextInput>

                <TouchableOpacity><Text>New</Text></TouchableOpacity>
                

            </View>
        )
    }
   

}
 const styles = StyleSheet.create({
    model:{
        marginTop: 100,
        marginLeft: 100,
        backgroundColor: 'white',
        borderWidth: 4
    },
    Cart: {
        marginTop: -15,
        marginLeft: 1200,

    }
})