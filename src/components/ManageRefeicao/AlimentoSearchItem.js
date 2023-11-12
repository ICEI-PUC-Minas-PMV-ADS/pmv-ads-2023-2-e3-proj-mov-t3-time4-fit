import {StyleSheet, Text, View} from "react-native";
import IconButton from "../ui/IconButton";
import {GlobalStyles} from "../../constants/styles";
import {useNavigation} from "@react-navigation/native";

function AlimentoSearchItem({id, nome, calorias, quantidadeBase, unidade, unidades, idRefeicao, idUsuario, data}) {
    const navigation = useNavigation();

    function addAlimentoHandler() {
        navigation.navigate('ManageAlimento', {
            id: id,
            nome: nome,
            calorias: calorias,
            quantidadeBase: quantidadeBase,
            unidade: unidade,
            unidades: unidades,
            idRefeicao: idRefeicao,
            idUsuario: idUsuario,
            data: data,
        });
    }

    let unidadeUsada = unidade;
    if (quantidadeBase > 1) {
        unidadeUsada = unidades
    }

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