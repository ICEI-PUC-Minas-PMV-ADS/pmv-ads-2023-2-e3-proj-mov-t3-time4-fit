import {Alert, Modal, Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import {useEffect, useState} from "react";
import {GlobalStyles} from "../../constants/styles";

function ModalPerfilBool({isVisible, onClose, onSave, titulo, valor1, valor2, variavel}) {


    function editCampoHandler1() {
        onSave(variavel, true);
        onClose();
     }

     function editCampoHandler2() {
        onSave(variavel, false);
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
            <Pressable
                style={styles.centeredView}
                onPress={event => event.target === event.currentTarget && closeModalHandler()}
            >
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>{titulo}</Text>
                    <View>
                        <Pressable onPress={editCampoHandler1}>
                            <Text style={styles.button}>{valor1}</Text>
                        </Pressable>
                        <Pressable onPress={editCampoHandler2}>
                            <Text style={styles.button}>{valor2}</Text>
                        </Pressable>
                    </View>
                </View>
            </Pressable>
        </Modal>
    );
}

export default ModalPerfilBool;

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
    button: {
        fontSize: 17,
        fontWeight: 'bold',
        color: GlobalStyles.colors.primary,
        marginTop: 10,
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