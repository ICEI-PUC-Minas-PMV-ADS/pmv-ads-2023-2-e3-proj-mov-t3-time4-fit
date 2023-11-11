import {StyleSheet, Text, View} from "react-native";
import AlimentoItem from "./AlimentoItem";

function AlimentosList({refeicoesDiarias, onDelete}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Alimentos</Text>
            {refeicoesDiarias.map((refeicaoDiaria) => {
                return <AlimentoItem key={refeicaoDiaria.id} {...refeicaoDiaria} onDelete={onDelete}/>
            })}
        </View>
    )
}

export default AlimentosList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 10,
        marginHorizontal: '5%',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
})