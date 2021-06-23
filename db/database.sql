CREATE DATABASE apiproduct;

CREATE TABLE products(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    price NUMERIC,
    quantity NUMERIC
);

INSERT INTO products (name, price, quantity) VALUES 
('RaspberryPI1', 20, 20),
('RaspberryPI2', 50, 10),
('RaspberryPI3', 100, 5);