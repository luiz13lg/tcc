import React from 'react'
import {createBottomTabNavigator} from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

const MenuRoutes ={
    Feed: {
        name: 'Feed',
        screen: Feed,
        navigationOptions:{
            title: 'Feed',
            tabBarIcon: ({tintColor}) =>
                <Icon name='home' size={30} color={tintColor} />
        }
    },
    Add: {
        name: 'AddPhoto',
        screen: Feed,
        navigationOptions:{
            title: 'Add Picture',
            tabBarIcon: ({tintColor}) =>
                <Icon name='camera' size={30} color={tintColor} />
        }
    },
    Profile: {
        name: 'Profile',
        screen: Feed,
        navigationOptions:{
            title: 'Profile',
            tabBarIcon: ({tintColor}) =>
                <Icon name='user' size={30} color={tintColor} />
        }
    }
}

const MenuConfig = {
    initialRouteName: 'Feed',
    tabBarOptions:{
        showLabel: false,
    }
}

const MenuNavigator = createBottomTabNavigator(MenuRoutes, MenuConfig)
export default MenuNavigator