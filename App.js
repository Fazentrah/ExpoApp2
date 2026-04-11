import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Saludo from './componente/saludo';
import Perfil from './componente/perfil';




export default function App() {
  return (
    <View style={styles.container}>
      <Text>app1</Text>
      <StatusBar style="auto" />
      <Perfil alumno= "carlos" edad= "45"/>
      <Saludo nombre= "fabri"/>
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
