import React, {useContext} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import * as Animatable from 'react-native-animatable'
import {UsuarioContext} from "../store/usuario-context";
import {GlobalStyles} from "../constants/styles";
import {UserChoices} from "../constants/users";
import {FontAwesome5} from "@expo/vector-icons";

export default function LevelActivity({navigation}) {
    const usuarioCtx = useContext(UsuarioContext);

    function levelActivityHandler(levelActivity) {
        usuarioCtx.updateUsuario({levelActivity: levelActivity});
        navigation.navigate('DataNascimento');
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
                <Text style={styles.title}>Qual seu nível de atividade física diário?</Text>

                {UserChoices.levelActivity.map((activity, index) => (
                    <Pressable style={styles.buttonText}
                               onPress={levelActivityHandler.bind(this, activity.value)}
                               key={index}
                    >
                        <Text style={styles.principalText}>
                            <FontAwesome5 name={activity.icon}
                                                    size={26}
                                                    color={activity.color}
                            />
                            &nbsp;&nbsp;{activity.value}
                        </Text>
                        <Text style={styles.descriptionText}>{activity.description}</Text>
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
        borderRadius: 5,
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