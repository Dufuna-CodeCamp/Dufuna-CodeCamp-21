-- HERE I HAVE CREATED THE FOOD BAG DATABASE

CREATE DATABASE food_bag;

-- HERE I HAVE SWITCHED TO USE THE FOOD BAG DATABASE 

USE food_bag;

-- HERE IS I CREATE THEN FOOD TABLE

CREATE TABLE food (
id INT NOT NULL AUTO_INCREMENT,
type VARCHAR(250) NOT NULL,
PRIMARY KEY (id)
);

-- HERE I INSERT THE DATA IN THE TYPE COLUMN FIELDS

INSERT INTO food (type)
VALUES
('fast food'),
('Vegetables & Friuts'),
('Drinks'),
('Resturants');

-- HERE I CREATE THE ADMINS TABLE

CREATE TABLE admins (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(250) NOT NULL,
type ENUM ('0','1') NOT NULL,
email_address VARCHAR(100) NOT NULL,
phone_number VARCHAR(13) NOT NULL,
password VARCHAR(100) NOT NULL,
PRIMARY KEY (id)
);

-- HERE I CREATE THE VENDOR TABLE

CREATE TABLE vendor_food (
id INT NOT NULL AUTO_INCREMENT,
admin_id INT NOT NULL,
food_id INT NOT NULL,
name VARCHAR(250) NOT NULL,
amount DECIMAL(20,2) NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (food_id) REFERENCES food (id),
FOREIGN KEY (admin_id) REFERENCES admins (id)
);

-- HERE I CREATE THE CUSTOMERS TABLE

CREATE TABLE customers (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(250) NOT NULL,
phone_number VARCHAR(13) NOT NULL,
address VARCHAR(100) NOT NULL,
payment_method ENUM('card','Mobile Money','Cash'),
PRIMARY kEY (id)
);

-- HERE I CREATE THE ORDERS TABLE

CREATE TABLE orders (
id INT NOT NULL AUTO_INCREMENT,
vendor_id INT NOT NULL,
customer_id INT NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (vendor_id) REFERENCES vendor_food (id),
FOREIGN KEY (customer_id) REFERENCES customers (id)
);