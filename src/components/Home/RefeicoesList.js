import {FlatList, StyleSheet, View} from "react-native";
import RefeicaoItem from "./RefeicaoItem";

function renderRefeicaoItem(itemData) {
    return (
        <RefeicaoItem {...itemData.item}/>
    )
}

function RefeicoesList({refeicoes}) {
    return (
        <View style={styles.container}>
            <FlatList data={refeicoes} renderItem={renderRefeicaoItem} keyExtractor={(refeicao) => refeicao.id} />
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