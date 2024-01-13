import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomePage from './components/WelcomePage';
import RegistrationScreen from './components/Login';
import GlobalPage from './components/GlobalPage';

// Instantiate stack
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomePage} />
        <Stack.Screen name="Login" component={RegistrationScreen} />
        <Stack.Screen name="GlobalPage" component={GlobalPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
