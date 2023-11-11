import {StyleSheet, Text, View} from "react-native";

function SearchAlimento({navigation, route}) {
    const {idRefeicao, idUsuario, data} = route.params;

    return (
        <View>
            <Text>Search Alimento</Text>
            <Text>ID Refeição: {idRefeicao}</Text>
            <Text>ID Usuário: {idUsuario}</Text>
            <Text>Data: {data}</Text>
        </View>
    )
}

export default SearchAlimento;

const styles = StyleSheet.create({})