import {ActivityIndicator, StyleSheet, View} from "react-native";
import {GlobalStyles} from "../../constants/styles";

function LoadingOverlay() {
    return (
        <View style={styles.loadingContainer}>
            <ActivityIndicator size={'large'} color={GlobalStyles.colors.primary}/>
        </View>
    )
}

export default LoadingOverlay;

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: GlobalStyles.colors.background,
    },
})