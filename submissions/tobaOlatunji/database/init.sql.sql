-- creating a database for foodbag

CREATE DATABASE foodbag;
USE foodbag;
CREATE TABLE food (
id INT NOT NULL AUTO_INCREMENT,
type ENUM ('fast_food', 'vegetables_fruits', 'drinks_cocktails', 'restaurants') NOT NULL DEFAULT 'fast_food',   
PRIMARY KEY (id)
);

-- creating vendor's food table

CREATE TABLE vendor_food (
id INT NOT NULL AUTO_INCREMENT, 
admins_id INT NOT NULL,  
food_id INT NOT NULL,
name VARCHAR(255) NOT NULL,
amount DECIMAL (10,2) NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (admins_id) REFERENCES admins (id),
FOREIGN KEY (food_id) REFERENCES food (id)
);
 
-- creating admins's table 

CREATE TABLE admins (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(255) NOT NULL, 
type ENUM ('0', '1') NOT NULL DEFAULT '0',
email_address VARCHAR (50) NOT NULL,
phone_number VARCHAR (40) NOT NULL,
password VARCHAR (50) NOT NULL,
PRIMARY KEY (id)
);
 
 -- creating customer's food table
 
 CREATE TABLE customers (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(255) NOT NULL,
phone_number VARCHAR(30) NOT NULL,
address VARCHAR(255) NOT NULL,
payment_method ENUM ('transfer', 'POS', 'cash', 'paypal', 'remita') NULL DEFAULT 'cash',
PRIMARY KEY (id)
);

-- creating oderr's food table

CREATE TABLE orders (
id INT NOT NULL AUTO_INCREMENT, 
vendor_id INT NOT NULL, 
customer_id INT NULL,
PRIMARY KEY (id),
FOREIGN KEY (vendor_id) REFERENCES vendor_food (id),
FOREIGN KEY (customer_id) REFERENCES customers (id)
);	


SHOW TABLES;
SHOW COLUMNS FROM admins;
SHOW COLUMNS FROM orders;
SHOW COLUMNS FROM vendor_food;
SHOW COLUMNS FROM customers;