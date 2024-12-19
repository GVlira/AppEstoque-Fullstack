const Produto = require('../models/produtoModel');

// Listar todos os produtos
exports.getProdutos = async (req, res) => {
  try {
    const produtos = await Produto.find();
    res.json(produtos);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar produtos' });
  }
};

// Criar um novo produto
exports.createProduto = async (req, res) => {
  const { nome, descricao, quantidade } = req.body;
  const foto = req.file ? req.file.filename : null;

  try {
    const produto = new Produto({ nome, descricao, quantidade, foto });
    await produto.save();
    res.status(201).json(produto);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar produto' });
  }
};

// Atualizar um produto
exports.updateProduto = async (req, res) => {
  const { id } = req.params;
  const { nome, descricao, quantidade } = req.body;
  const foto = req.file ? req.file.filename : null;

  try {
    const produto = await Produto.findByIdAndUpdate(
      id,
      { nome, descricao, quantidade, foto },
      { new: true }
    );
    res.json(produto);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar produto' });
  }
};

// Deletar um produto
exports.deleteProduto = async (req, res) => {
  const { id } = req.params;

  try {
    await Produto.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar produto' });
  }
};
