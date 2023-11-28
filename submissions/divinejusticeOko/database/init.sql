CREATE DATABASE foodbag;

USE foodbag;

CREATE TABLE food_table(
	food_id INT NOT NULL AUTO_INCREMENT,
    type ENUM('Fast_foods', 'vegetables', 'drinks_and_cocktail', 'resturant') NOT NULL,
    DEFAULT 'restuatant',
    PRIMARY KEY(food_id)
);

CREATE TABLE admins(
	admin_id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(250) NOT NULL,
    email_address VARCHAR(250) NOT NULL,
    phone_number VARCHAR(15) NOT NULL,
    password VARCHAR(250),
    PRIMARY KEY(admin_id)
);

CREATE TABLE vendor_food(
	vendor_id INT NOT NULL AUTO_INCREMENT,
    admin_id INT NOT NULL,
    name VARCHAR(250) NOT NULL,
    amount DECIMAL(8,2) NOT NULL,
    PRIMARY KEY(vendor_id),
    FOREIGN KEY(admin_id) REFERENCES admins(admin_id)
);

CREATE TABLE customers(
	customer_id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(250) NOT NULL,
    address VARCHAR(250) NOT NULL,
    phone_number VARCHAR(15) NOT NULL,
    payment_method VARCHAR(250),
    PRIMARY KEY(customer_id)
);

CREATE TABLE orders(
	order_id INT NOT NULL AUTO_INCREMENT,
    vendor_id INT NOT NULL,
    customer_id INT,
    PRIMARY KEY(order_id),
    FOREIGN KEY(vendor_id) REFERENCES vendor_food(vendor_id),
    FOREIGN KEY(customer_id) REFERENCES customers(customer_id)
);