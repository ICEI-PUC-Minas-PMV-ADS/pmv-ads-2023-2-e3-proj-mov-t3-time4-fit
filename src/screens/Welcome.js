import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import * as Animatable from 'react-native-animatable'
import {GlobalStyles} from "../constants/styles";

function Welcome({navigation}) {
    return (
        <View style={styles.container}>

            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation="flipInY"
                    source={require('../assets/eatsmart.png')}
                    style={{width: '40%'}}
                    resizeMode="contain"
                />
            </View>

            <Animatable.View delay={600} animation="fadeInUp"
                             style={styles.containerForm} /* BLOCO DE TEXTO PAGINA INICIAL */>
                <Text style={styles.title}>Monitore a sua dieta de forma fácil e rápida!</Text>
                <Text style={styles.text}>Faça login para iniciar.</Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('SignIn')}
                >
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </Animatable.View>

        </View>
    );
}

export default Welcome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalStyles.colors.background,
    },
    containerLogo: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForm: {
        flex: 2,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
        alignItems: 'center',
        alignContent: 'center'
    },
    text: {
        color: GlobalStyles.colors.text100,
        fontWeight: 'bold',
        alignItems: 'center',
        alignContent: 'center'
    },
    button: {
        position: 'absolute',
        backgroundColor: GlobalStyles.colors.primary,
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: GlobalStyles.colors.text800,
        fontWeight: 'bold'
    }
})
