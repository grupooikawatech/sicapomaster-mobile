import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import PedidosScreen from './src/screens/pedidosScreen';
import PedidosRealizados from './src/screens/pedidosRealizados';
import ListaClientes from './src/screens/listaClientes';
import AdicionarClientes from '/home/pc/projetos/sicapomaster-mobile/src/screens/adicionarClientes'
const Stack = createNativeStackNavigator();

export default function App() {
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
          options={{ title: 'AdicionarClientes' }} 
        />
        <Stack.Screen 
          name="ListaClientes" 
          component={ListaClientes} 
          options={{ title: 'Clientes' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}