import {StyleSheet, View, Text, Pressable, Modal} from "react-native";
import {useContext, useState} from "react";
import {UsuarioContext} from "../store/usuario-context";
import {GlobalStyles} from "../constants/styles";
import {ModalPerfil} from "../components/Perfil/ModalPerfil";

function Perfil({navigation}) {
    const [usuario, setUsuario] = useState(null);

    const usuarioCtx = useContext(UsuarioContext);

    const {
        id, nome, atividade, dataNascimento, sexo,
        peso, altura, metaCalorica, metaPeso, meta, publico
    } = usuarioCtx.usuario;
    

    const [visibleModal, setVisibleModal] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    function converterData(dataNascimento) {
        var partesData = dataNascimento.split('-');
        var dataConv = partesData[2] + '/' + partesData[1] + '/' + partesData[0];
        
        return dataConv;
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
                    <Text style={styles.leftInfo}>Atividade:</Text>
                    <Pressable>
                        <Text style={styles.rightInfo}>{atividade}</Text>
                    </Pressable>
                </View>
                <View style={styles.infoLineContainer}>
                    <Text style={styles.leftInfo}>Nascimento:</Text>
                    <Pressable>
                        <Text style={styles.rightInfo}>{converterData(dataNascimento)}</Text>
                    </Pressable>
                </View>
                <View style={styles.infoLineContainer}>
                    <Text style={styles.leftInfo}>Sexo:</Text>
                    <Pressable>
                        <Text style={styles.rightInfo}>{sexo}</Text>
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
                    <Pressable>
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
                    <Pressable onPress={() => setModalVisible(true)}>
                        <Text style={styles.rightInfoX}>{publico? 'Público':'Privado'}</Text>
                    </Pressable>
                </View>

                <Modal
                transparent={true}
                visible={visibleModal}
                onRequestClose={() => setVisibleModal(false)}
            >
                <ModalPerfil
                    handleClose={() => setVisibleModal(false)}
                />
                </Modal>









                {/*<Text style={styles.leftInfo}>Atividade:</Text>*/}
                {/*<Text style={styles.leftInfo}>Nascimento:</Text>*/}
                {/*<Text style={styles.leftInfo}>Sexo:</Text>*/}
                {/*<Text style={styles.leftInfo}>Altura:</Text>*/}
                {/*<Text style={styles.leftInfo}>Peso:</Text>*/}
                {/*<Text style={styles.leftInfo}>Objetivo:</Text>*/}
                {/*<Text style={styles.leftInfo}>Meta de peso:</Text>*/}
                {/*<Text style={styles.leftInfo}>Meta calórica:</Text>*/}
                {/*<Text style={styles.leftInfo}>Perfil:</Text>*/}
                {/*<View>*/}
                {/*    <Text style={styles.rightInfo}>{atividade}</Text>*/}
                {/*    <Text style={styles.rightInfo}>{dataNascimento}</Text>*/}
                {/*    <Text style={styles.rightInfo}>{sexo}</Text>*/}
                {/*    <Text style={styles.rightInfo}>{altura}</Text>*/}
                {/*    <Text style={styles.rightInfo}>{peso}</Text>*/}
                {/*    <Text style={styles.rightInfo}>{meta}</Text>*/}
                {/*    <Text style={styles.rightInfo}>{metaPeso}</Text>*/}
                {/*    <Text style={styles.rightInfo}>{metaCalorica}</Text>*/}
                {/*    <Text style={styles.rightInfo}>{publico.toString()}</Text>*/}
                {/*</View>*/}
            </View>
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