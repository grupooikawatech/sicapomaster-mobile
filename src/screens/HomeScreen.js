import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sicapo Master</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('Pedidos')}
        style={styles.card}
      >
        <Text style={styles.cardTitle}>Cadastrar Novo Pedido</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('PedidosRealizados')}
        style={styles.card}
      >
        <Text style={styles.cardTitle}>Pedidos Realizados</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Produtos')}
        style={styles.card}
      >
        <Text style={styles.cardTitle}>Produtos</Text>
      </TouchableOpacity>
    </View>
  );
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
    fontSize: 22,
    fontWeight: 'bold',
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