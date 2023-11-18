import {Alert, Pressable, StyleSheet, Text, View} from "react-native";
import {UsuarioContext} from "../store/usuario-context";
import * as Animatable from "react-native-animatable";
import {UserChoices} from "../constants/users";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {GlobalStyles} from "../constants/styles";
import {useContext, useState} from "react";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import {storeUsuario} from "../gateway/http-usuarios";
import {AuthContext} from "../store/auth-context";
import {getMetaCalorica} from "../util/calculator";

export default function PerfilStatus() {
    const [isAuthenticating, setIsAuthenticating] = useState(false);

    const usuarioCtx = useContext(UsuarioContext);
    const authCtx = useContext(AuthContext);

    const usuario = usuarioCtx.usuario;

    async function perfilStatusHandler(status) {
        setIsAuthenticating(true);

        let usuarioData = {...usuario, peso: 98, altura: 184};

        const metaCalorica = getMetaCalorica(usuarioData)

        usuarioData = {...usuarioData, metaCalorica: metaCalorica, public: status}

        try {
            const id = await storeUsuario(usuarioData);
            // usuarioCtx.updateUsuario({...usuarioData, id: id});
            // authCtx.authenticate(id);
        } catch (error) {
            Alert.alert('Falha no cadastro', 'Tente novamente mais tarde');
        } finally {
            setTimeout(() => setIsAuthenticating(false), 1000);
        }
    }

    if (isAuthenticating) {
        return <LoadingOverlay message={'Criando usuário...'}/>
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
                <Text style={styles.title}>Qual o seu tipo de perfil?</Text>

                {UserChoices.perfil.map((perfil, index) => (
                    <Pressable style={styles.buttonText}
                               onPress={perfilStatusHandler.bind(this, perfil.value)}
                               key={index}
                    >
                        <Text style={styles.principalText}>
                            <MaterialCommunityIcons name={perfil.icon}
                                                    size={26}
                                                    color={perfil.color}
                            />
                            &nbsp;&nbsp;{perfil.text}
                        </Text>
                        <Text style={styles.descriptionText}>{perfil.description}</Text>
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