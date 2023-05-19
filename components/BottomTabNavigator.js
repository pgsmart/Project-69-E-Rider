import React, { Component} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {StyleSheet,View,Image,Text} from "react-native" ;

import RideScreen from "../screens/Ride";
import RideHistoryScreen from "../screens/RideHistory";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Ride" component={RideScreen} options={{
            tabBarIcon: ({focused}) => (
              <View>
                <Image
                source={require('../assets/bicycleIcon.png')}
                resizeMode="contain"
                style={{
                  width: 35,
                  height: 35,
                  tintColor: focused ? '#4287f5' : '#748c94',
                }}
                />
              </View>
            ),
            }}/>
            <Tab.Screen name="Ride History" component={RideHistoryScreen} options={{
            tabBarIcon: ({focused}) => (
              <View>
                <Image
                source={require('../assets/historyIcon.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#4287f5' : '#748c94',
                }}
                />
              </View>
            ),
            }}/>
           
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
