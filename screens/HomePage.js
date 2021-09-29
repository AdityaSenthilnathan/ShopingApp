import * as React from 'react'
import { View, TouchableOpacity, Text, TextInput, StyleSheet, Modal, ScrollView, KeyboardAvoidingView, Alert } from 'react-native'
import db from '../config'
import firebase from 'firebase/app';
import 'firebase/firestore';
import AppHeader from '../components/Header'
    

import Select from 'react-dropdown-select'
export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          searchval: '',
          Typeval: '',
            allItems: []

        }

    }
    getData = (searchval, type)=>{
        var Items =[]
        db.collection("Products").where("ItemName","==", searchval).get()
        .then((snapshot)=> {
           
            snapshot.docs.map(doc => {
                console.log(doc.data())
                var data = doc.data()
                Items.push(data)
            })
        })
        this.setState({allItems: Items})
      
       console.log(this.state.allItems)


        

    }
    render(){
        var options = [{Label: 'New'}, {Label:'Used'}]
        return(
            <View>
                <AppHeader></AppHeader> 

    
              
                <TextInput placeholder = 'Search Items' value = {this.state.searchval} onChangeText = {(text)=>{this.setState({searchval : text})}}></TextInput>
{console.log(this.state.Typeval)}
                <TouchableOpacity onPress = {() => {this.getData(this.state.searchval, this.state.Typeval)}}><Text>Search</Text></TouchableOpacity>
           
               { this.state.allItems?(<Text>{this.state.allItems[0]}</Text>):(<Text>Hello</Text>)}
                
                

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