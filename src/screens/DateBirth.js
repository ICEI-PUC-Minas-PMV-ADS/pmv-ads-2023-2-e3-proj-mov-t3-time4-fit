import React, {useContext, useState} from 'react';
import {Alert, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import * as Animatable from 'react-native-animatable'
import {UsuarioContext} from "../store/usuario-context";
import {GlobalStyles} from "../constants/styles";

export default function DateBirth({navigation}) {
    const [dataNascimento, setDataNascimento] = useState('');

    const usuarioCtx = useContext(UsuarioContext);
    const dateRegex = /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

    function dateBirthHandler() {
        if (dateRegex.test(dataNascimento)) {
            usuarioCtx.updateUsuario({dataNascimento: dataNascimento});
            navigation.navigate('Gender');
        } else {
            Alert.alert('Data inválida!', 'Verifique a data e tente novamente.');
        }
    }

    function onChangeTextHandler(text) {
        const cleanedText = text.replace(/[^0-9]/g, '');

        // Insere as barras automaticamente enquanto o usuário digita
        if (cleanedText.length <= 2) {
            setDataNascimento(cleanedText);
        } else if (cleanedText.length <= 4) {
            setDataNascimento(`${cleanedText.slice(0, 2)}/${cleanedText.slice(2)}`);
        } else {
            setDataNascimento(`${cleanedText.slice(0, 2)}/${cleanedText.slice(2, 4)}/${cleanedText.slice(4, 8)}`);
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
                <Text style={styles.title}>Qual a sua data de nascimento?</Text>

                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="dd/mm/aaaa"
                        keyboardType="numeric"
                        value={dataNascimento}
                        onChangeText={onChangeTextHandler}
                        maxLength={10} // Define o tamanho máximo do texto
                    />
                </View>

                <Pressable
                    style={styles.buttonText}
                    onPress={dateBirthHandler}
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