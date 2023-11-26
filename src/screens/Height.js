import React, {useContext, useState} from 'react';
import {Alert, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import * as Animatable from 'react-native-animatable'
import {UsuarioContext} from "../store/usuario-context";
import {GlobalStyles} from "../constants/styles";

export default function Height({navigation}) {
    const [alturaUsuario, setAlturaUsuario] = useState('');

    const usuarioCtx = useContext(UsuarioContext);
    const heightRegex = /^\d{1,3}$/;

    function alturaHandler() {
        if (heightRegex.test(alturaUsuario)) {
            usuarioCtx.updateUsuario({altura: parseInt(alturaUsuario)});
            navigation.navigate('PerfilStatus');
        } else {
            Alert.alert('Aviso', 'Insira uma altura válida.');
        }
    }

    function onChangeTextHandler(text) {
        if (heightRegex.test(text) || text === '') {
            setAlturaUsuario(text);
        } else {
            Alert.alert('Aviso', 'Insira uma altura válida.');
        }
    }

    return (
        <View style={styles.container}>

            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation="flipInY"
                    source={require('../assets/eatsmart.png')}
                    style={{width: '35%'}}
                    resizeMode="contain"
                />
            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm} /* direcionamento */>
                <Text style={styles.title}>Qual a sua altura?</Text>

                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Altura em cm"
                        keyboardType="numeric"
                        value={alturaUsuario}
                        onChangeText={onChangeTextHandler}
                        maxLength={3} // Define o tamanho máximo do texto
                    />
                </View>

                <Pressable
                    style={styles.buttonText}
                    onPress={alturaHandler}
                >
                    <Text style={styles.principalText}>Próximo</Text>
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