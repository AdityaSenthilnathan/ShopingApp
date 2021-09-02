import * as React from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert} from 'react-native';
import db from '../config'

export default class AppHeader extends React.Component {
    render(){
        return(
            <View style = {{marginTop: 61}}>
            <Header
            leftComponent = {<Icon name='bars' type='font-awesome' color='#696969'  />}
            centerComponent = {<Text style = {{fontSize: 27}}>ShopingApp</Text>}
           
            ></Header>
            </View>
        )
    
    }

}
