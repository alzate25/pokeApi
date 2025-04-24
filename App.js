import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Aleatorios from "./src/components/aleatorios";
import Capturados from "./src/components/capturados";
import Favoritos from "./src/components/favoritos";
import Lista from "./src/components/lista";
import Pokemon from "./src/components/pokemon";
import Usuario from "./src/components/usuario";

const Tab = createBottomTabNavigator();
export default function App() {
  return (
      <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Lista" component={Lista} />
      <Tab.Screen name="Aleatorios" component={Aleatorios} />
      <Tab.Screen name="Capturados" component={Capturados} />
      <Tab.Screen name="Favoritos" component={Favoritos} />
      <Tab.Screen name="Usuario" component={Usuario} />
      </Tab.Navigator>
      </NavigationContainer>
    );  
}

const styles = StyleSheet.create({

})