import {ActivityIndicator, StyleSheet, View} from "react-native";

function LoadingOverlay() {
    return (
        <View style={styles.loadingContainer}>
            <ActivityIndicator size={'large'} color={'#7D9C3E'}/>
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
        backgroundColor: 'white',
    },
})