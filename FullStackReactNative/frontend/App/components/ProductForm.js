import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, ActivityIndicator } from 'react-native';

export default function ProductForm({ product = {}, onSubmit }) {
  const [nome, setNome] = useState(product.nome || '');
  const [descricao, setDescricao] = useState(product.descricao || '');
  const [quantidade, setQuantidade] = useState(product.quantidade || '');
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    const newProduct = {
      id: product.id || Date.now(),
      nome,
      descricao,
      quantidade: parseInt(quantidade, 10),
    };
    onSubmit(newProduct);
    setLoading(false); 
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        value={quantidade}
        onChangeText={setQuantidade}
        keyboardType="numeric"
      />
      {loading ? (
        <ActivityIndicator size="large" color="#007BFF" /> 
      ) : (
        <Button
          title="Salvar"
          onPress={() => {
            setLoading(true);
            handleSubmit();
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
});
