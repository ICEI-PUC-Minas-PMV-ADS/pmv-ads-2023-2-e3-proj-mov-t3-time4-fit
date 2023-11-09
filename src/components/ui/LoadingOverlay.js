import {ActivityIndicator, StyleSheet, View} from "react-native";

function LoadingOverlay() {
    return (
        <View style={styles.loadingContainer}>
            <ActivityIndicator size={'large'} color={'white'}/>
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
    },
})