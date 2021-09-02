import * as React from 'react'
import { View, TouchableOpacity, Text, TextInput, StyleSheet, Modal, ScrollView, KeyboardAvoidingView, Alert } from 'react-native'
import db from '../config'
import firebase from 'firebase'
import AppHeader from '../components/Header'
export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Email: '',
            Password: '',
            ModelIsVisible: false,
            FirstName: '',
            LastName: '',
            Contact: '',
            Age: '',
            Address: '',
            ConfirmPassword: '',

        }

    }
    showModel = () => {
        return (
            <Modal visible={this.state.ModelIsVisible} transparent={true} animationtype='fade'  >
                <View style = {styles.model}><ScrollView><KeyboardAvoidingView>
                    <Text>Sign Up Form.</Text>

                    <TextInput onChangeText={(text) => { this.setState({ FirstName: text }) }} value={this.state.FirstName} placeholder="First Name" ></TextInput>
                    <TextInput value={this.state.LastName} placeholder="Last Name" onChangeText={(text) => { this.setState({ LastName: text }) }}></TextInput>
                    <TextInput keyboardType='numeric' value={this.state.Contact} placeholder="Contact Number" onChangeText={(text) => { this.setState({ Contact: text }) }}></TextInput>
                    <TextInput value={this.state.Age} placeholder="Age" onChangeText={(text) => { this.setState({ Age: text }) }}></TextInput>
                    <TextInput multiline={true} value={this.state.Address} placeholder="Address" onChangeText={(text) => { this.setState({ Address: text }) }}></TextInput>
                    <TextInput value={this.state.Email} placeholder="Email" onChangeText={(text) => { this.setState({ Email: text }) }}></TextInput>
                    <TextInput secureTextEntry={true} value={this.state.Password} placeholder="Password" onChangeText={(text) => { this.setState({ Password: text }) }}></TextInput>
                    <TextInput secureTextEntry={true} value={this.state.ConfirmPassword} placeholder="Confirm Password" onChangeText={(text) => { this.setState({ ConfirmPassword: text }) }}></TextInput>
                    <TouchableOpacity onPress={() => {this.SignUp(this.state.Email, this.state.Password, this.state.ConfirmPassword)}} ><Text>Register</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.setState({ ModelIsVisible: false }) }}><Text>Cancel</Text></TouchableOpacity>

                </KeyboardAvoidingView></ScrollView></View>
            </Modal>


        )
    }   
    login = async (email, password) => {
        alert('navigating')
        if (email && password) {
            try {
                const response = await firebase.auth().signInWithEmailAndPassword(email, password)

                if (response) {
                   
                    this.props.navigation.navigate('BuyScreen')
                }
            }
            catch (error) {
                alert(error.code);
                switch (error.code) {
                    case "auth/user-not-found":
                        alert("User does not exist.");
                        break;
                    case "auth/invailid-email":
                        alert("Incorrect email or password")
                        break;

                }
            }
        }

    }
    render() {
        return (

            <View>
              <AppHeader></AppHeader>
                {this.showModel()}
                <Text>ShopingApp</Text>
        
                <Text>Email</Text>
                <TextInput onChangeText={(text) => {() => this.setState({ Email: text }) }} placeholder='Enter your email here' keyboardType={'email-address'}></TextInput>
                <Text>Password</Text>
                <TextInput onChangeText={(text) => {() => this.setState({ Password: text }) }} placeholder='Enter your password here' secureTextEntry={true}></TextInput>

                <TouchableOpacity onPress = {() => {this.login(this.state.Email, this.state.Password) }}><Text>Login</Text></TouchableOpacity>
                <View>
                    <TouchableOpacity onPress = {() => {this.setState({ ModelIsVisible: true })}}><Text>Sign Up</Text></TouchableOpacity>
                </View>
            </View>
        )
    }

    SignUp = (Email, Password, ConfirmPassword) => {
        if (Password != ConfirmPassword) {

            alert("Password does not match")
        }
        else {
            firebase.auth().createUserWithEmailAndPassword(Email, Password)
                .then((response) => {

                    db.collection('User').add({
                        FirstName: this.state.FirstName,
                        LastName: this.state.LastName,
                        Contact: this.state.Contact,
                        Age: this.state.Age,
                        Address: this.state.Address,
                    })
                    //return( Alert.alert('User was added succsesfuly!'))\
                    return Alert.alert('User Added Successfully', '', [{ text: 'OK', onPress: () => this.setState({ ModelIsVisible: false }) },]);
                })

                .catch(() => {
                    alert("not added succsesfuly ");

                })
        }
    }


}
 const styles = StyleSheet.create({
    model:{
        marginTop: 100,
        marginLeft: 100,
        backgroundColor: 'white',
        borderWidth: 4
    }
})