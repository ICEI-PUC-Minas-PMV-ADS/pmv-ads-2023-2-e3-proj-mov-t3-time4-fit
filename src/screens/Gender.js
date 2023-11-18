import React, {useContext} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import * as Animatable from 'react-native-animatable'
import {UsuarioContext} from "../store/usuario-context";
import {GlobalStyles} from "../constants/styles";
import {UserChoices} from "../constants/users";
import {Ionicons} from "@expo/vector-icons";

export default function Gender({navigation}) {
    const usuarioCtx = useContext(UsuarioContext);

    function genderHandler(gender) {
        usuarioCtx.updateUsuario({sexo: gender});
        navigation.navigate('Medidas');
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
                <Text style={styles.title}>Qual o seu sexo?</Text>

                {UserChoices.gender.map((gender, index) => (
                    <Pressable style={styles.buttonText}
                               onPress={genderHandler.bind(this, gender.value)}
                               key={index}
                    >
                            <Ionicons name={gender.icon}
                                                    size={36}
                                                    color={gender.color}
                            />
                        <Text style={styles.principalText}>
                            &nbsp;&nbsp;{gender.value}
                        </Text>
                    </Pressable>
                ))}

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
    text: {
        color: GlobalStyles.colors.text100,
        alignItems: 'center',
        fontWeight: 'bold',
        alignContent: 'center',
        textAlign: 'center'
    },
    buttonText: {
        padding: 20,
        borderRadius: 20,
        height: 85,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: GlobalStyles.colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'row',
    },
    principalText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    descriptionText: {
        textAlign: 'center',
    }
})