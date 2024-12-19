const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const corsMiddleware = require('./middlewares/corsMiddleware');
const produtoRoutes = require('./routes/produtoRoutes');
const connectDB = require('./config/db');
require('dotenv').config();

// Conectar ao MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(corsMiddleware);
app.use(bodyParser.json());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.get('/', (req, res) => res.send('API rodando!'));

// Rotas
app.use('/produtos', produtoRoutes);

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});