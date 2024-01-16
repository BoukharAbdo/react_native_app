import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, Button, StyleSheet, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function Trash() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const pickImage = async () => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
      if (status !== "granted") {
        throw new Error("Camera roll permission denied");
      }
  
      const result = await ImagePicker.launchImageLibraryAsync();
  
      if (result.cancelled) {
        // Handle if the user cancels the image picker
        console.log("Image picker cancelled");
      } else {
        // Update the file state with the selected image URI
        setFile(result.assets[0].uri);
        // Clear any previous errors
        setError(null);
      }
    } catch (error) {
      // Handle errors related to image picking
      console.error("Error picking image:", error.message);
      setError("Error picking image");
    }
  };
  

  const handleSubmit = () => {
    // Log the image object to the terminal
    console.log("Image Object:", { uri: file });
    // You can perform further actions with the image object here
  };

  useEffect(() => {
    // You can perform any other actions when 'file' changes here
  }, [file]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Image:</Text>

      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.buttonText}>Choose Image</Text>
      </TouchableOpacity>

      {file ? (
        <View style={styles.imageContainer}>
          <Image source={{ uri: file }} style={styles.image} />
        </View>
      ) : (
        <Text style={styles.errorText}>{error}</Text>
      )}

      {/* Submit button */}
      <Button title="Submit" onPress={handleSubmit} disabled={!file} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  header: {
    fontSize: 20,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  imageContainer: {
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 8,
  },
  errorText: {
    color: "red",
    marginTop: 16,
  },
});
