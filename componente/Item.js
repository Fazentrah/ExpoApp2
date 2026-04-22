import { View } from 'react-native';
import Tarea from './componente/Tarea';


export default function ListaTareas({ tareas }) {
    return (
        <View>
            {tareas.map(t => (
                <Tarea key={t.id} texto={t.texto} />
            ))}
        </View>
    );
}
