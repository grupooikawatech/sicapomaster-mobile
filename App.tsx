import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const DashboardScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const redirecionar = (rota: string) => {
    navigation.navigate(rota) // Voltar para a tela de login
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sicapo Master</Text>

      <TouchableOpacity onPress={() => redirecionar('Pedidos')} style={styles.card}>
        <Text style={styles.cardTitle}>Cadastrar Novo Pedido</Text>
      </TouchableOpacity>


      <TouchableOpacity onPress={() => redirecionar('PedidosRealizados')} style={styles.card}>
        <Text style={styles.cardTitle}>Pedidos Realizados</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>

        <Text style={styles.cardTitle}>Teste</Text>
        <Text style={styles.cardValue}>123</Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </View >
  );
};

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

export default DashboardScreen;
