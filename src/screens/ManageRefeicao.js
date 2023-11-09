import {StyleSheet, View, Text} from "react-native";

function ManageRefeicao({route, navigation}) {
    const id = route.params?.id;
    const idUsuario = route.params?.idUsuario;

    return (
        <View>
            <Text>Manage Refeicao</Text>
            <Text>Id: {id}</Text>
            <Text>Id Usuario: {idUsuario}</Text>
        </View>
    );

}

export default ManageRefeicao;

const styles = StyleSheet.create({})