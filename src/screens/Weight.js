import React, {useContext, useState} from 'react';
import {Alert, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import * as Animatable from 'react-native-animatable'
import {UsuarioContext} from "../store/usuario-context";
import {GlobalStyles} from "../constants/styles";

export default function Weight({navigation}) {
    const [pesoAtual, setPesoAtual] = useState('');

    const usuarioCtx = useContext(UsuarioContext);
    const numeroRegex = /^\d*([.,]?\d?)?$/;

    function pesoHandler() {
        if (numeroRegex.test(pesoAtual)) {
            const peso = parseFloat(pesoAtual.replace(',', '.'));
            usuarioCtx.updateUsuario({peso: peso});
            navigation.navigate('Height');
        } else {
            Alert.alert('Aviso', 'Insira um número válido.');
        }
    }

    function onChangeTextHandler(text) {
        if (numeroRegex.test(text) || text === '') {
            setPesoAtual(text);
        } else {
            Alert.alert('Aviso', 'Insira um número válido.');
        }
    }

    return (
        <View style={styles.container}>

            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation="flipInY"
                    source={require('../assets/logo.png')}
                    style={{width: '100%'}}
                    resizeMode="contain"
                />
            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm} /* direcionamento */>
                <Text style={styles.title}>Qual seu peso?</Text>

                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Peso em kg"
                        keyboardType="numeric"
                        value={pesoAtual}
                        onChangeText={onChangeTextHandler}
                        maxLength={5} // Define o tamanho máximo do texto
                    />
                </View>

                <Pressable
                    style={styles.buttonText}
                    onPress={pesoHandler}
                >
                    <Text style={styles.principalText}>Continuar</Text>
                </Pressable>

            </Animatable.View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalStyles.colors.background,
    },
    containerLogo: {
        flex: 1,
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
        marginBottom: 20,
        alignItems: "center",
        alignContent: 'center',
        textAlign: 'center'
    },
    input: {
        height: 50,
        marginHorizontal: '25%',
        fontSize: 24,
        color: GlobalStyles.colors.text800,
        borderColor: GlobalStyles.colors.text100,
        borderBottomWidth: 1,
        marginVertical: 42,
        textAlign: 'center',
    },
    buttonText: {
        backgroundColor: GlobalStyles.colors.primary,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        paddingVertical: 12,
        position: 'absolute',
        alignSelf: 'center',
        bottom: 30,
        width: '80%',
    },
    principalText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: GlobalStyles.colors.text50,
    },
})