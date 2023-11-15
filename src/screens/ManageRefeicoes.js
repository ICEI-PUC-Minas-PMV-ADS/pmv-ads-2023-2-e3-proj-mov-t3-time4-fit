import {useContext, useLayoutEffect, useState} from "react"
import {FlatList, Modal, SafeAreaView, StyleSheet, View} from "react-native";
import {ModalEditar} from "../components/ManageRefeicoes/ModalEditar";
import {ModalAdd} from "../components/ManageRefeicoes/ModalAdd";
import {RefeicaoContext} from "../store/refeicao-context";
import {AuthContext} from "../store/auth-context";
import {atualizarRefeicao, deleteRefeicao, storeRefeicao} from "../gateway/http-refeicoes";
import {deleteRefeicaoDiaria, fetchRefeicoesDiariasPorRefeicao} from "../gateway/http-refeicoes-diarias";
import {RefeicoesDiariasContext} from "../store/refeicoes-diarias-context";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import RefeicaoItem from "../components/ManageRefeicoes/RefeicaoItem";
import {GlobalStyles} from "../constants/styles";
import IconButton from "../components/ui/IconButton";


export default function ManageRefeicoes({navigation}) {
    const [itemSelecionado, setItemSelecionado] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [visibleModal, setVisibleModal] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const refeicaoCtx = useContext(RefeicaoContext);
    const refeicoesDiariasCtx = useContext(RefeicoesDiariasContext);
    const authCtx = useContext(AuthContext);

    const refeicoes = refeicaoCtx.refeicoes.sort((a, b) => a.horario.localeCompare(b.horario));
    const idUsuario = authCtx.token;

    useLayoutEffect(() => {
        navigation.setOptions({
            statusBarColor: GlobalStyles.colors.primary,
            headerTintColor: GlobalStyles.colors.text50,
            headerShadowVisible: false,
            headerStyle: {
                backgroundColor: GlobalStyles.colors.primary,
            },
        })
    }, [navigation]);

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    async function handleSalvar(refeicaoData) {
        setIsSubmitting(true);
        const refeicao = {
            nome: refeicaoData.food,
            horario: refeicaoData.time,
            idUsuario: idUsuario,
        }
        try {
            const id = await storeRefeicao(refeicao);
            refeicaoCtx.addRefeicao({ ...refeicao, id: id });
        } catch (error) {
            console.error("Erro ao salvar:", error);
        } finally {
            setIsSubmitting(false);
        }
    }

    async function handleDeleteCascade(idRefeicao) {
        try {
            const response = await fetchRefeicoesDiariasPorRefeicao(idRefeicao);
            for (let refeicaoDiaria of response) {
                await deleteRefeicaoDiaria(refeicaoDiaria.id);
                refeicoesDiariasCtx.removeRefeicaoDia(refeicaoDiaria.id);
            }
        } catch (error) {
            console.error("Erro ao deletar:", error);
        }
    }

    async function handleDelete(id) {
        setIsSubmitting(true);
        try {
            await handleDeleteCascade(id);
            await deleteRefeicao(id);
            refeicaoCtx.removeRefeicao(id);
        } catch (error) {
            console.error("Erro ao deletar:", error);
        } finally {
            setIsSubmitting(false);
        }
    }

    async function handleUpdate(id, refeicaoData) {
        setIsSubmitting(true);

        const refeicao = {
            nome: refeicaoData.nome,
            horario: refeicaoData.horario,
            idUsuario: idUsuario,
        };
    
        try {
            await atualizarRefeicao(id, refeicao);
            refeicaoCtx.updateRefeicao(id, { ...refeicao });
            setModalVisible(false);
        } catch (error) {
            console.error("Erro ao atualizar:", error);
        } finally {
            setIsSubmitting(false);
        }
    }

    if (isSubmitting) {
        return <LoadingOverlay />
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <FlatList
                    style={styles.flatlist}
                    data={refeicoes}
                    renderItem={({ item }) => <RefeicaoItem {...item} onPress={() => {
                        setVisibleModal(true);
                        setItemSelecionado({...item});
                    }}/>}
                    keyExtractor={(item) => item.id}
                />
            </View>

            <View style={styles.addButton}>
                <IconButton icon={'add'}
                            size={42}
                            color={GlobalStyles.colors.text50}
                            style={styles.button}
                            onPress={() => setModalVisible(true)}/>
            </View>

            <Modal
                transparent={true}
                visible={visibleModal}
                onRequestClose={() => setVisibleModal(false)}
            >
                <ModalEditar
                    handleClose={() => setVisibleModal(false)}
                    handleDelete={handleDelete}
                    valorDefault={itemSelecionado}
                    handleUpdate={handleUpdate}
                />
            </Modal>

            <Modal
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <ModalAdd handleSalvar={handleSalvar} handleClose={handleCloseModal} />
            </Modal>

        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalStyles.colors.background,
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
        color: GlobalStyles.colors.text50,
        fontWeight: 'bold',
        marginLeft: 15,
    },
    content: {
        flex: 1,
        marginTop: 20,
        marginHorizontal: '5%',
    },
    flatlist: {
        flex: 1,
        paddingTop: 1,
    },
    addButton: {
        position: 'absolute',
        bottom: 60,
        right: '7%',
    },
});
