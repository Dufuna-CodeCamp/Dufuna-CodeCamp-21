-- Creating foodbag database
CREATE DATABASE food_bag;

-- Selecting foodbag database
USE food_bag;

-- Creating food table
CREATE TABLE food (
	id INT NOT NULL AUTO_INCREMENT,
    type VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

-- Creating the admin table
CREATE TABLE admins (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(250) NOT NULL,
    type ENUM('0') NOT NULL,
    email_address VARCHAR(40) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    password VARCHAR(20) NOT NULL,
    PRIMARY KEY (id)
);

-- Creating vendor_food table
CREATE TABLE vendor_food (
	id INT NOT NULL AUTO_INCREMENT,
    admin_id INT NOT NULL,
    type ENUM('1'),
    food_id INT NOT NULL,
    name VARCHAR(250) NOT NULL,
    amount FLOAT(10,2) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (admin_id) REFERENCES admins (id),
    FOREIGN KEY (food_id) REFERENCES food (id)
);

-- Creaing customers table
CREATE TABLE customers (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(250) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    address VARCHAR(250) NOT NULL,
    payment_method VARCHAR(20),
    PRIMARY KEY (id)
);

-- Creating orders table
CREATE TABLE orders (
	id INT NOT NULL AUTO_INCREMENT,
    vendor_id INT NOT NULL,
    customer_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (vendor_id) REFERENCES vendor_food (id),
    FOREIGN KEY (customer_id) REFERENCES customers (id)
);