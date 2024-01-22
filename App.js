import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomePage from './components/WelcomePage';
import RegistrationScreen from './components/Login';
import InscriptionScreenForm from './components/InscriptionScreen';
import Home from './components/Home';
import SettingsPage from './components/SettingsPage';
import Trash from './components/Trash';
import GlobalPage from './components/GlobalPage';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Stack Navigator for screens like Welcome, Login, Inscription, etc.
const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Welcome" component={WelcomePage} />
    <Stack.Screen name="Login" component={RegistrationScreen} />
    <Stack.Screen name="Inscription" component={InscriptionScreenForm} />
  </Stack.Navigator>
);

// Tab Navigator for screens like Home, Settings, Trash, etc.
const MainTab = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Classtring" component={Trash} />
    <Tab.Screen name="Settings" component={SettingsPage} />
  </Tab.Navigator>
);

// Main App Navigator
const App = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Auth" component={AuthStack} />
      <Stack.Screen name="Main" component={MainTab} />
      <Stack.Screen name="GlobalPage" component={GlobalPage} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
