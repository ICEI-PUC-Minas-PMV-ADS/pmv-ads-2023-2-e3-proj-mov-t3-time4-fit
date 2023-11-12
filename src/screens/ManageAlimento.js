import {StyleSheet, Text, View} from "react-native";

function ManageAlimento({navigation, route}) {
    const {id, nome, calorias, quantidadeBase, unidade, unidades, idRefeicao, idUsuario, data} = route.params;

    return (
        <View>
            <Text>ID: {id}</Text>
            <Text>NOME: {nome}</Text>
            <Text>CALORIAS: {calorias}</Text>
            <Text>QUANTIDADE BASE: {quantidadeBase}</Text>
            <Text>UNIDADE: {unidade}</Text>
            <Text>UNIDADES: {unidades}</Text>
            <Text>ID REFEICAO: {idRefeicao}</Text>
            <Text>ID USUARIO: {idUsuario}</Text>
            <Text>DATA: {data}</Text>
        </View>
    )
}

export default ManageAlimento;

const styles = StyleSheet.create({})