-- Database for FOODBAG eCommerce

-- command to create foodbag database
CREATE DATABASE foodbag_ecommerce;

-- command to select foodbag database
USE foodbag_ecommerce;

-- command to create food table
CREATE TABLE food (
-- id TINYINT(6) unsigned auto_increment PRIMARY key NOT NULL,
id INT NOT NULL AUTO_INCREMENT,
type VARCHAR(100) NOT NULL,
PRIMARY KEY (id)
);

-- INSERT INTO food (type) VALUES ('Chicken and Chips'), ('Rice and stew'), ('Moi moi'), ('Plantain porridge');


-- command to create vendor_food table
CREATE TABLE vendor_food (
-- id TINYINT(6) unsigned auto_increment NOT NULL PRIMARY key,
id INT NOT NULL AUTO_INCREMENT,
admin_id INT NOT NULL,
food_id INT NOT NULL,
name VARCHAR(100) NOT NULL,
amount DECIMAL(10,2) NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (food_id) REFERENCES food(id)
);

-- command to create admins table
CREATE TABLE admins (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(100) NOT NULL,
type INT NOT NULL,
email_address VARCHAR(100) NOT NULL,
phone_number VARCHAR(40) NOT NULL,
password VARCHAR(100) NOT NULL,
PRIMARY KEY (id)
);

-- command to create customers table
CREATE TABLE customers (
-- id TINYINT(6) unsigned auto_increment NOT NULL PRIMARY key,
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(100) NOT NULL,
phone_number VARCHAR(40) NOT NULL,
address VARCHAR(100) NOT NULL,
-- payment_method enum('card','cash','bank_transfer')
payment_method VARCHAR(30),
PRIMARY KEY (id)
);

-- command to create orders table
CREATE TABLE orders (
-- id TINYINT(6) unsigned auto_increment NOT NULL PRIMARY key,
id INT NOT NULL AUTO_INCREMENT,
vendor_id INT NOT NULL,
customer_id INT NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (vendor_id) REFERENCES vendor_food(id)
);

