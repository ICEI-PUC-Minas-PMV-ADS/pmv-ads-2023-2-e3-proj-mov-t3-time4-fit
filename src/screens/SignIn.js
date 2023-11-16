import React, {useContext} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

import * as Animatable from 'react-native-animatable'
import {GlobalStyles} from "../constants/styles";
import {AuthContext} from "../store/auth-context";

function SignIn({navigation}) {
    const authCtx = useContext(AuthContext);

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
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder="Digite sua senha."
                    style={styles.input}
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.replace('Register')}>
                    <Text style={styles.registerText}>Cadastre-se.</Text>
                </TouchableOpacity>

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
        fontWeight: "bold"
    }
})