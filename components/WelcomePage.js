// WelcomePage.js

import React from 'react';
import { View, Text, StyleSheet ,Pressable} from 'react-native';

const WelcomePage = ({ navigation }) => {
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue dans le Trash Clustering</Text>
      <Text style={styles.subtitle}>Votre déchet est identifié comme :</Text>
      <Pressable onPress={()=>navigation.navigate("Login")}>
      <Text style={styles.buttonText}>Login</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 5,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green', // Change the color based on your design
  },
});

export default WelcomePage;
