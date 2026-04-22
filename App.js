import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Saludo from './componente/saludo';
import Perfil from './componente/perfil';

import InputTarea from './componente/Input';
import ListaTareas from './componente/Lista';
import { useState } from 'react';



export default function App() {



const [tareas, setTareas] = useState([]);
const agregarTarea = (texto) => {
setTareas([...tareas, { id: Date.now(), texto }]);
};




  return (
    <View style={styles.container}>
      <Text>app1</Text>
      <StatusBar style="auto" />
      <Perfil alumno= "carlos" edad= "45"/>
      <Saludo nombre= "juan"/>
      <InputTarea onAgregar={agregarTarea} />
      <ListaTareas tareas={tareas} />
    </View>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
