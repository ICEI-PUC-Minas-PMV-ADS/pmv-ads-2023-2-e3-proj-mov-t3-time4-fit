import {useContext, useState} from "react"
import {FlatList, Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";

import {AntDesign, Entypo} from '@expo/vector-icons';
import {ModalEditar} from "../components/ManageRefeicoes/ModalEditar";
import {ModalAdd} from "../components/ManageRefeicoes/ModalAdd";
import {RefeicaoContext} from "../store/refeicao-context";
import {AuthContext} from "../store/auth-context";
import {deleteRefeicao, storeRefeicao} from "../gateway/http-refeicoes";


export default function ManageRefeicoes() {
    const [itemSelecionado, setItemSelecionado] = useState(null);

    const refeicaoCtx = useContext(RefeicaoContext);
    const authCtx = useContext(AuthContext);

    const refeicoes = refeicaoCtx.refeicoes.sort((a, b) => a.horario.localeCompare(b.horario));
    const idUsuario = authCtx.token;

    const Item = ({id, nome, horario}) => (
        <View style={styles.item}>
            <View>
                <Text style={styles.itemTitle}>{nome}</Text>
                <Text style={styles.itemTitle}>{horario}</Text>
            </View>
            <TouchableOpacity style={styles.iconButton}
                              onPress={() => {
                                  setVisibleModal(true);
                                  setItemSelecionado({id, nome, horario});
                              }}>
                <Entypo name="dots-three-vertical" size={15} color="black"/>
            </TouchableOpacity>
        </View>
    );

    const [visibleModal, setVisibleModal] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const handleCloseModal = () => {
        setModalVisible(false);
    };

    async function handleSalvar(refeicaoData) {
        const refeicao = {
            nome: refeicaoData.food,
            horario: refeicaoData.time,
            idUsuario: idUsuario,
        }
        try {
            const id = await storeRefeicao(refeicao);
            refeicaoCtx.addRefeicao({...refeicao, id: id});
        } catch (error) {
            console.error("Erro ao salvar:", error);
        }
    }

    async function handleDelete(id) {
        try {
            await deleteRefeicao(id);
            refeicaoCtx.removeRefeicao(id);
        } catch (error) {
            console.error("Erro ao deletar:", error);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <FlatList
                    style={styles.flatlist}
                    data={refeicoes}
                    renderItem={({item}) => <Item {...item}/>}
                    keyExtractor={(item) => item.id}
                />
            </View>

            <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
                <AntDesign name="plus" size={24} color="#fff"/>
            </TouchableOpacity>

            <Modal
                transparent={true}
                visible={visibleModal}
                onRequestClose={() => setVisibleModal(false)}
            >
                <ModalEditar
                    handleClose={() => setVisibleModal(false)}
                    handleDelete={handleDelete}
                    valorDefault={itemSelecionado}
                />
            </Modal>

            <Modal
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <ModalAdd handleSalvar={handleSalvar} handleClose={handleCloseModal}/>
            </Modal>

        </SafeAreaView>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#DCDCDC",
    },
    header: {
        paddingTop: 40,
        paddingBottom: 14,
        paddingLeft: 20,
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        color: "#fff",
        fontWeight: 'bold',
        marginLeft: 15,
    },
    content: {
        flex: 1,
        backgroundColor: "#DCDCDC",
        padding: 5,
    },
    flatlist: {
        flex: 1,
        paddingTop: 1,
    },
    item: {
        backgroundColor: "#FFF",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        padding: 10,
        paddingBottom: 15,
        marginVertical: 3,
        borderRadius: 5,
    },
    itemTitle: {
        fontSize: 16,
        paddingTop: 1,
    },
    button: {
        marginRight: 35,
    },
    addButton: {
        position: 'absolute',
        bottom: 80,
        right: 25,
        backgroundColor: "#7D9C3E",
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconButton: {
        padding: 10,
    },
    iconContainer: {
        position: 'absolute',
        bottom: 7,
        left: 10,
        marginLeft: 5,
        paddingLeft: 5,
    },
});
