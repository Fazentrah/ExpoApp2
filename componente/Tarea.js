import { Text, View, Button, StyleSheet, TouchableOpacity } from "react-native";

export default function Tarea({ texto, id, completada, onEliminar, onToggle }) {
return (
    <View style={styles.contenedor}>
    
    <TouchableOpacity onPress={() => onToggle(id)}>
        <Text style={completada ? styles.completada : styles.texto}>
        {texto}
        </Text>
    </TouchableOpacity>

    <Button
        title="Eliminar"
        onPress={() => onEliminar(id)}
    />
    </View>
);
}

const styles = StyleSheet.create({
contenedor: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
    paddingHorizontal: 10,
},
texto: {
    fontSize: 16,
},
completada: {
    fontSize: 16,
    textDecorationLine: "line-through",
    color: "gray",
}
});