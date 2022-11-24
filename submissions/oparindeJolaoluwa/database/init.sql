-- create a database for foodbag

CREATE DATABASE foodbag;

-- show the database

SHOW DATABASES;

-- select the foodbag database

USE foodbag;

-- Table 1 Food Bag 

CREATE TABLE food (
	id INT NOT NULL AUTO_INCREMENT,
	type ENUM('fast_food','vegetable_fruits','drinks_cocktails', 'restaurants') NOT NULL DEFAULT 'fast_food',
    PRIMARY KEY (id)
);

 
-- Table 3 Admins

CREATE TABLE admins (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(250) NOT NULL,
    type ENUM('0', '1') NOT NULL,
    email_address VARCHAR(250) NOT NULL,
    phone_number VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

-- Table 2 Vendor Food

CREATE TABLE vendor_food (
	id INT NOT NULL AUTO_INCREMENT,
    admin_id INT NOT NULL,
    food_id INT NOT NULL,
    name VARCHAR(250) NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (food_id) REFERENCES food (id),
    FOREIGN KEY(admin_id) REFERENCES admins (id)
);


-- Table 4 Customer's Account

CREATE TABLE customers (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(250) NOT NULL,
    phone_number VARCHAR(50) NOT NULL,
    address VARCHAR(250) NOT NULL,
    payment_method ENUM('cash', 'bank_transfer', 'card') NOT NULL ,
    PRIMARY KEY (id)
);


-- Table 5 Orders 

CREATE TABLE orders (
	id INT NOT NULL AUTO_INCREMENT,
    vendor_id INT NOT NULL,
    customers_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (vendor_id) REFERENCES vendor_food (id),
    FOREIGN KEY (customers_id) REFERENCES customers (id)
);
 