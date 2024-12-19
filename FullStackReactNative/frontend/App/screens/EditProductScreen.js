import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProductForm from '../components/ProductForm';

export default function EditProductScreen({ route, navigation }) {
  const { product } = route.params;

  const updateProduct = (updatedProduct) => {
    // Lógica de atualização (simulada aqui)
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ProductForm product={product} onSubmit={updateProduct} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
