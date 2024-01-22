
import { Text, View ,Pressable} from "react-native";

const App = ({navigation}) => {
  return (
    <View className="flex-1 items-center justify-center m-8 ">
      <Text className="text-justify  leading-7 tracking-wider ">Bienvenue sur <Text className="text-slate-800 text-sky-400">Trash clastring</Text> ! Explorez le Far West numérique en partageant vos images avec notre modèle Deep Learning CNN. Téléchargez des paysages époustouflants, découvrez des galeries thématiques, et connectez-vous avec une communauté passionnée. Notre algorithme intelligent classe automatiquement vos images pour une expérience immersive. Rejoignez-nous et plongez dans l'Ouest numérique dès aujourd'hui ! 🌄🤠📸🎉</Text>
      <Pressable onPress={() => navigation.navigate("Login")}>
        <Text className="text-slate-800 text-blue-600">Login</Text>
      </Pressable>
    </View>
  );
};
export default App;