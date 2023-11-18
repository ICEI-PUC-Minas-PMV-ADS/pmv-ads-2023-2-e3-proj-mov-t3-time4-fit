import {Alert, Modal, Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import {useEffect, useState} from "react";
import {GlobalStyles} from "../../constants/styles";

function ModalPerfilSelect({isVisible, onClose, onSave, titulo, valor1, valor2, valor3 , variavel}) {


    function editCampoHandler1() {
        onSave(variavel, valor1);
        onClose();
     }

     function editCampoHandler2() {
        onSave(variavel, valor2);
        onClose();
     }

     function editCampoHandler3() {
        onSave(variavel, valor3);
        onClose();
     }
     

    function closeModalHandler() {
        onClose();
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
                        <Pressable onPress={editCampoHandler1}>
                            <Text style={styles.button}>{valor1}</Text>
                        </Pressable>
                        <Pressable onPress={editCampoHandler2}>
                            <Text style={styles.button}>{valor2}</Text>
                        </Pressable>
                        <Pressable onPress={editCampoHandler3}>
                            <Text style={styles.button}>{valor3}</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default ModalPerfilSelect;

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