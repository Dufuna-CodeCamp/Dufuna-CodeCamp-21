-- Creating foodbag database
CREATE DATABASE food_bag;

-- Selecting foodbag database
USE food_bag;

-- Creating food table
CREATE TABLE food (
	id INT NOT NULL AUTO_INCREMENT,
    type VARCHAR(40) NOT NULL,
    PRIMARY KEY (id)
);

-- Changing type from VARCHAR to INT.
ALTER TABLE food MODIFY type INT NOT NULL;

-- Creating vendor_food table
CREATE TABLE vendor_food (
	id INT NOT NULL AUTO_INCREMENT,
    admin_id INT NOT NULL,
    food_id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    amount FLOAT(10,2) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (admin_id) REFERENCES food (id)
);

-- Creating the admin table
CREATE TABLE admins (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    type INT NOT NULL,
    email_address VARCHAR(40) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    password VARCHAR(20) NOT NULL,
    PRIMARY KEY (id)
);

-- Establishing relationship between admin table and vendor_food table
ALTER TABLE admins ADD FOREIGN KEY (id) REFERENCES vendor_food (admin_id);

-- To see the tables created
SHOW TABLES;

-- Creaing customers table
CREATE TABLE customers (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    address VARCHAR(100) NOT NULL,
    payment_method VARCHAR(20),
    PRIMARY KEY (id)
);

-- Creating orders table
CREATE TABLE orders (
	id INT NOT NULL AUTO_INCREMENT,
    vendor_id INT NOT NULL,
    customer_id INT,
    PRIMARY KEY (id)
);