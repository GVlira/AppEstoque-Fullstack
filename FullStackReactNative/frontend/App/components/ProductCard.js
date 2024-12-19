import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ProductCard({ product, onDelete, onEdit }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{product.nome}</Text>
      <Text>{product.descricao}</Text>
      <Text>Quantidade: {product.quantidade}</Text>
      <Button title="Editar" onPress={onEdit} />
      <Button title="Deletar" onPress={() => onDelete(product.id)} color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
