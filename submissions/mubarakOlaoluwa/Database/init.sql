CREATE DATABASE food_bag;

/* This is the table for the first success criteria (food type) */
USE food_bag;
CREATE TABLE food_table (
	id INT NOT NULL AUTO_INCREMENT,
    type VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

/*This inserts the various food types into the food_table database*/
INSERT INTO food_table (type)
	VALUES ('Fast food'),
		   ('Vegetable & Fruits'),
           ('Drinks & Cocktails'),
           ('Resturants');

/* This is the table for the second success criteria (vendors food) */
CREATE TABLE vendor_food (
	id INT NOT NULL AUTO_INCREMENT,
    admin_id INT NOT NULL,
    food_id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (food_id) REFERENCES food_table(id)
);

/*This is the table for the third success criteria (admins table)*/
CREATE TABLE admins(
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    type INT NOT NULL,
    email_address VARCHAR(50) NOT NULL,
    phone_number INT NOT NULL,
    password VARCHAR(20) NOT NULL,
    PRIMARY KEY (id)
	);

/*This is the table for the fourth success criteria (customer table)*/
CREATE TABLE customer(
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    phone_number INT NOT NULL,
    address VARCHAR(100) NOT NULL,
    payment_method VARCHAR(20) NOT NULL,
    card_number INT NOT NULL,
    card_name VARCHAR (50) NOT NULL,
    expiry INT NOT NULL,
    CVV INT NOT NULL,
    PRIMARY KEY (id)
	);
    
/*This is the table for the fifth success criteria (orders table)*/
CREATE TABLE orders(
	id INT NOT NULL AUTO_INCREMENT,
    vendor_id INT NOT NULL,
    customer_id INT NOT NULL,
    PRIMARY KEY (id)
	);



