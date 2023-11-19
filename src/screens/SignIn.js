import React, {useContext, useState} from 'react';
import {Alert, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';

import * as Animatable from 'react-native-animatable'
import {GlobalStyles} from "../constants/styles";
import {AuthContext} from "../store/auth-context";
import {loginUsuario} from "../gateway/http-usuarios";
import LoadingOverlay from "../components/ui/LoadingOverlay";

function SignIn({navigation}) {
    const [isSubmiting, setIsSubmiting] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const authCtx = useContext(AuthContext);

    function handleLogin() {
        setIsSubmiting(true);
        try {
            loginUsuario(email, password).then((response) => {
                if (response && response[0]) {
                    authCtx.authenticate(response[0].id.toString());
                    return;
                }
                Alert.alert('Falha no login', 'Usuário ou senha incorretos');
            })
        } catch (error) {
            Alert.alert('Falha no login', 'Tente novamente mais tarde');
        } finally {
            setTimeout(() => setIsSubmiting(false), 1000);
        }
    }

    if (isSubmiting) {
        return <LoadingOverlay message={'Verificando informações...'}/>
    }

    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}/* BLOCO DOS CAMPOS */>
                <Text style={styles.message}>Login</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>E-mail</Text>
                <TextInput
                    placeholder="Digite seu e-mail"
                    style={styles.input}
                    keyboardType={'email-address'}
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize={'none'}
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder="Digite sua senha"
                    secureTextEntry={true}
                    style={styles.input}
                    keyboardType={'default'}
                    value={password}
                    onChangeText={setPassword}
                    autoCapitalize={'none'}
                />

                <Pressable style={styles.buttonPrimary} onPress={handleLogin}>
                    <Text style={styles.buttonPrimaryText}>Entrar</Text>
                </Pressable>

                <Pressable style={styles.buttonSecondary} onPress={() => navigation.replace('Register')}>
                    <Text style={styles.buttonSecondaryText}>Cadastrar</Text>
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
    buttonPrimary: {
        backgroundColor: GlobalStyles.colors.primary,
        width: '40%',
        borderRadius: 100,
        paddingVertical: 8,
        marginTop: 19,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    buttonPrimaryText: {
        color: GlobalStyles.colors.text800,
        fontSize: 18,
        fontWeight: "bold"
    },
    buttonSecondary: {
        backgroundColor: GlobalStyles.colors.input,
        width: '40%',
        borderRadius: 100,
        paddingVertical: 8,
        marginTop: 19,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    buttonSecondaryText: {
        color: GlobalStyles.colors.text100,
        fontWeight: "bold",
        fontSize: 16
    }
})