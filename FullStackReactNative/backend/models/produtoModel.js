const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String },
  quantidade: { type: Number, required: true },
  foto: { type: String },
});

module.exports = mongoose.model('Produto', produtoSchema);