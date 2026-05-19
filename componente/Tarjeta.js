import { View, Text } from "react-native";
import styles from "./TarjetaStyles";

export default function Tarjeta({ titulo, descripcion }) {
return (
    <View style={styles.tarjeta}>
    <Text style={styles.titulo}>{titulo}</Text>
    <Text style={styles.descripcion}>{descripcion}</Text>
    </View>
);
}