const { Router } = require('express');
const router = Router();
const data = require('../data');

router.get('/data', (req, res ) => {
    res.json(data)
})


module.exports = router;