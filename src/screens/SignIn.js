import React, {useContext, useState} from 'react';
import {Alert, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';

import * as Animatable from 'react-native-animatable'
import {GlobalStyles} from "../constants/styles";
import {AuthContext} from "../store/auth-context";
import {loginUsuario} from "../gateway/http-usuarios";

function SignIn({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const authCtx = useContext(AuthContext);

    function handleLogin() {
        try {
            loginUsuario(email, password).then((response) => {
                if (response && response[0]) {
                    authCtx.authenticate(response[0].id.toString());
                    return;
                }
                Alert.alert('Falha no login', 'Usuário ou senha incorretos.');
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}/* BLOCO DOS CAMPOS */>
                <Text style={styles.message}>Login</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>E-mail</Text>
                <TextInput
                    placeholder="Digite seu e-mail."
                    style={styles.input}
                    keyboardType={'email-address'}
                    value={email}
                    onChangeText={setEmail}
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder="Digite sua senha."
                    secureTextEntry={true}
                    style={styles.input}
                    keyboardType={'default'}
                    value={password}
                    onChangeText={setPassword}
                />

                <Pressable style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </Pressable>

                <Pressable style={styles.buttonRegister} onPress={() => navigation.replace('Register')}>
                    <Text style={styles.registerText}>Cadastrar</Text>
                </Pressable>

            </Animatable.View>
        </View>
    );
}

export default SignIn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalStyles.colors.background,
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    },
    containerForm: {
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 20,
        marginTop: 28,
    },
    input: {
        padding: 9,
        borderRadius: 20,
        backgroundColor: GlobalStyles.colors.input,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button: {
        backgroundColor: GlobalStyles.colors.primary,
        width: '40%',
        borderRadius: 100,
        paddingVertical: 8,
        marginTop: 19,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    buttonText: {
        color: GlobalStyles.colors.text800,
        fontSize: 18,
        fontWeight: "bold"
    },
    buttonRegister: {
        backgroundColor: GlobalStyles.colors.input,
        width: '40%',
        borderRadius: 100,
        paddingVertical: 8,
        marginTop: 19,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    registerText: {
        color: GlobalStyles.colors.text100,
        fontWeight: "bold",
        fontSize: 16
    }
})