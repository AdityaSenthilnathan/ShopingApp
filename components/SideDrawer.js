import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { HomePage } from './HomePage'
import CustomSideBarMenu  from './CustomSideBarMenu';
import {Icon} from 'react-native-elements'

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : HomePage,
  navigationOptions:{drawerIcon: <Icon name = 'home' type = "font-awesome"></Icon>}
    },

},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })
