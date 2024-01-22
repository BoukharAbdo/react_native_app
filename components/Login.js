import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import axios from 'axios';
const Stack = createStackNavigator();

// Registration Page Component
const RegistrationScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistration = () => {
    const requestData = {
      username: email, // Change "login" to "username" to match Django's User model
      password: password,
    };
    
  
    axios.get('https://192.168.1.25:8000/LoginMobile/',
    {
      headers: {
        Accept: 'application/json',
        'content-Type': 'application/json',
      },
    },)
      .then((response) => {
        // Gérez les données de réponse (probablement un token JWT) ici
        console.log(response.data);
      })
      .catch((error) => {
        // Gérez l'erreur ici
        console.error(error);
      });
  };
  
  return (
    <View className="m-5">
      <Text className="text-center text-slate-700 text-2xl">Registration</Text>
      <Text className="text-base text-slate-700">Email</Text>
      <TextInput
        className="border-2 border-teal-300 p-1 rounded"
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      <Text className="text-base text-slate-700">Password</Text>
      <TextInput
        className="border-2 border-teal-300 p-1 rounded mb-3"
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />

      <Pressable
        style={({ pressed }) => [
          { backgroundColor: pressed ? "rgb(210, 230, 255)" : "white" },
        ]}
        onPress={handleRegistration}
      >
        <Text className="text-center rounded pt-1.5 h-10 text-white bg-teal-500">
          Register
        </Text>
      </Pressable>

      <Text className="mt-3 text-center">
        Si vous n'êtes pas encore inscrit,
        <Pressable onPress={() => navigation.navigate("Inscription")}>
          <Text className="text-cyan-500">
            {" "}
            allez à la page d'inscription.{" "}
          </Text>
        </Pressable>
      </Text>
    </View>
  );
};

export default RegistrationScreen;
