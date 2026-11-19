const express = require('express');
const router = express.Router();

const produtoRoute = require('./produtosRoute');
router.use('/produtos', produtoRoute);

module.exports = router;