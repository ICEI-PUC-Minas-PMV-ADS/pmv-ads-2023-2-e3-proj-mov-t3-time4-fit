import React, {useContext, useState} from 'react';
import {Alert, Pressable, ScrollView, StyleSheet, Text, TextInput} from 'react-native';
import * as Animatable from 'react-native-animatable'
import {Controller, useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {GlobalStyles} from "../constants/styles";
import {checkUsuarioByEmail} from "../gateway/http-usuarios";
import {UsuarioContext} from "../store/usuario-context";
import LoadingOverlay from "../components/ui/LoadingOverlay";

const schema = yup.object({
    nome: yup.string().required("Informe seu nome"),
    sobrenome: yup.string().required("Informe seu sobrenome"),
    email: yup.string().email("E-mail inválido!").required("Informe seu e-mail!"),
    senha: yup.string().min(8, "A senha deve conter no mínimo 8 caracteres").required("Informe sua senha"),
})

function Register({navigation}) {
    const [isSubmiting, setIsSubmiting] = useState(false);

    const usuarioCtx = useContext(UsuarioContext);

    const {control, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    }) //esta pode ser chamada quando o usuario clicar no botão de finalizar cadastro, utilizada para teste

    async function handleRegister(data) {
        setIsSubmiting(true);
        try {
            const response = await checkUsuarioByEmail(data.email);
            if (response && response[0]) {
                Alert.alert('Falha no cadastro', 'E-mail já cadastrado');
                return;
            }
            const nomeCompleto = data.nome + ' ' + data.sobrenome;
            usuarioCtx.updateUsuario({...data, nomeCompleto: nomeCompleto});
            navigation.navigate('Objective');
        } catch (error) {
            Alert.alert('Erro ao verificar e-mail', 'Tente novamente mais tarde');
        } finally {
            setTimeout(() => setIsSubmiting(false), 1000);
        }
    }

    if (isSubmiting) {
        return <LoadingOverlay message={'Verificando informações...'}/>
    }

    return (
        <ScrollView style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}/* BLOCO DE CAMPO */>
                <Text style={styles.message}>Cadastre-se</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Nome</Text>
                {errors.nome && <Text style={styles.labelError}>{errors.nome?.message}</Text>}
                <Controller
                    control={control}
                    name='nome'
                    render={({field: {onChange, onBlur, value}}) => (
                        <TextInput
                            style={styles.input}
                            onChangeText={onChange}
                            onBlur={onBlur} //chamado quando o text input é tocado ein
                            value={value}
                            placeholder='Seu nome'
                            autoCapitalize={'words'}
                        />
                    )}
                />

                <Text style={styles.title}>Sobrenome</Text>
                {errors.sobrenome && <Text style={styles.labelError}>{errors.sobrenome?.message}</Text>}
                <Controller
                    control={control}
                    name='sobrenome'
                    render={({field: {onChange, onBlur, value}}) => (
                        <TextInput
                            style={styles.input}
                            onChangeText={onChange}
                            onBlur={onBlur} //chamado quando o text input é tocado ein
                            value={value}
                            placeholder='Seu sobrenome'
                            autoCapitalize={'words'}
                        />
                    )}
                />

                <Text style={styles.title}>E-mail</Text>
                {errors.email && <Text style={styles.labelError}>{errors.email?.message}</Text>}
                <Controller
                    control={control}
                    name='email'
                    render={({field: {onChange, onBlur, value}}) => (
                        <TextInput
                            style={styles.input}
                            onChangeText={onChange}
                            onBlur={onBlur} //chamado quando o text input é tocado ein
                            value={value}
                            placeholder='Digite seu e-mail'
                        />
                    )}
                />


                <Text style={styles.title}>Senha</Text>
                {errors.senha && <Text style={styles.labelError}>{errors.senha?.message}</Text>}
                <Controller
                    control={control}
                    name='senha'
                    render={({field: {onChange, onBlur, value}}) => (
                        <TextInput
                            style={styles.input}
                            onChangeText={onChange}
                            onBlur={onBlur} //chamado quando o text input é tocado ein
                            value={value}
                            secureTextEntry={true}
                            placeholder='Digite sua senha'
                        />
                    )}
                />


                <Pressable style={styles.buttonPrimary} onPress={handleSubmit(handleRegister)}>
                    <Text style={styles.buttonPrimaryText}>Cadastrar</Text>
                </Pressable>

                <Pressable style={styles.buttonSecondary} onPress={() => navigation.replace('SignIn')}>
                    <Text style={styles.buttonSecondaryText}>Entrar</Text>
                </Pressable>

            </Animatable.View>
        </ScrollView>
    )
}

export default Register;

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
        marginTop: 12,
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
    },
    labelError: {
        alignSelf: 'flex-start',
        color: GlobalStyles.colors.error,
        marginBottom: 8
    }
})
    
