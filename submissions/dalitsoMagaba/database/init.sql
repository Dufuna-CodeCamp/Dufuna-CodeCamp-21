-- foodbag database creation
DROP DATABASE foodbag;
CREATE DATABASE foodbag;
USE foodbag;

-- TABLES

-- food table

CREATE TABLE food (
id INT NOT NULL AUTO_INCREMENT,
type ENUM('1','2','3','4'),
PRIMARY KEY (id)
);

-- vendor table

CREATE TABLE vendor_food (
id INT NOT NULL AUTO_INCREMENT,
admin_id INT NOT NULL,
food_id INT NOT NULL,
name VARCHAR(30) NOT NULL,
amount DECIMAL (10,2) NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (admin_id) REFERENCES admins(id),
FOREIGN KEY (food_id) REFERENCES food(id)
);

-- admins table

CREATE TABLE admins (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(30) NOT NULL,
type ENUM ('0','1') NOT NULL,
email_address VARCHAR(50) NOT NULL,
phone_number VARCHAR(20) NOT NULL,
password VARCHAR(30) NOT NULL,
PRIMARY KEY (id)
);

-- customers table

CREATE TABLE customer (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(30) NOT NULL,
phone_number VARCHAR(20) NOT NULL,
address VARCHAR(50) NOT NULL,
payment_method VARCHAR(250),
PRIMARY KEY (id)
);

-- orders table

CREATE TABLE orders (
id INT NOT NULL AUTO_INCREMENT,
vendor_id INT NOT NULL,
customer_id INT NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (vendor_id) REFERENCES vendor_food(id),
FOREIGN KEY (customer_id) REFERENCES customer(id)
);