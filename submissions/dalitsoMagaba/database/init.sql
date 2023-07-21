SHOW DATABASES;
DROP DATABASE food_bag;
CREATE DATABASE food_bag;
USE food_bag;

CREATE TABLE food (
id INT NOT NULL AUTO_INCREMENT,
type ENUM ('fast_food','vegetable_fruits','drinks_cocktails','restaurants') NOT NULL DEFAULT 'fast_food',
PRIMARY KEY (id)
);

CREATE TABLE vendor_food (
id INT NOT NULL AUTO_INCREMENT,
admin_id INT NOT NULL,
food_id INT NOT NULL,
name VARCHAR(50) NOT NULL,
amount DECIMAL(10,2) NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (admin_id) REFERENCES admins(id),
FOREIGN KEY (food_id) REFERENCES food(id)
);

CREATE TABLE admins (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(50) NOT NULL,
type ENUM ('0','1') NOT NULL,
email_address VARCHAR(100) NOT NULL,
phone_number VARCHAR(50) NOT NULL,
password VARCHAR(50) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE customers (
id INT UNIQUE,
name VARCHAR(50) NOT NULL,
phone_number VARCHAR(50) NOT NULL,
address VARCHAR(250) NOT NULL,
payment_method ENUM ('card','cash','transfer','POS') DEFAULT 'card',
PRIMARY KEY (id)
);

CREATE TABLE orders (
id INT NOT NULL AUTO_INCREMENT,
vendor_id INT NOT NULL,
customer_id INT NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (vendor_id) REFERENCES vendor_food(id),
FOREIGN KEY (customer_id) REFERENCES customers(id)
);