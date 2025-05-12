import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'; 


import Aleatorios from "./src/components/aleatorios";
import Capturados from "./src/components/capturados";
import Favoritos from "./src/components/favoritos";
import Lista from "./src/components/lista";
import Pokemon from "./src/components/pokemon";
import Usuario from "./src/components/usuario";
import { AppProvider } from './src/context/AppContext';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator(); 

function ListaStack() { 
  return ( 
  <Stack.Navigator> 
  <Stack.Screen name="Lista" component={Lista} /> 
  <Stack.Screen name="Pokemon" component={Pokemon} /> 
  </Stack.Navigator> 
  ); 
} 

function FavoritosStack() { 
return ( 
<Stack.Navigator> 
<Stack.Screen name="Favoritos" component={Favoritos} /> 
<Stack.Screen name="Pokemon" component={Pokemon} /> 
</Stack.Navigator> 
); 
} 


export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Lista" component={Lista} />
          <Tab.Screen name="Aleatorios" component={Aleatorios} />
          <Tab.Screen name="Capturados" component={Capturados} />
          <Tab.Screen name="Favoritos" component={FavoritosStack} /> 
          <Tab.Screen name="Usuario" component={Usuario} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppProvider>
    );  
}

const styles = StyleSheet.create({

})