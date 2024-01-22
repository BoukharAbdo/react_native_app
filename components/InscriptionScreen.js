import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Image,Pressable } from 'react-native';

const InscriptionScreenForm = ({navigation}) => {
  const [formData, setFormData] = useState({
    photo: '',
    nom: '',
    prenom: '',
    date_naissance: '',
    ville: '',
    pays: '',
    email: '',
    password: '',
    confirm_password: '',
  });

  const [selectedImage, setSelectedImage] = useState(null);

  const handleRegistration = () => {
    // Ajoutez ici la logique pour traiter les données d'inscription
    console.log('Formulaire soumis avec les données:', formData);
  };

  const handleImageSelection = () => {
    // Mettez en œuvre la logique de sélection d'image ici
    // Par exemple, utilisez une bibliothèque ou une API pour choisir une image depuis la galerie
    // Puis, mettez à jour l'état selectedImage avec l'URL de l'image sélectionnée
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="p-2">
        <View className="grid justify-center items-center">
      {selectedImage ? (
        <Image className="rounded-full w-30 h-30" source={{ uri: selectedImage }}  />
      ) : (
        <Image className="rounded-full w-30 h-30"
         source={require('../assets/user.png')}
          
        />
      )}
      </View>
      <View className="grid justify-center items-center ">
      <Text className="text-cyan-700" onPress={handleImageSelection}>Sélectionner une image</Text> 
      </View>
      
      <TextInput
        className="border-2 border-teal-300 p-1 rounded mt-2"
        placeholder="Nom"
        onChangeText={(text) => setFormData({ ...formData, nom: text })}
      />
      <TextInput
        className="border-2 border-teal-300 p-1 rounded mt-2"
        placeholder="Prénom"
        onChangeText={(text) => setFormData({ ...formData, prenom: text })}
      />
      <TextInput
        className="border-2 border-teal-300 p-1 rounded mt-2"
        placeholder="Date de naissance"
        onChangeText={(text) => setFormData({ ...formData, date_naissance: text })}
      />
      <TextInput
        className="border-2 border-teal-300 p-1 rounded mt-2"
        placeholder="Ville"
        onChangeText={(text) => setFormData({ ...formData, ville: text })}
      />
      <TextInput
        className="border-2 border-teal-300 p-1 rounded mt-2"
        placeholder="Pays"
        onChangeText={(text) => setFormData({ ...formData, pays: text })}
      />
      <TextInput
        className="border-2 border-teal-300 p-1 rounded mt-2"
        placeholder="Email"
        onChangeText={(text) => setFormData({ ...formData, email: text })}
      />
      <TextInput
        className="border-2 border-teal-300 p-1 rounded mt-2"
        placeholder="Mot de passe"
        secureTextEntry={true}
        onChangeText={(text) => setFormData({ ...formData, password: text })}
      />
      <TextInput
        className="border-2 border-teal-300 p-1 rounded mt-2"
        placeholder="Confirmer le mot de passe"
        secureTextEntry={true}
        onChangeText={(text) => setFormData({ ...formData, confirm_password: text })}
      />
      <Text className="text-center rounded pt-1.5 h-10 text-white bg-teal-500 mt-2 mb-50" onPress={handleRegistration} >S'inscrire</Text>

      <Pressable onPress={() => navigation.navigate("Login")}>
        <Text className="text-slate-800 text-center text-blue-600 mt-1 mb-5">Login</Text>
      </Pressable>

    </ScrollView>
  );
};


export default InscriptionScreenForm;
