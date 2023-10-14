import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'

export default function Welcome() {
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

    <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm} /* BLOCO DE TEXTO PAGINA INICIAL */> 
        <Text style={styles.title}>Monitore a sua dieta de forma fácil e rápida!</Text>
        <Text style={styles.text}>Faça login para iniciar.</Text>

        <TouchableOpacity 
        style={styles.button}
        onPress={ () => navigation.navigate('SignIn')}
        >
            <Text style={styles.buttonText}>Acessar</Text>
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
        flex: 2,
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
        marginTop: 28,
        marginBottom: 12,
        alignItems:'center',
        alignContent: 'center'
    },
    text:{
        color: '#a1a1a1',
        alignItems: 'center',
        fontWeight: 'bold',
        alignItems:'center',
        alignContent: 'center'
    },
    button:{
        position: 'absolute',
        backgroundColor: '#7D9C3E',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf:'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:{
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold'
    }

})
