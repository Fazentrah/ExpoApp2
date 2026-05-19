import { View, Text, Image} from 'react-native';

export default function FlexEjercicio() {
return (
    // <View style={{
    // flexDirection: 'row',
    // justifyContent: 'space-around',
    // marginTop: 20
    // }}>
    // <View style={{ width: 50, height: 50, backgroundColor: 'red' }} />
    // <View style={{ width: 50, height: 50, backgroundColor: 'green' }} />
    // <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
    // </View>

// <View style={{
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//     }}>
//     <Text>
//         rdxtyfasyudgaiudhsaudhuwdh
//     </Text>
//     </View>

    <View>
    
    <Image source={require('../recursos/react.png')} 
            style={{
            width: 100,
            height: 100
        }}/>

    <Text>Usuario</Text>

    <View>
        <Text>Boton</Text>
    </View>

    </View>


);
}


