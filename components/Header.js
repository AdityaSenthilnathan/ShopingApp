import * as React from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyleSheet ,Alert, TouchableOpacity} from 'react-native';
import db from '../config'

export default class AppHeader extends React.Component {
    render(){
        return(
            <View style = {{marginTop: 61}}>
            <Header
            leftComponent = {<Icon name='bars' type='font-awesome' color='#696969'  onPress={() => this.props.navigation.toggleDrawer()}/>}  
            centerComponent = {<Text style = {{fontSize: 27}}>ShopingApp</Text>}
           rightComponent = { <Icon name='shopping-cart' type='font-awesome' color='#696969'  />}
            ></Header>
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