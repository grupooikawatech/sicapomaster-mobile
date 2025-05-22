
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Unable to resolve "@react-navigation/native"']); 
import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SQLite from 'expo-sqlite';
import HomeScreen from './src/screens/HomeScreen';
import PedidosScreen from './src/screens/pedidosScreen';
import PedidosRealizados from './src/screens/pedidosRealizados';
import ListaClientes from './src/screens/listaClientes';
import AdicionarClientes from './src/screens/adicionarClientes';
import ProdutosScreen from './src/screens/produtosScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    const loadDatabase = async () => {
      try {
        const localDb = SQLite.openDatabaseSync('webapp.db');
        
        // Verifica se o banco já existe
        const dbFileInfo = await FileSystem.getInfoAsync(
          `${FileSystem.documentDirectory}SQLite/webapp.db`
        );

        if (!dbFileInfo.exists) {
          // Carrega o arquivo do bundle
          const asset = asset.fromModule(require('./assets/webapp.db'));
          await asset.downloadAsync();

          // Copia para o diretório SQLite
          await FileSystem.makeDirectoryAsync(
            `${FileSystem.documentDirectory}SQLite`,
            { intermediates: true }
          );
          
          await FileSystem.copyAsync({
            from: asset.localUri,
            to: `${FileSystem.documentDirectory}SQLite/webapp.db`,
          });
        }

        // Testa a conexão
        await db.transaction(tx => {
          tx.executeSql('SELECT 1', [], () => {
            Alert.alert('Sucesso', 'Banco carregado!');
          });
        });

      } catch (error) {
        Alert.alert('Erro', error.message);
      }
    };

    loadDatabase();
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