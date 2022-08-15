CREATE DATABASE foodbag;
USE foodbag;
CREATE TABLE food_table(
	id INT NOT NULL AUTO_INCREMENT,
	food_type varchar(100) NOT NULL,
	PRIMARY KEY (id)
);
SHOW TABLES;
SHOW COLUMNS FROM food_table;

CREATE TABLE vendor_food(
	id INT NOT NULL AUTO_INCREMENT,
	admin_id INT NOT NULL,
	food_id INT NOT NULL,
	name VARCHAR(100) NOT NULL,
	amount DECIMAL NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (food_id) REFERENCES food_table(id)
);

SHOW TABLES;
SHOW COLUMNS FROM vendor_food;

CREATE TABLE admins(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(100) NOT NULL,
	type ENUM ('0', '1') NOT NULL,
	email_address VARCHAR(100) NOT NULL,
	phone_number VARCHAR(20) NOT NULL,
	password VARCHAR(50) NOT NULL,
	PRIMARY KEY(id)
);
SHOW COLUMNS FROM admins;

CREATE TABLE customer_data(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(100) NOT NULL,
	phone_number VARCHAR(20) NOT NULL,
	address VARCHAR(255) NOT NULL,
	payment_method VARCHAR(100) NOT NULL,
	PRIMARY KEY(id)
);
SHOW COLUMNS FROM customer_data;

CREATE TABLE orders(
	id INT NOT NULL AUTO_INCREMENT,
	vendor_id INT NOT NULL,
	customer_id INT NOT NULL,
	PRIMARY KEY(id),
	FOREIGN KEY (vendor_id) REFERENCES vendor_food(id),
	FOREIGN KEY (customer_id) REFERENCES customer_data(id)
);


