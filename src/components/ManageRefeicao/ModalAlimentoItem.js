import {Alert, Modal, Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import {useState} from "react";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {GlobalStyles} from "../../constants/styles";

function ModalAlimentoItem({isVisible, onClose, onSave, nome, quantidadeBase, unidade}) {
    const [quantidade, setQuantidade] = useState(quantidadeBase.toString());
    const numeroValido = /^\d*([.,]?\d{0,2})?$/;

    function saveAlimentoHandler() {
        onSave(quantidade);
        setQuantidade(quantidadeBase.toString());
        onClose();
    }

    function closeModalHandler() {
        setQuantidade(quantidadeBase.toString());
        onClose();
    }

    function onChangeText(text) {
        if (numeroValido.test(text) || text === '') {
            setQuantidade(text);
        } else {
            Alert.alert('Aviso', 'Insira um número válido.');
        }
    }

    return (
        <Modal
            visible={isVisible}
            transparent={true}
            animationType={'fade'}
            onRequestClose={closeModalHandler}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>{nome}</Text>
                    <View>
                        <View style={styles.textInput}>
                            <MaterialCommunityIcons name="food-apple-outline" size={24} color="black"
                                                    style={styles.foodIcon}/>
                            <View>
                                <TextInput
                                    style={styles.input}
                                    keyboardType="decimal-pad"
                                    value={quantidade}
                                    onChangeText={onChangeText}
                                    maxLength={5}
                                />
                                <Text style={styles.textUnidade}>{unidade}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.buttonArea}>
                        <Pressable style={styles.buttonCancel} onPress={closeModalHandler}>
                            <Text style={styles.button}>Cancelar</Text>
                        </Pressable>
                        <Pressable style={styles.buttonSave} onPress={saveAlimentoHandler}>
                            <Text style={styles.button}>Adicionar</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default ModalAlimentoItem;

const styles = StyleSheet.create({
    centeredView: {
        backgroundColor: GlobalStyles.colors.backgroundModal,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalView: {
        margin: 30,
        backgroundColor: GlobalStyles.colors.background,
        borderRadius: 3,
        paddingVertical: 20,
        paddingHorizontal: 30,
        alignItems: "center",
    },
    modalText: {
        fontSize: 20,
        fontWeight: "bold",
        color: GlobalStyles.colors.text800,
        marginBottom: 10,
    },
    input: {
        padding: 1,
        paddingBottom: 5,
        fontSize: 20,
        textAlign: 'center',
        width: 80,
        borderBottomWidth: 1,
        borderBottomColor: GlobalStyles.colors.text100,
    },
    textUnidade: {
        fontSize: 15,
        textAlign: 'center',
        color: GlobalStyles.colors.text100,
    },
    buttonArea: {
        flexDirection: "row",
        alignItems: 'center',
        marginTop: 10,
    },
    buttonSave: {
        justifyContent: 'center',
        fontSize: 20,
        marginLeft: 15,
    },
    buttonCancel: {
        justifyContent: 'center',
        fontSize: 20,
        marginRight: 15,
    },
    button: {
        fontSize: 15,
        fontWeight: 'bold',
        color: GlobalStyles.colors.primary,
    },
    textInput: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: 1,
        paddingBottom: 5,
        marginVertical: 5,
    },
    foodIcon: {
        marginTop: 2,
        marginRight: 10,
    },
});