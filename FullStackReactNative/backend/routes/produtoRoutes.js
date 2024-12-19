const express = require('express');
const multer = require('multer');
const path = require('path');
const {
  getProdutos,
  createProduto,
  updateProduto,
  deleteProduto,
} = require('../controllers/produtoController');

const router = express.Router();

// Configuração do multer para upload de fotos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Rotas CRUD
router.get('/', getProdutos);
router.post('/', upload.single('foto'), createProduto);
router.put('/:id', upload.single('foto'), updateProduto);
router.delete('/:id', deleteProduto);

// Rota GET para estoque
router.get('/estoque', (req, res) => {
  res.json({ mensagem: 'Rota /estoque funcionando!' });
});

module.exports = router;
