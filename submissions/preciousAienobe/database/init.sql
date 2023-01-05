#Create relational database for food_bag store
CREATE DATABASE food_bag;

#Select food_bag database
USE food_bag;

#Create food table for food_bag database
CREATE TABLE foods (
	id INT NOT NULL AUTO_INCREMENT,
    type ENUM('fast_food', 'vegetable_fruits', 'drinks_cocktails', 'restaurants') NOT NULL DEFAULT 'fast_food',
    PRIMARY KEY (id)
);

#Create vendor_food table for food_bag database
CREATE TABLE vendor_foods (
	id INT NOT NULL AUTO_INCREMENT,
    admin_id INT NOT NULL,
    food_id INT NOT NULL,
    name VARCHAR(250) NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (food_id) REFERENCES foods(id),
    FOREIGN KEY (admin_id) REFERENCES admins(id)
);

#Create admins table for food_bag database
CREATE TABLE admins (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(250) NOT NULL,
    type ENUM('0', '1') NOT NULL DEFAULT '0',
    email_address VARCHAR(100) NOT NULL,
    phone_number VARCHAR(100) NOT NULL,
    password VARCHAR(20) NOT NULL,
    PRIMARY KEY (id)
);

#Create customers table for food_bag database
CREATE TABLE customers (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(250) NOT NULL,
    phone_number VARCHAR(100) NOT NULL,
    address VARCHAR(250) NOT NULL,
    payment_method ENUM('card', 'cash', 'bank_transfer') NOT NULL DEFAULT 'card',
    PRIMARY KEY (id)
);

#Create orders table for food_bag databse
CREATE TABLE orders (
	id INT NOT NULL AUTO_INCREMENT,
    vendor_id INT NOT NULL,
    customer_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (customer_id) REFERENCES customers(id),
    FOREIGN KEY (vendor_id) REFERENCES vendor_foods(id)
);