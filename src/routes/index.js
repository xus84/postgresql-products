const { Router } = require('express');
const router = Router();


const { getProducts, createProduct } = require('../controllers/product.controller')

router.get('/products', getProducts)
router.post('/products', createProduct)



module.exports = router;