#this creates the databasee
CREATE DATABASE foodbag; 
USE foodbag;
-- table for foods is created below
CREATE TABLE foods(
	food_id INT NOT NULL AUTO_INCREMENT,
    food_type ENUM('fast_food','vegetable_fruits','drinks_cocktails','restaurants') NOT NULL,
    PRIMARY KEY(food_id)
);
-- admin table below
CREATE TABLE admins(
	admin_id INT NOT NULL AUTO_INCREMENT,
    admin_name VARCHAR(250) NOT NULL,
    admin_type ENUM('0','1') NOT NULL,
    email_address VARCHAR(250) NOT NULL,
    phone_number VARCHAR(50) NOT NULL,
    admin_password VARCHAR(255) NOT NULL,
    PRIMARY KEY(admin_id)
);
-- table for vendors
CREATE TABLE vendor_foods(
	vendor_id INT NOT NULL AUTO_INCREMENT,
    admin_id INT NOT NULL,
    food_id INT NOT NULL,
    vendor_name VARCHAR(250) NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    PRIMARY KEY(vendor_id),
    FOREIGN KEY(food_id) REFERENCES foods(food_id),
    FOREIGN KEY(admin_id) REFERENCES admins(admin_id)
);
-- customer table below
CREATE TABLE customers(
	customer_id INT NOT NULL AUTO_INCREMENT,
    customer_name VARCHAR(250) NOT NULL,
    customer_phone VARCHAR(50) NOT NULL,
    customer_address VARCHAR(250) NOT NULL,
    payment_method ENUM('CARD','USSD') NULL,
    card_number VARCHAR(50) NULL,
    card_name VARCHAR(250) NULL,
    expiry_date DATE NULL,
    cvv TINYINT NULL,
    PRIMARY KEY(customer_id)
);
-- table for orders
CREATE TABLE orders(
	order_id INT NOT NULL AUTO_INCREMENT,
    vendor_id INT NOT NULL,
    customer_id INT NULL,
    PRIMARY KEY(order_id),
    FOREIGN KEY(vendor_id) REFERENCES vendor_foods(vendor_id),
    FOREIGN KEY(customer_id) REFERENCES customers(customer_id)  
);