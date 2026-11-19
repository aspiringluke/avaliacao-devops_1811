const express = require('express');
const router = express.Router();
const ProdutoController = require('../controllers/produtosController');

router.get('/', ProdutoController.listAll);
router.post('/', ProdutoController.createProdutos);

module.exports = router;
