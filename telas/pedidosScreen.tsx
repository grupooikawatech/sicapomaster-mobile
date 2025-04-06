import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export function PedidosScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    const voltar = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Pedidos</Text>
            <TouchableOpacity style={styles.button} onPress={voltar}>
                <Text style={styles.buttonText}>Finalizar</Text>
            </TouchableOpacity>
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
    texto: {
        color: 'white',
        fontSize: 25
    },
    button: {
        backgroundColor: '#1e90ff',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
      },
  });