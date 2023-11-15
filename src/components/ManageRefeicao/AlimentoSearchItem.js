import {StyleSheet, Text, View} from "react-native";
import IconButton from "../ui/IconButton";
import {GlobalStyles} from "../../constants/styles";
import {useNavigation} from "@react-navigation/native";
import {useContext, useState} from "react";
import ModalAlimentoItem from "./ModalAlimentoItem";
import {RefeicoesDiariasContext} from "../../store/refeicoes-diarias-context";
import {storeRefeicaoDiaria} from "../../gateway/http-refeicoes-diarias";

function AlimentoSearchItem({id, nome, calorias, quantidadeBase, unidade, unidades,
                                unidadeAgnostica, idRefeicao, idUsuario, data}) {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const navigation = useNavigation();
    const refeicoesDiariasCtx = useContext(RefeicoesDiariasContext);

    function addAlimentoHandler() {
        setIsModalVisible(true);
    }

    function closeModalHandler() {
        setIsModalVisible(false);
    }

    async function saveAlimentoHandler(quantidadeString) {
        try {
            let quantidade = parseFloat(quantidadeString.replace(',', '.'));
            let caloriasRefeicao = parseFloat(((quantidade / quantidadeBase) * calorias).toFixed());
            let unidadeRefeicao = caloriasRefeicao > 1 ? unidades : unidade;

            const refeicaoDiaria = {
                idRefeicao: idRefeicao,
                idUsuario: idUsuario,
                data: data,
                comida: nome,
                quantidade: quantidade,
                calorias: caloriasRefeicao,
                unidade: unidadeRefeicao,
            };

            const id = await storeRefeicaoDiaria(refeicaoDiaria);
            refeicoesDiariasCtx.addRefeicaoDia({...refeicaoDiaria, id: id});
        } catch (error) {
            console.log(error);
        } finally {
            navigation.goBack();
        }
    }

    let unidadeUsada = quantidadeBase > 1 ? unidades : unidade;

    return (
        <View style={styles.container}>
            <View style={styles.texts}>
                <Text style={styles.textTitle}>{nome}</Text>
                <Text style={styles.textInfo}>{quantidadeBase} {unidadeUsada} - {calorias} kcal</Text>
            </View>
            <View style={styles.icon}>
                <IconButton
                    icon={'add'}
                    size={24}
                    color={GlobalStyles.colors.text50}
                    style={styles.button}
                    onPress={addAlimentoHandler}/>
            </View>
            <ModalAlimentoItem
                isVisible={isModalVisible}
                onClose={closeModalHandler}
                onSave={saveAlimentoHandler}
                nome={nome}
                calorias={calorias}
                quantidadeBase={quantidadeBase}
                unidade={unidadeAgnostica}
            />
        </View>
    )
}

export default AlimentoSearchItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
        paddingVertical: 10,
        paddingHorizontal: '10%',
    },
    texts: {
        justifyContent: 'center',
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        borderRadius: 50,
    },
    textTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    textInfo: {
        fontSize: 18,
        color: GlobalStyles.colors.higlight,
    }
})