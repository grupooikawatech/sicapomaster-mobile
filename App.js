import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import PedidosScreen from './src/screens/pedidosScreen';
import PedidosRealizados from './src/screens/pedidosRealizados';
import ListaClientes from './src/screens/listaClientes';
import AdicionarClientes from './src/screens/adicionarClientes';
import ProdutosScreen from './src/screens/produtosScreen';
import React, { useEffect } from 'react';
import { Alert, View, Text, StyleSheet } from 'react-native';
import SQLite from 'react-native-sqlite-storage';

const Stack = createNativeStackNavigator();

SQLite.enablePromise(true); // Recomendado para usar com async/await

export default function App() {
  useEffect(() => {
    const conectarBanco = async () => {
      try {
        const db = await SQLite.openDatabase({
          name: 'webapp.db',
          location: 'default',
          createFromLocation: 1, // <- isso importa o banco já existente
        });

        // Teste simples
        await db.executeSql('SELECT 1');

        Alert.alert('Sucesso', 'Banco de dados carregado com sucesso!');
      } catch (error) {
        Alert.alert('Erro', 'Falha ao abrir o banco: ' + error.message);
      }
    };

    conectarBanco();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Pedidos"
          component={PedidosScreen}
          options={{ title: 'Novo Pedido' }}
        />
        <Stack.Screen
          name="PedidosRealizados"
          component={PedidosRealizados}
          options={{ title: 'Histórico' }}
        />
        <Stack.Screen 
          name="AdicionarClientes"
          component={AdicionarClientes} 
          options={{ title: 'Adicionar Clientes' }} 
        />
        <Stack.Screen 
          name="ListaClientes"
          component={ListaClientes} 
          options={{ title: 'Clientes' }} 
        />
        <Stack.Screen
          name="Produtos"
          component={ProdutosScreen}
          options={{ title: 'Produtos' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}