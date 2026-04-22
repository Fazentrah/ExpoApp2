import { View, Text, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
    const [contador, setContador] = useState(0);
    const sumar = ()=> {
setContador(contador + 1)
if (sumar<0) {
    contador=> setContador(0)
} else {
    
}


    }


    return (
        <View>
            <Text>Contador: {contador}</Text>
            <Button
                title="Sumar"
                onPress={() => sumar}
            />
            <Button
                title="Restar"
                onPress={() => setContador(contador - 1)}
            />
            <Button
                title="Reiniciar"
                onPress={() => setContador(0)}
            />
        </View>
    );
    
}
