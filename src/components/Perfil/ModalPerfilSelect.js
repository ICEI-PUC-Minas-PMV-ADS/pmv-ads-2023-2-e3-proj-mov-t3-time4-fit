import {Modal, Pressable, StyleSheet, Text, View} from "react-native";
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
            <Pressable
                style={styles.centeredView}
                onPress={event => event.target === event.currentTarget && closeModalHandler()}
            >
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>{titulo}</Text>
                    <View>
                        <Pressable style={styles.input} onPress={editCampoHandler1}>
                            <Text style={styles.button}>{valor1}</Text>
                        </Pressable>
                        <Pressable style={styles.input} onPress={editCampoHandler2}>
                            <Text style={styles.button}>{valor2}</Text>
                        </Pressable>
                        <Pressable style={styles.input} onPress={editCampoHandler3}>
                            <Text style={styles.button}>{valor3}</Text>
                        </Pressable>
                    </View>
                </View>
            </Pressable>
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
        alignItems: 'center',
    },
    button: {
        fontSize: 17,
        fontWeight: 'bold',
        color: GlobalStyles.colors.primary,
        marginTop: 10,
    },
});