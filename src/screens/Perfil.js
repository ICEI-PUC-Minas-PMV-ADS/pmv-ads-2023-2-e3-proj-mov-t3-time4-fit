import {Pressable, StyleSheet, Text, View} from "react-native";
import {useContext, useEffect, useState} from "react";
import {UsuarioContext} from "../store/usuario-context";
import {GlobalStyles} from "../constants/styles";
import {getFormattedDateShort} from "../util/date"
import ModalPerfilNumerico from "../components/Perfil/ModalPerfilNumerico";
import {updateUsuario} from "../gateway/http-usuarios";

function Perfil({navigation}) {
    const usuarioCtx = useContext(UsuarioContext);

    const [modalNumericoInfo, setModalNumericoInfo] = useState({});

    const {
        id, nome, atividade, dataNascimento, sexo,
        peso, altura, metaCalorica, metaPeso, meta, publico
    } = usuarioCtx.usuario;

    const [modalNumericoVisible, setModalNumericoVisible] = useState(false);

    useEffect(() => {
        console.log(usuarioCtx.usuario);
    }, [usuarioCtx.usuario]);

    function onPressableNumericoHandler(titulo, valorBase, unidade, validador, variavel) {
        setModalNumericoInfo({titulo, valorBase, unidade, validador, variavel});
        setModalNumericoVisible(true);
    }

    async function editCampoHandler(variavel, valor) {
        const usuario = {...usuarioCtx.usuario, [variavel]: valor};
        console.log(usuario)
        try {
            usuarioCtx.updateUsuario({[variavel]: valor});
            await updateUsuario(id, usuario)
        } catch (error) {
            console.error(error);
        }
    }

    function closeModalHandler() {
        setModalNumericoVisible(false);
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.textHeader}>Meu Perfil</Text>
            </View>

            <View style={styles.infoContainer}>
                <View style={styles.infoLineContainer}>
                    <Text style={styles.leftInfo}>Nome:</Text>
                    <Pressable>
                        <Text style={styles.rightInfo}>{nome}</Text>
                    </Pressable>
                </View>
                <View style={styles.infoLineContainer}>
                    <Text style={styles.leftInfo}>Nascimento:</Text>
                    <Pressable>
                        <Text style={styles.rightInfo}>{getFormattedDateShort(dataNascimento)}</Text>
                    </Pressable>
                </View>
                <View style={styles.infoLineContainer}>
                    <Text style={styles.leftInfo}>Sexo:</Text>
                    <Pressable>
                        <Text style={styles.rightInfo}>{sexo}</Text>
                    </Pressable>
                </View>
                <View style={styles.infoLineContainer}>
                    <Text style={styles.leftInfo}>Atividade:</Text>
                    <Pressable>
                        <Text style={styles.rightInfo}>{atividade}</Text>
                    </Pressable>
                </View>
                <View style={styles.infoLineContainer}>
                    <Text style={styles.leftInfo}>Peso:</Text>
                    <Pressable>
                        <Text style={styles.rightInfoX}>{peso} kg</Text>
                    </Pressable>
                </View>
                <View style={styles.infoLineContainer}>
                    <Text style={styles.leftInfo}>Altura:</Text>
                    <Pressable>
                        <Text style={styles.rightInfoX}>{altura/100} m</Text>
                    </Pressable>
                </View>
                <View style={styles.infoLineContainer}>
                    <Text style={styles.leftInfo}>Meta Calórica:</Text>
                    <Pressable>
                        <Text style={styles.rightInfoX}>{metaCalorica} kcal</Text>
                    </Pressable>
                </View>
                <View style={styles.infoLineContainer}>
                    <Text style={styles.leftInfo}>Meta Peso:</Text>
                    <Pressable
                        onPress={onPressableNumericoHandler.bind(this, 'Meta Peso:', metaPeso, 'kg', /^\d+$/, 'metaPeso')}>
                        <Text style={styles.rightInfoX}>{metaPeso} kg</Text>
                    </Pressable>
                </View>
                <View style={styles.infoLineContainer}>
                    <Text style={styles.leftInfo}>Meta:</Text>
                    <Pressable>
                        <Text style={styles.rightInfo}>{meta}</Text>
                    </Pressable>
                </View>
                <View style={styles.infoLineContainer}>
                    <Text style={styles.leftInfoX}>Estilo de perfil:</Text>
                    <Pressable>
                        <Text style={styles.rightInfoX}>{publico? 'Público':'Privado'}</Text>
                    </Pressable>
                </View>
            </View>
            <ModalPerfilNumerico
                isVisible={modalNumericoVisible}
                onClose={closeModalHandler}
                onSave={editCampoHandler}
                {...modalNumericoInfo}/>
        </View>
    );
}

export default Perfil;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalStyles.colors.text50,
        paddingTop: '10%',
    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: '7%',
        marginBottom: 30,
    },
    textHeader: {
        textTransform: 'capitalize',
        fontSize: 24,
        fontWeight: 'bold',
    },
    infoContainer: {
        marginHorizontal: '7%',
        // borderWidth: 1,
        // borderColor: GlobalStyles.colors.primary,
        // borderRadius: 20,
        padding: 20,
    },
    infoLineContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    leftInfo: {
        textTransform: 'capitalize',
        fontSize: 20,
        // fontWeight: 'bold',
        marginBottom: 10,
    },
    leftInfoX: {
        fontSize: 20,
        // fontWeight: 'bold',
        marginBottom: 10,
    },
    rightInfo: {
        textTransform: 'capitalize',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: GlobalStyles.colors.primary,
        borderRadius: 20,
    },
    rightInfoX: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: GlobalStyles.colors.primary,
        borderRadius: 20,
    }
})