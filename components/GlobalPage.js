import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome
import EvilIcon from 'react-native-vector-icons/EvilIcons'; // Import EvilIcons
import Home from "./Home";
import Trash from "./Trash";
import SettingsPage from "./SettingsPage";

const Tab = createBottomTabNavigator();

const GlobalPage = () => (
    <Tab.Navigator >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" type="font-awesome" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen name="Classtring" component={Trash} 
      options={{
          tabBarIcon: ({ color, size }) => (
            <EvilIcon name="trash" type="font-awesome" size={size} color={color} />
          ),
        }} />
      <Tab.Screen
        name="Settings"
        component={SettingsPage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="gear"
              type="font-awesome"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
);

export default GlobalPage;
