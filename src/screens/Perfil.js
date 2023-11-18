import {Pressable, StyleSheet, Text, View} from "react-native";
import {useContext, useEffect, useState} from "react";
import {UsuarioContext} from "../store/usuario-context";
import {GlobalStyles} from "../constants/styles";
import {getFormattedDateShort} from "../util/date"
import ModalPerfilNumerico from "../components/Perfil/ModalPerfilNumerico";
import ModalPerfilSelect from "../components/Perfil/ModalPerfilSelect";
import {updateUsuario} from "../gateway/http-usuarios";
import ModalPerfilBool from "../components/Perfil/ModalPerfilBool";

function Perfil({navigation}) {
    const usuarioCtx = useContext(UsuarioContext);

    const [modalNumericoInfo, setModalNumericoInfo] = useState({});
    const [modalSelectInfo, setModalSelectInfo] = useState({});
    const [modalBooltInfo, setModalBoolInfo] = useState({});

    const {
        id, nome, atividade, dataNascimento, sexo,
        peso, altura, metaCalorica, metaPeso, meta, publico
    } = usuarioCtx.usuario;

    const [modalNumericoVisible, setModalNumericoVisible] = useState(false);
    const [modalSelectVisible, setModalSelectVisible] = useState(false);
    const [modalBooltVisible, setModalBoolVisible] = useState(false);

    useEffect(() => {
    }, [usuarioCtx.usuario]);

    function onPressableNumericoHandler(titulo, valorBase, unidade, validador, variavel) {
        setModalNumericoInfo({titulo, valorBase, unidade, validador, variavel});
        setModalNumericoVisible(true);
    }
    function onPressableSelectHandler(titulo, valor1, valor2, valor3, variavel) {
        setModalSelectInfo({titulo, valor1, valor2, valor3, variavel});
        setModalSelectVisible(true);
    }
    function onPressableBoolHandler(titulo, valor1, valor2, variavel) {
        setModalBoolInfo({titulo, valor1, valor2, variavel});
        setModalBoolVisible(true);
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
        setModalSelectVisible(false);
        setModalBoolVisible(false);
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
                    <Pressable
                    onPress={onPressableSelectHandler.bind(this, 'Qual o nível da sua atividade?', 'Leve', 'Moderada', 'Pesada', 'atividade')}>
                        <Text style={styles.rightInfo}>{atividade}</Text>
                    </Pressable>
                </View>
                <View style={styles.infoLineContainer}>
                    <Text style={styles.leftInfo}>Peso:</Text>
                    <Pressable
                        onPress={onPressableNumericoHandler.bind(this, 'Peso:', peso, 'kg', /^\d+$/, 'peso')}>
                        <Text style={styles.rightInfoX}>{peso} kg</Text>
                    </Pressable>
                </View>
                <View style={styles.infoLineContainer}>
                    <Text style={styles.leftInfo}>Altura:</Text>
                    <Pressable
                        onPress={onPressableNumericoHandler.bind(this, 'Altura:', altura, 'cm', /^\d+$/, 'altura')}>
                        <Text style={styles.rightInfoX}>{altura/100} m</Text>
                    </Pressable>
                </View>
                <View style={styles.infoLineContainer}>
                    <Text style={styles.leftInfo}>Meta Calórica:</Text>
                    <Pressable
                        onPress={onPressableNumericoHandler.bind(this, 'Meta Calórica:', metaCalorica, 'kcal', /^\d+$/, 'metaCalorica')}>
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
                    <Pressable
                    onPress={onPressableSelectHandler.bind(this, 'Qual sua meta?', 'Emagrecer', 'Manter peso', 'Ganhar peso', 'meta')}>
                        <Text style={styles.rightInfo}>{meta}</Text>
                    </Pressable>
                </View>
                <View style={styles.infoLineContainer}>
                    <Text style={styles.leftInfoX}>Estilo de perfil:</Text>
                    <Pressable
                        onPress={onPressableBoolHandler.bind(this, 'Qual o tipo do seu perfil?', 'Público', 'Privado', 'publico')}>
                        <Text style={styles.rightInfoX}>{publico? 'Público':'Privado'}</Text>
                    </Pressable>
                </View>
            </View>
            <ModalPerfilNumerico
                isVisible={modalNumericoVisible}
                onClose={closeModalHandler}
                onSave={editCampoHandler}
                {...modalNumericoInfo}/>
            <ModalPerfilSelect
                isVisible={modalSelectVisible}
                onClose={closeModalHandler}
                onSave={editCampoHandler}
                {...modalSelectInfo}/>
            <ModalPerfilBool
                isVisible={modalBooltVisible}
                onClose={closeModalHandler}
                onSave={editCampoHandler}
                {...modalBooltInfo}/>
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