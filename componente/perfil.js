import { Text, View } from 'react-native';



export default function Perfil({alumno, edad }) {

    return(
        <View>
            <Text>Alumno {alumno}</Text>
                <Text>Edad {edad}</Text>
        </View>
    )
}