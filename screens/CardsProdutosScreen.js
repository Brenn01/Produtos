import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const produtos = [
  { id: '1', nome: 'Produto 1', imagem: 'https://artwalk.vtexassets.com/arquivos/ids/516416/DZ548-5-130-1-800x1000.jpg?v=638499942801300000', preco: 'R$ 50,00' },
  { id: '2', nome: 'Produto 2', imagem: 'https://cloviscalcados.vteximg.com.br/arquivos/ids/1104955/Tenis-Masculino-Vega-Ollie-600-7584418_051-01.jpg?v=638538144522530000', preco: 'R$ 70,00' },
  { id: '3', nome: 'Produto 3', imagem: 'https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(80)/elitedos/catalog/49068ca-2763-cam-linho-conf-bco-cam-cafe-1.jpg', preco: 'R$ 90,00' }
];

const CardsProdutosScreen = ({ navigation }) => {
  const renderProduto = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => alert(`Você selecionou: ${item.nome}`)}>
      <Image source={{ uri: item.imagem }} style={styles.imagem} />
      <Text style={styles.nome}>{item.nome}</Text>
      <Text style={styles.preco}>{item.preco}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Produtos</Text>
      <FlatList
        data={produtos}
        renderItem={renderProduto}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  lista: {
    paddingBottom: 16,
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  imagem: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  preco: {
    fontSize: 14,
    color: '#888',
  },
});

export default CardsProdutosScreen;
