-- CREATING FOODBAG DATABASE

CREATE DATABASE foodbag;
USE foodbag;

-- 1 Food Table
CREATE TABLE food (
id INT NOT NULL AUTO_INCREMENT,
type VARCHAR(250) NOT NULL,
PRIMARY KEY(id)
);

-- 2 Vendors
CREATE TABLE vendor_food (
id INT NOT NULL AUTO_INCREMENT,
admin_id INT NOT NULL,
food_id INT NOT NULL,
name VARCHAR(250) NOT NULL,
amount DECIMAL(10, 2) NOT NULL,
PRIMARY KEY(id),
FOREIGN KEY(admin_id) REFERENCES admins (id),
FOREIGN KEY (food_id) REFERENCES food (id)
);

-- 3 Admin
CREATE TABLE admins (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(250) NOT NULL,
type INT NOT NULL,
email_address VARCHAR(250) NOT NULL,
phone_number TINYINT(50) NOT NULL,
password VARCHAR(250) NOT NULL,
PRIMARY KEY(id)
);

-- 4 Customers
CREATE TABLE customers (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(250) NOT NULL,
phone_number TINYINT(50) NOT NULL,
address VARCHAR(250) NOT NULL,
payment_method ENUM('card', 'ussd', 'cash'),
PRIMARY KEY(id)
);

-- 5) CREATING THE orders table.
CREATE TABLE orders (
id INT NOT NULL AUTO_INCREMENT,
vendor_id INT NOT NULL,
customer_id INT,
PRIMARY KEY(id),
FOREIGN KEY(vendor_id) REFERENCES vendor_food (id),
FOREIGN KEY(customer_id) REFERENCES customers (id)
);
