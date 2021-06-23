const { json } = require('express');
const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'xusdeveloper',
    database: 'apiproduct',
    port: '5432'
});

const getProducts = async (req, res) => {
    const response = await pool.query('SELECT * FROM products');
    res.status(200).json(response.rows);
}

const createProduct = async (req, res) => {
    const { name, price, quantity } = req.body;

    const response = await pool.query('INSERT INTO products (name, price, quantity) VALUES ($1,$2,$3)', [name, price, quantity])
    console.log(response)
    res.json({
        message: 'Product Added Succesfully',
        body:{
            user: {name, price, quantity}
        }
    })
}

module.exports = {
    getProducts, createProduct
}