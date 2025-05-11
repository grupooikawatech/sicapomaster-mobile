import { StyleSheet, View, Text } from "react-native"


export function ProdutoListagem(props) {
    const valorFormatado = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(props.produto.precoUnitario);

    return (
        <View style={styles.card}>
            <Text style={styles.cardTitle}> {props.produto.descricao}
            </Text>
            <Text style={styles.cardValue}> {props.produto.formato}
            </Text>
            <Text style={styles.cardValue}> {valorFormatado}
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        padding: 20,
        alignItems: 'center',
    },
    header: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#222',
        padding: 20,
        borderRadius: 10,
        width: '100%',
        marginBottom: 15,
        alignItems: 'center',
    },
    cardTitle: {
        color: '#ccc',
        fontSize: 18,
    },
    cardValue: {
        color: 'white',
        fontSize: 14,
    },
    button: {
        marginTop: 20,
        backgroundColor: '#ff4d4d',
        padding: 15,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});