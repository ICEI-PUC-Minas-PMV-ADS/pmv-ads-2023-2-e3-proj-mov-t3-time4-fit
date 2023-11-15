import {StyleSheet, Text, View} from "react-native";


function ManageRefeicao({route, navigation}) {
    const id = route.params?.id;
    const idUsuario = route.params?.idUsuario;
    const data = route.params?.data;

    return (
        <View>
            <Text>Manage Refeicao</Text>
            <Text>Id Refeição: {id}</Text>
            <Text>Id Usuario: {idUsuario}</Text>
            <Text>Data: {data}</Text>
        </View>
    );

}

export default ManageRefeicao;

const styles = StyleSheet.create({})