import React, {useContext} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import * as Animatable from 'react-native-animatable'
import {GlobalStyles} from "../constants/styles";
import {UserChoices} from "../constants/users";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {UsuarioContext} from "../store/usuario-context";

export default function Objective({navigation}) {
    const usuarioCtx = useContext(UsuarioContext);

    function objectiveHandler(objective) {
        usuarioCtx.updateUsuario({meta: objective});
        navigation.navigate('LevelActivity');
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
                <Text style={styles.title}>Qual o seu objetivo?</Text>

                {UserChoices.objective.map((objective, index) => (
                    <Pressable style={styles.buttonText}
                               onPress={objectiveHandler.bind(this, objective.value)}
                               key={index}
                    >
                        <Text style={styles.principalText}>
                            <MaterialCommunityIcons name={objective.icon}
                                                    size={26}
                                                    color={objective.color}
                            />
                            &nbsp;&nbsp;{objective.value}
                        </Text>
                        <Text>{objective.description}</Text>
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
        height: 95,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: GlobalStyles.colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    principalText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5
    },
    descriptionText: {
        textAlign: 'center',
    }
})