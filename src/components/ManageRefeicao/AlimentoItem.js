import {StyleSheet, View, Text} from "react-native";
import IconButton from "../ui/IconButton";
import {GlobalStyles} from "../../constants/styles";

function AlimentoItem({id, comida, quantidade, unidade, calorias, onDelete}) {
    function removeAlimentoHandler() {
        onDelete(id);
    }

    return (
        <View style={styles.container}>
            <View>
                <Text>{comida}</Text>
                <Text>{quantidade} {unidade} - {calorias} kcal</Text>
            </View>
            <View>
                <IconButton icon={'trash'} size={16} color={GlobalStyles.colors.error} onPress={removeAlimentoHandler}/>
            </View>
        </View>
    )
}

export default AlimentoItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: GlobalStyles.colors.primary,
        marginVertical: 5,
        paddingVertical: 10,
        paddingHorizontal: '6%',
    },
})