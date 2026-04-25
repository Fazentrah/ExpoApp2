import { View } from 'react-native';
import Tarea from './Tarea';

export default function ListaTareas({ tareas, onEliminar, onToggle }) {
  return (
    <View>
      {tareas.map(t => (
        <Tarea 
          key={t.id}
          id={t.id}
          texto={t.texto}
          completada={t.completada}
          onEliminar={onEliminar}
          onToggle={onToggle}
        />
      ))}
    </View>
  );
}