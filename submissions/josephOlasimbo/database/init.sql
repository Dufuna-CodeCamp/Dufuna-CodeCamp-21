CREATE DATABASE food_bag;
USE food_bag;

-- CREATING THE food TABLE
CREATE TABLE food (
	id INT NOT NULL AUTO_INCREMENT,
	type ENUM('fast_food_category', 'veg_fruits_category', 'drinks_cocktails_category', 'restaurants_category'),
	PRIMARY KEY(id)
);

-- CREATING THE vendor_food TABLE
CREATE TABLE vendor_id (
	id INT NOT NULL AUTO_INCREMENT,
	admin_id INT NOT NULL,
	food_id INT NOT NULL,
	name VARCHAR(250) NOT NULL,
	amount DECIMAL(10, 2) NOT NULL,
	PRIMARY KEY(id),
	FOREIGN KEY(food_id) REFERENCES food (id)
);
ALTER TABLE vendor_id RENAME TO vendor_food;

-- CREATING THE admins TABLE 
CREATE TABLE admins (
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(250) NOT NULL,
	type ENUM( '0', '1'),
	email_address VARCHAR(250) NOT NULL,
	phone_number VARCHAR(250) NOT NULL,
	password VARCHAR(250) NOT NULL, 
	PRIMARY KEY(id)
);
ALTER TABLE vendor_id ADD FOREIGN KEY(admin_id) REFERENCES admins (id);

-- CREATING THE customers TABLE
CREATE TABLE customers (
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(250) NOT NULL,
	phone_number VARCHAR(250) NOT NULL,
	address VARCHAR(250) NOT NULL,
	payment_method ENUM( 'cash', 'wire transfer', 'debit card'),
	PRIMARY KEY(id)
); 

-- CREATING THE orders TABLE
CREATE TABLE orders (
	id INT NOT NULL AUTO_INCREMENT,
	vendor_id INT NOT NULL,
	customer_id INT,
	PRIMARY KEY(id),
	FOREIGN KEY(vendor_id) REFERENCES vendor_food (id),
	FOREIGN KEY(customer_id) REFERENCES customers (id)
);
