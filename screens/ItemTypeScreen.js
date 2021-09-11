import * as React from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyleSheet ,Alert, TouchableOpacity} from 'react-native';
import db from '../config'

export default class AppHeader extends React.Component {
    render(){
        return(
            <View style = {{marginTop: 61}}>
                <Text>Shoping App Choose Catagory</Text>
           <TouchableOpacity><Text>School Suplies</Text></TouchableOpacity>
           <TouchableOpacity><Text>Books</Text></TouchableOpacity>
           <TouchableOpacity><Text>Handmade</Text></TouchableOpacity>
           <TouchableOpacity><Text>Tools</Text></TouchableOpacity>
           <TouchableOpacity><Text>kithen utensils/bakeware</Text></TouchableOpacity>
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