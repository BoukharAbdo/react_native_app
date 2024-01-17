import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './Home';
import Trash from './Trash';
import SettingsPage from './SettingsPage';

const Tab = createBottomTabNavigator();

const GlobalPage = () => (
  <NavigationContainer independent={true}>
    <Tab.Navigator>
    <Tab.Screen 
  name="Home" 
  component={Home} 
  options={{
    tabBarIcon: ({ color, size }) => (
      <Icon name="rocket" type="font-awesome" size={size} color={color} />
    ),
  }}
/>

      <Tab.Screen name="Classtring" component={Trash} />
      <Tab.Screen name="Settings" component={SettingsPage} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default GlobalPage;
