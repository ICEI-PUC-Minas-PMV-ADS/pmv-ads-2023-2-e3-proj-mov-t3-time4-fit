import {Modal, StyleSheet} from "react-native";
import {useState} from "react";

function ModalAlimentoItem({isVisible, onClose, onSave, nome, calorias, quantidadeBase, unidade, unidades}) {
    const [quantidade, setQuantidade] = useState(quantidadeBase);

    function saveAlimentoHandler() {
        onSave(quantidade);
        setQuantidade(quantidadeBase);
        onClose();
    }

    function onChangeText(text) {
        setQuantidade(text);
    }

    return (
        <Modal
            visible={isVisible}
            transparent={true}
            animationType={'slide'}
            onRequestClose={onClose}
        >

        </Modal>
    )

}

export default ModalAlimentoItem;

const styles = StyleSheet.create({

})