import {StyleSheet, View} from "react-native";
import RefeicaoItem from "./RefeicaoItem";

function RefeicoesList({refeicoes, refeicoesDiarias, data}) {
    return (
        <View style={styles.container}>
            {refeicoes.map((refeicao) => {
                const calorias = refeicoesDiarias
                    .filter(refeicaoDiaria => refeicaoDiaria.idRefeicao === refeicao.id)
                    .reduce((total, refeicaoDiaria) => total + refeicaoDiaria.calorias, 0);
                return <RefeicaoItem key={refeicao.id} {...refeicao} calorias={calorias} data={data}/>
            })}
        </View>
    )
}

export default RefeicoesList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 10,
        marginHorizontal: '5%',
    },
})