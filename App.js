import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import PedidosScreen from './src/screens/pedidosScreen';
import PedidosRealizados from './src/screens/pedidosRealizados';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}