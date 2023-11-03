import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'

export default function Objective() {
    const navigation = useNavigation();

 return (
   <View style={styles.container}>
    
    <View style={styles.containerLogo}>
        <Animatable.Image 
        animation="flipInY"
        source={require('../../assets/logo.png')}
        style={{ width:'100%'}}
        resizeMode="contain"
        />
    </View>

    <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm} /* direcionamento */> 
        <Text style={styles.title}>Qual seu nível de atividade física diário?</Text>

        <TouchableOpacity style={styles.buttonText}
        onPress={ () => navigation.navigate('levelActivity')}
        >
            <Text style={styles.principalText}> <FontAwesome5 name="meh" size={24} color="yellow"/>  Leve</Text>
            <Text>Trabalho em pé ou caminhadas leves</Text>
            
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonText}
        onPress={ () => navigation.navigate('levelActivity')}
        >
            <Text style={styles.principalText}><Ionicons name="happy-outline" size={24} color="yellow" /> Moderado</Text>
            <Text>Trabalho pesado e/ou atividades físicas regulares</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonText}
        onPress={ () => navigation.navigate('levelActivity')}
        >
            <Text style={styles.principalText}><FontAwesome5 name="grin-beam-sweat" size={24} color="yellow" /> Intenso</Text>
            <Text>Atividades físicas intensas todos os dias</Text>
        </TouchableOpacity>

    </Animatable.View>

   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white',
    },
    containerLogo:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForm:{
        flex:2,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        alignItems: "center",
        alignContent: 'center',
        textAlign: 'center'
    },
    text:{
        color: '#a1a1a1',
        alignItems: 'center',
        fontWeight: 'bold',
        alignItems:'center',
        alignContent: 'center',
        textAlign: 'center'
    },
    buttonText:{
        padding:20,
        borderRadius: 5,
        height: 95,
        marginBottom: 12,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#7D9C3E",
        alignItems: 'center',
        textAlign: 'center',
        alignContent: 'center'
    },
    principalText:{
        fontSize:16,
        fontWeight:'bold'
    }

})