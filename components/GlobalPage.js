import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Trash from './Trash';
import SettingsPage from './SettingsPage';

const Tab = createBottomTabNavigator();

const GlobalPage = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Classtring" component={Trash} />
      <Tab.Screen name="Settings" component={SettingsPage} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default GlobalPage;
