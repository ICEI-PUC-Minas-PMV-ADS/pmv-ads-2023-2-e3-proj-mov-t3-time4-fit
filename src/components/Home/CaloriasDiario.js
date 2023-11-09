import {StyleSheet, Text, View} from "react-native";
import {AnimatedCircularProgress} from 'react-native-circular-progress';

function CaloriasDiario({caloriasConsumidas, caloriasMeta}) {
    let caloriasConsumidasNumber = parseFloat(caloriasConsumidas);
    let caloriasMetaNumber = parseFloat(caloriasMeta);
    let caloriasRestantesNumber = caloriasMetaNumber - caloriasConsumidasNumber;
    let caloriasConsumidasPercent = caloriasConsumidasNumber / caloriasMetaNumber * 100;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>CALORIAS</Text>
            <View style={styles.containerCalorias}>
                <View style={styles.containerCaloria}>
                    <Text>Consumidas</Text>
                    <Text>
                        {caloriasConsumidas} kcal
                    </Text>
                </View>

                <View>
                    <AnimatedCircularProgress
                        size={100}
                        width={5}
                        fill={caloriasConsumidasPercent}
                        tintColor="#00e0ff"
                        backgroundColor="#3d5875">
                        {() => {
                            return (
                                <View style={styles.containerCaloria}>
                                    <Text>Meta</Text>
                                    <Text>{caloriasMeta}</Text>
                                </View>
                            )
                        }}
                    </AnimatedCircularProgress>
                </View>

                <View style={styles.containerCaloria}>
                    <Text>Restantes</Text>
                    <Text>
                        {caloriasRestantesNumber} kcal
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default CaloriasDiario;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#7D9C3E",
        justifyContent: 'center',
        margin: '5%',
        padding: '5%',
        borderRadius: 20,
    },
    title:{
      textAlign: 'center',
    },
    containerCalorias: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 10,
    },
    containerCaloria: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
});