import {StyleSheet, Text, View} from "react-native";
import IconButton from "../ui/IconButton";
import {useNavigation} from "@react-navigation/native";

function RefeicaoItem({id, idUsuario, nome, horario, data, calorias}) {
    const navigation = useNavigation();

    function addRefeicaoHandler() {
        navigation.navigate('ManageRefeicao', {
            id: id,
            idUsuario: idUsuario,
            data: data,
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.texts}>
                <Text>{nome}</Text>
                <Text>{horario}</Text>
                {calorias > 0 && <Text>{calorias} kcal</Text>}
            </View>
            <View style={styles.icon}>
                <IconButton icon={'add'} size={36} color={'white'} onPress={addRefeicaoHandler}/>
            </View>
        </View>
    )
}

export default RefeicaoItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#7D9C3E',
        marginVertical: 5,
        paddingVertical: 10,
        paddingHorizontal: '6%',
    },
    texts: {
        justifyContent: 'center',
    },
    icon: {
        justifyContent: 'center',
    },
})