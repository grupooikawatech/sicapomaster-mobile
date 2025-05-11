import React from 'react';
import { StyleSheet } from 'react-native';
import { ProdutoListagem } from '../componentes/produto-listagem';
import { FlatList } from 'react-native';

const ProdutosScreen = () => {
  const produtos = [
    {
      id: 1,
      descricao: 'Sacola',
      formato: 'Retangular',
      precoUnitario: 0.72,
    },
    {
      id: 2,
      descricao: 'Saco',
      formato: 'Quadrado',
      precoUnitario: 0.38,
    },
    {
      id: 3,
      descricao: 'Sacolinha',
      formato: 'Oval',
      precoUnitario: 0.41,
    },
    {
      id: 4,
      descricao: 'Sacolinha',
      formato: 'Oval',
      precoUnitario: 0.41,
    }, {
      id: 5,
      descricao: 'Sacolinha',
      formato: 'Oval',
      precoUnitario: 0.41,
    }, {
      id: 6,
      descricao: 'Sacolinha',
      formato: 'Oval',
      precoUnitario: 0.41,
    }, {
      id: 7,
      descricao: 'Sacolinha',
      formato: 'Oval',
      precoUnitario: 0.41,
    }, {
      id: 8,
      descricao: 'Sacolinha',
      formato: 'Oval',
      precoUnitario: 0.41,
    }, {
      id: 9,
      descricao: 'Sacolinha',
      formato: 'Oval',
      precoUnitario: 0.41,
    }, {
      id: 10,
      descricao: 'Sacolinha',
      formato: 'Oval',
      precoUnitario: 0.41,
    },
  ]

  return (
    <FlatList
      data={produtos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <ProdutoListagem produto={item} />}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'black',
  },
  title: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#222',
    color: 'white',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#444',
    marginBottom: 10,
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

export default ProdutosScreen;