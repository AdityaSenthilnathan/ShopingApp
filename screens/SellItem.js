import * as React from 'react';
import { Header, Icon, Badge } from 'react-native-elements';
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import db from '../config'
import AppHeader from '../components/Header';
export default class SellItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ItemType: "School Supplies",
            ItemName: '',
            Cost: '',
            Type:'',
            Quantity: '',
            Description: '',
        }
    }

    PostItem = () => {
        db.collection('Products').add({
            ItemName: this.state.ItemName,
            Cost :this.state.Cost,
            Type: this.state.Type,
            Quantity: this.state.Quantity,
            Description: this.state.Description
        })
      //  this.props.navigation.navigate('HomePage')
    }

    render() {
        return (
            <View style={{ marginTop: 61 }}>
                <AppHeader></AppHeader>
                <Text>{this.state.ItemType}</Text>


                <View>
                    <Text>Item:</Text>
                    <TextInput value={this.state.ItemName} onChangeText={(text) => { this.setState({ ItemName: text }) }}></TextInput>
                </View>

                <View>
                    <Text>Cost:</Text>
                    <TextInput value={this.state.Cost} onChangeText={(text) => { this.setState({ Cost: text }) }}></TextInput>
                </View>
  

                <View>
                  <Text>Type:</Text>
                  <TextInput value = {this.state.Type} onChangeText = {(text)=>{this.setState({Type: text})}}></TextInput>
                    </View>
                <View>

                    <Text>Quantity:</Text>
                    <TextInput value={this.state.Quantity} onChangeText={(text) => { this.setState({ Quantity: text }) }}></TextInput>
                </View>

                <View>
                    <Text>Description:</Text>
                    <TextInput value={this.state.Description} onChangeText={(text) => { this.setState({ Description: text }) }}></TextInput>
                </View>

                <TouchableOpacity onPress = {() => {this.PostItem()}}><Text>Post</Text></TouchableOpacity>
            </View>
        )

    }

}

const styles = StyleSheet.create({
    model: {
        marginTop: 100,
        marginLeft: 100,
        backgroundColor: 'white',
        borderWidth: 4
    },
    Inputs: {


    }
})