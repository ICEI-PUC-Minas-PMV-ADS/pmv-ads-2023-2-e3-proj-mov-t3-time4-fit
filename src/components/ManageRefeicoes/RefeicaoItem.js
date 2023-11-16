import {StyleSheet, Text, View} from "react-native";
import IconButton from "../ui/IconButton";
import {GlobalStyles} from "../../constants/styles";
import {Entypo} from "@expo/vector-icons";

function RefeicaoItem({id, nome, horario, onPress}) {
    function editRefeicaoHandler() {
        onPress(id);
    }

    return (
        <View style={styles.container}>
            <View style={styles.texts}>
                <Text>{nome}</Text>
                <Text>{horario}</Text>
            </View>
            <View style={styles.icon}>
                <Entypo
                    name={'dots-three-vertical'}
                    size={15}
                    color={GlobalStyles.colors.primary}
                    onPress={editRefeicaoHandler}/>
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
        borderColor: GlobalStyles.colors.primary,
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
    button: {
        backgroundColor: GlobalStyles.colors.error,
    }
})