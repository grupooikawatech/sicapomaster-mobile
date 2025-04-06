import { View, Text, StyleSheet } from "react-native";

export function PedidosRealizados() {
    return (
        <View style={styles.container}>
            <Text> Consulte os pedidos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
        alignItems: 'center',
    }
})