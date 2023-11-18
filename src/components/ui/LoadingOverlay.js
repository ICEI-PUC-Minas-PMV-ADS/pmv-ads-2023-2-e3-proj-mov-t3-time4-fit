import {ActivityIndicator, StyleSheet, Text, View} from "react-native";
import {GlobalStyles} from "../../constants/styles";

function LoadingOverlay({ message }) {
    return (
        <View style={styles.loadingContainer}>
            <Text style={styles.message}>{message}</Text>
            <ActivityIndicator size="large" />
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
        fontSize: 16,
        marginBottom: 12,
    },
})