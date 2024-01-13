import React, { useState } from 'react';
import { View, Text, TextInput, Image, Button } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import ImageResizer from 'react-native-image-resizer';

const Trash = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [resultText, setResultText] = useState('');
  const [textInput, setTextInput] = useState('');

  const selectImage = () => {
    ImagePicker.showImagePicker(
      { title: 'Select Image', mediaType: 'photo' },
      (response) => {
        if (!response.didCancel && !response.error) {
          resizeImage(response.uri);
        }
      }
    );
  };

  const resizeImage = (uri) => {
    ImageResizer.createResizedImage(uri, 300, 300, 'JPEG', 80)
      .then((resizedImageUri) => {
        setSelectedImage({ uri: resizedImageUri });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleSubmission = () => {
    // Perform any logic with the selected image and text input
    setResultText(`Submitted Text: ${textInput}`);
  };

  return (
    <View>
      <Button title="Select Image" onPress={selectImage} />
      {selectedImage && <Image source={selectedImage} style={{ width: 200, height: 200 }} />}
      
      <TextInput
        placeholder="Enter text..."
        value={textInput}
        onChangeText={(text) => setTextInput(text)}
      />
      
      <Button title="Submit" onPress={handleSubmission} />
      
      {resultText !== '' && <Text>{resultText}</Text>}
    </View>
  );
};

export default Trash;
