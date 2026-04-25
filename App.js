import { StyleSheet, Text, View } from 'react-native';
import InputTarea from './componente/Input';
import ListaTareas from './componente/Lista';
import { useState } from 'react';

export default function App() {

  const [tareas, setTareas] = useState([]);

  const agregarTarea = (texto) => {
    setTareas([...tareas, { id: Date.now(), texto, completada: false }]);
  };

  const manejarEliminacion = (id) => {
    const nuevaLista = tareas.filter(t => t.id !== id);
    setTareas(nuevaLista);
  };

  const toggleCompletada = (id) => {
    const nuevasTareas = tareas.map(t =>
      t.id === id ? { ...t, completada: !t.completada } : t
    );
    setTareas(nuevasTareas);
  };

  return (
    <View style={styles.container}>
      <Text>app1</Text>

      <InputTarea onAgregar={agregarTarea} />

      <View style={styles.listaContainer}>
        <ListaTareas 
          tareas={tareas} 
          onEliminar={manejarEliminacion}
          onToggle={toggleCompletada}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listaContainer: {
    marginTop: 20,
  }
});