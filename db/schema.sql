-- create DB
CREATE DATABASE IF NOT EXISTS estore_db;
USE estore_db;

-- Drop the tables if they exist
DROP TABLE IF EXISTS product_tags;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS tags;
DROP TABLE IF EXISTS category;

-- Create the categories table
CREATE TABLE category (
  id INT AUTO_INCREMENT PRIMARY KEY,
  category_name VARCHAR(50) NOT NULL
);

-- Create the products table
CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_name VARCHAR(100) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  stock INT NOT NULL DEFAULT 10,
  category_id INT,
  FOREIGN KEY (category_id) REFERENCES category (id) ON DELETE CASCADE
);

-- Create the tags table
CREATE TABLE tags (
  id INT AUTO_INCREMENT PRIMARY KEY,
  tag_name VARCHAR(50)
);

-- Create the product_tags table
CREATE TABLE product_tags (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT,
  tag_id INT,
  FOREIGN KEY (product_id) REFERENCES products (id) ON DELETE CASCADE,
  FOREIGN KEY (tag_id) REFERENCES tags (id) ON DELETE CASCADE
);

