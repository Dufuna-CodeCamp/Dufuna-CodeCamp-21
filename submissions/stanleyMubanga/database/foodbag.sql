CREATE DATABASE food_bag;

USE food_bag;

CREATE TABLE food (
id INT NOT NULL AUTO_INCREMENT,
type VARCHAR(30) NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO food (type)
VALUES
('fast food'),
('Vegetables & Friuts'),
('Drinks'),
('Resturants');

CREATE TABLE admins (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(100) NOT NULL,
type ENUM ('0','1') NOT NULL,
email_address VARCHAR(100) NOT NULL,
phone_number VARCHAR(13) NOT NULL,
password VARCHAR(100) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE vendor_food (
id INT NOT NULL AUTO_INCREMENT,
admin_id INT NOT NULL,
food_id INT NOT NULL,
name VARCHAR(160) NOT NULL,
amount DECIMAL(20,2) NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (food_id) REFERENCES food (id),
FOREIGN KEY (admin_id) REFERENCES admins (id)
);

CREATE TABLE customers (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(160) NOT NULL,
phone_number VARCHAR(13) NOT NULL,
address VARCHAR(100) NOT NULL,
payment_method VARCHAR(20) NOT NULL,
PRIMARY kEY (id)
);

CREATE TABLE orders (
id INT NOT NULL AUTO_INCREMENT,
vendor_id INT NOT NULL,
customer_id INT NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (vendor_id) REFERENCES vendor_food (id),
FOREIGN KEY (customer_id) REFERENCES customers (id)
);