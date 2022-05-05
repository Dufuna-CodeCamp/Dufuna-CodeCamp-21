
-- creation of a DataBase

CREATE DATABASE data_bases;

-- Checking for success

SHOW DATABASE;

-- Selection of a DataBase to work on.

USE data_bases;

-- (1) Table Food Bag 

CREATE TABLE food_bag (
	id INT NOT NULL AUTO_INCREMENT,
    type VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

<<<<<<< HEAD
=======
-- Addition of values to Food Bag

INSERT INTO food_bag (type)
	VALUE	('Fast Food'),
			('Vegetables & Fruits'),
            ('Drinks & Crocktails'),
            ('Resturants')
;

-- Checking table Results

SELECT * FROM food_bag;

>>>>>>> bc30b9ed ([HIRFUS-27] Develop an E-commerce Store Database)
-- (3) Table Admins

CREATE TABLE admins (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(250) NOT NULL,
    type ENUM('0', '1') NOT NULL,
    email_address VARCHAR(250) NOT NULL,
<<<<<<< HEAD
    phone_number VARCHAR(50) NOT NULL,
=======
    phone_number INT NOT NULL,
>>>>>>> bc30b9ed ([HIRFUS-27] Develop an E-commerce Store Database)
    password VARCHAR(250) NOT NULL,
    PRIMARY KEY (id)
);

<<<<<<< HEAD
=======
-- Checking table Results

SELECT * FROM admins;

>>>>>>> bc30b9ed ([HIRFUS-27] Develop an E-commerce Store Database)
-- (2) Table Vendor Food

CREATE TABLE vendor_food (
	id INT NOT NULL AUTO_INCREMENT,
    admin_id INT NOT NULL,
    food_id INT NOT NULL,
    name VARCHAR(250) NOT NULL,
<<<<<<< HEAD
    amount DECIMAL(10,2) NOT NULL,
=======
    amount DECIMAL(4,2) NOT NULL,
>>>>>>> bc30b9ed ([HIRFUS-27] Develop an E-commerce Store Database)
    PRIMARY KEY (id),
    FOREIGN KEY (admin_id) REFERENCES admins (id),
    FOREIGN KEY (food_id) REFERENCES food_bag (id)
);

<<<<<<< HEAD
=======
-- Checking table Results

SELECT * FROM vendor_food;

>>>>>>> bc30b9ed ([HIRFUS-27] Develop an E-commerce Store Database)
-- (4) Table Customer's Account

CREATE TABLE customers_account (
	id INT NOT NULL AUTO_INCREMENT,
    admin_id INT NOT NULL,
    name VARCHAR(250) NOT NULL,
<<<<<<< HEAD
    phone_number VARCHAR(50) NOT NULL,
    address VARCHAR(250) NOT NULL,
    payment_method VARCHAR(250),
=======
    phone_number INT NOT NULL,
    address VARCHAR(250) NOT NULL,
    payment_method VARCHAR(250),
    payment_verification VARCHAR(250),
>>>>>>> bc30b9ed ([HIRFUS-27] Develop an E-commerce Store Database)
    PRIMARY KEY (id),
    FOREIGN KEY (admin_id) REFERENCES admins (id)
);

<<<<<<< HEAD
=======
-- Checking table Results

SELECT * FROM customers_account;

>>>>>>> bc30b9ed ([HIRFUS-27] Develop an E-commerce Store Database)
-- (5) Table Orders 

CREATE TABLE orders (
	id INT NOT NULL AUTO_INCREMENT,
    vendor_id INT NOT NULL,
    customers_id INT ,
    admin_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (vendor_id) REFERENCES vendor_food (id),
    FOREIGN KEY (admin_id) REFERENCES admins (id)
<<<<<<< HEAD
);
=======
);

-- Checking table Results

SELECT * FROM orders;

-- Checking Database results

SHOW TABLES;
>>>>>>> bc30b9ed ([HIRFUS-27] Develop an E-commerce Store Database)
