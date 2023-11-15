import {StyleSheet, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {GlobalStyles} from "../../constants/styles";
import IconButton from "../ui/IconButton";

function ExplorarSearchItem({id, nomeCompleto, metaCalorica}) {
    const navigation = useNavigation();

    function onPressHandler() {
        navigation.navigate('HomeVisitor',
            {
                idUsuario: id,
                nome: nomeCompleto,
                metaCalorica: metaCalorica,
            });
    }

    return (
        <View style={styles.container} onPress={onPressHandler}>
            <View style={styles.texts}>
                <Text style={styles.textTitle}>{nomeCompleto}</Text>
                <Text style={styles.textInfo}>{metaCalorica} kcal</Text>
            </View>
            <View style={styles.icon}>
                <IconButton
                    icon={'chevron-forward'}
                    size={24}
                    color={GlobalStyles.colors.text50}
                    style={styles.button}
                    onPress={onPressHandler}/>
            </View>
        </View>
    )
}

export default ExplorarSearchItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
        paddingVertical: 10,
        paddingHorizontal: '10%',
    },
    texts: {
        justifyContent: 'center',
    },
    textTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    textInfo: {
        fontSize: 18,
        color: GlobalStyles.colors.higlight,
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        borderRadius: 50,
    },
})