import {StyleSheet, Text, View} from "react-native";
import AlimentoItem from "./AlimentoItem";

function AlimentosList({refeicoesDiarias, onDelete}) {
    const caloriasTotais = refeicoesDiarias.reduce((acc, refeicaoDiaria) => acc + refeicaoDiaria.calorias, 0);

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Lista de Alimentos</Text>
                <Text style={styles.title}>Total: <Text style={styles.calorias}>{caloriasTotais}</Text> kcal</Text>
            </View>
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
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        paddingHorizontal: '2%',
    },
    title: {
        fontSize: 16,
    },
    calorias: {
        fontWeight: 'bold',
    }
})