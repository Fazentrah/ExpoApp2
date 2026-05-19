import { View, Text } from 'react-native';
import InputTarea from './Input';
import ListaTareas from './Lista';
import Tarjeta from './Tarjeta';
import { useState } from 'react';
import styles from './Estilos';

export default function TodoApp() {

const [tareas, setTareas] = useState([]);

const agregarTarea = (texto) => {
    setTareas([...tareas, { id: Date.now(), texto, completada: false }]);
};

const manejarEliminacion = (id) => {
    setTareas(tareas.filter(t => t.id !== id));
};

const toggleCompletada = (id) => {
    setTareas(tareas.map(t =>
    t.id === id ? { ...t, completada: !t.completada } : t
    ));
};

const total = tareas.length;

const completadas = tareas.filter(t => t.completada).length;

return (
    <View style={styles.container}>

    <Text style={styles.titulo}>Mis tareas</Text>

    <Tarjeta
        titulo="Lista de tareas"
        descripcion="Actividades diarias"
    />

    <InputTarea onAgregar={agregarTarea} />

    <Text>Total: {total}</Text>
    <Text>Completadas: {completadas}</Text>

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