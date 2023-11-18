import {ActivityIndicator, StyleSheet, Text, View} from "react-native";
import {GlobalStyles} from "../../constants/styles";

function LoadingOverlay({ message }) {
    return (
        <View style={styles.loadingContainer}>
            <Text style={styles.message}>{message}</Text>
            <ActivityIndicator size="large" color={GlobalStyles.colors.primary}/>
        </View>
    );
}

export default LoadingOverlay;

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 32,
        backgroundColor: GlobalStyles.colors.background,
    },
    message: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 24,
        color: GlobalStyles.colors.primary,
    },
})