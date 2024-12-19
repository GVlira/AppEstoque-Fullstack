import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import ProductForm from '../components/ProductForm';

export default function AddProductScreen({ navigation }) {
  const [products, setProducts] = useState([]);

  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ProductForm onSubmit={addProduct} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
