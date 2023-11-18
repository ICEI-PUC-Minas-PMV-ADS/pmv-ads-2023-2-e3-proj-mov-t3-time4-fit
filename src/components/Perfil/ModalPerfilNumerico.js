import {Alert, Modal, Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import {useEffect, useState} from "react";
import {GlobalStyles} from "../../constants/styles";

function ModalPerfilNumerico({isVisible, onClose, onSave, titulo, valorBase, unidade, validador, variavel}) {
    const [valor, setValor] = useState(valorBase?.toString());

    useEffect(() => {
        setValor(valorBase?.toString());
    }, [valorBase]);

    function editCampoHandler() {
        onSave(variavel, valor);
        setValor(valorBase?.toString());
        onClose();
    }

    function closeModalHandler() {
        setValor(valorBase?.toString());
        onClose();
    }

    function onChangeText(text) {
        if (validador.test(text) || text === '') {
            setValor(text);
        } else {
            Alert.alert('Aviso', 'Insira um número válido.');
        }
        setValor(text);
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
                    <Text style={styles.modalText}>{titulo}</Text>
                    <View>
                        <View style={styles.textInput}>
                            <View>
                                <TextInput
                                    style={styles.input}
                                    keyboardType="number-pad"
                                    value={valor}
                                    onChangeText={onChangeText}
                                />
                                <Text style={styles.textUnidade}>{unidade}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.buttonArea}>
                        <Pressable style={styles.buttonCancel} onPress={closeModalHandler}>
                            <Text style={styles.button}>Cancelar</Text>
                        </Pressable>
                        <Pressable style={styles.buttonSave} onPress={editCampoHandler}>
                            <Text style={styles.button}>{titulo}</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default ModalPerfilNumerico;

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