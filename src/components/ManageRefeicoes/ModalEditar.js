import React, {useState} from "react";
import {Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import {MaterialCommunityIcons, SimpleLineIcons} from '@expo/vector-icons';
import {GlobalStyles} from "../../constants/styles";

export function ModalEditar({ handleClose, handleDelete, handleUpdate, valorDefault }) {
    const [food, setFood] = useState(valorDefault.nome);
    const [time, setTime] = useState(valorDefault.horario);
    const timeRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

    const handleFoodChange = (text) => {
        setFood(text);
    };
    
    const handleTimeChange = (text) => {
        let formattedTime = text;
    
        if (timeRegex.test(text)) {
            formattedTime = text;
        } else if (/^([01]?[0-9]|2[0-3])$/.test(text)) {
            if (text.length === 3) {
                formattedTime = text.slice(0, 2) + ":" + text.slice(2);
            } else if (text.length === 2) {
                formattedTime = text + ":";
            }
        }
        setTime(formattedTime);
    };

    function ExcluirRefeicao() {
        console.log(valorDefault);
        handleDelete(valorDefault.id);
        handleClose();
    }

    const AtualizarRefeicao = () => {
        console.log(valorDefault);
        handleUpdate(valorDefault.id, { nome: food, horario: time });
        handleClose();
    };

    return (
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>Editar Horário</Text>
                <View>
                    <View style={styles.timeInput}>
                        <MaterialCommunityIcons name="food-apple-outline" size={24} color="black" style={styles.foodIcon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Escolha a refeição"
                            value={food}
                            onChangeText={handleFoodChange}
                        />
                    </View>
                    <View style={styles.timeInput}>
                        <SimpleLineIcons name="clock" size={20} color="black" style={styles.clockIcon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Escolha o horário"
                            value={time}
                            onChangeText={handleTimeChange}
                        />
                    </View>
                </View>
                <View style={styles.buttonArea}>
                    <Pressable style={[styles.buttonSave, { marginRight: 'auto' }]} onPress={ExcluirRefeicao}>
                        <Text style={styles.button}>Excluir</Text>
                    </Pressable>
                    <View style={{ flex: 1 }} />
                    <Pressable style={[styles.buttonSave, { marginRight: 10 }]} onPress={handleClose}>
                        <Text style={styles.button}>Cancelar</Text>
                    </Pressable>
                    <Pressable style={[styles.buttonSave, { marginLeft: 10 }]} onPress={AtualizarRefeicao}>
                        <Text style={styles.button}>Salvar</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    centeredView: {
        backgroundColor: GlobalStyles.colors.backgroundModal,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalView: {
        margin: 30,
        backgroundColor: "white",
        borderRadius: 3,
        padding: 30,
        alignItems: "center",
    },
    modalText: {
        fontSize: 20,
        fontWeight: "bold",
        color: GlobalStyles.colors.text800,
        marginBottom: 25,
    },
    input: {
        padding: 1,
        paddingBottom: 5,
        marginVertical: 5,
    },
    buttonArea: {
        flexDirection: "row",
        width: '75%',
        marginTop: 15,
        alignItems: 'center',
    },
    button: {
        backgroundColor: GlobalStyles.colors.background,
        borderRadius: 5,
        fontSize: 15,
        fontWeight: 'bold',
        color: GlobalStyles.colors.primary,
    },
    timeInput: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: GlobalStyles.colors.text100,
        padding: 1,
        paddingBottom: 5,
        marginVertical: 5,
    },
    clockIcon: {
        marginRight: 10,
    },
    foodIcon: {
        marginRight: 10,
    },
    timeText: {
        flex: 2,
    },
})