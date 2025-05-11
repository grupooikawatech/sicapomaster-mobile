import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function ClienteList() {
  const clientes = [];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Clientes</Text>

      <FlatList
        data={clientes}
        keyExtractor={(item) => item.id?.toString() || Math.random().toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.nomeCliente}>{item.nome}</Text>
          </View>
        )}
        ListEmptyComponent={() => (
          <Text style={styles.mensagemVazia}>Nenhum cliente encontrado.</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  nomeCliente: { fontSize: 18 },
  mensagemVazia: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginTop: 50,
  },
});
