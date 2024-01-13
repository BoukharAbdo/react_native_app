// Import necessary components from React and React Native
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// Registration Page Component
const RegistrationScreen = ({ navigation }) => {
  // State to store user input (name, email, password)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle registration logic (can be replaced with actual registration logic)
  const handleRegistration = () => {
    // Perform registration logic here
    // For this example, we'll just log the input values
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);

    // Navigate to another page (you can replace 'Home' with the desired page)
    navigation.navigate('GlobalPage');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registration</Text>

      {/* Input fields for name, email, and password */}
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />

      {/* Button to trigger registration */}
      <Button title="Register" onPress={handleRegistration} />

      {/* Additional UI components can be added as needed */}
    </View>
  );
};

// Styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
});

// Export the RegistrationScreen component
export default RegistrationScreen;
