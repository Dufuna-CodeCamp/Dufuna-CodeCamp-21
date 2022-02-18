-- create database foodbag
CREATE DATABASE foodbag;
-- show if the database was created
SHOW DATABASES;
-- select the foodbag database
USE foodbag;
-- create table structure for food
CREATE TABLE food (
	id INT NOT NULL AUTO_INCREMENT,
    type VARCHAR(40) NOT NULL,
    category_one VARCHAR(40) NOT NULL,
    category_two VARCHAR(40) NOT NULL,
    category_three VARCHAR(40) NOT NULL,
    category_four VARCHAR(40) NOT NULL,
    PRIMARY KEY (id)
);
-- create table structure for vendor_food
CREATE TABLE vendor_food (
	id INT NOT NULL AUTO_INCREMENT,
    admin_id INT NOT NULL,
    food_id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id) REFERENCES food (id)
);
-- create table structure for admins
CREATE TABLE admins (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    type INT NOT NULL,
    email_address VARCHAR(40) NOT NULL,
    phone_number INT NOT NULL,
    password VARCHAR(40) NOT NULL,
    PRIMARY KEY (id)
);
-- create table structure for customers
CREATE TABLE customers (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    phone_number INT NOT NULL,
    address VARCHAR(100) NOT NULL,
    payment_method ENUM('cash', 'bank_transfer', 'card') NOT NULL,
    PRIMARY KEY (id)
);
-- create table structure for orders
CREATE TABLE orders (
	id INT NOT NULL AUTO_INCREMENT,
    vendor_id INT NOT NULL,
    customer_id INT NOT NULL,
    PRIMARY KEY (id)
);