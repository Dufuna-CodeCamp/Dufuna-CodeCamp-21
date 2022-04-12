-- CREATING FOODBAG DATABASE

CREATE DATABASE FOODBAG;
USE FOODBAG;

-- 1) CREATING THE food table adding the food types as the columns
CREATE TABLE food (
id INT NOT NULL AUTO_INCREMENT,
-- type = the four different categories of food on the homepage.
`type` VARCHAR(250) NOT NULL,
PRIMARY KEY(id)
);

-- 2) CREATING THE vendor_food table showing all the food being sold and their types using food_table id
CREATE TABLE vendor_food (
id INT NOT NULL AUTO_INCREMENT,
admin_id INT NOT NULL,
food_id INT NOT NULL,
`name` VARCHAR(250) NOT NULL,
amount FLOAT(10, 2) NOT NULL,
PRIMARY KEY(id),
FOREIGN KEY(admin_id) REFERENCES admins (id),
FOREIGN KEY (food_id) REFERENCES food (id)
);

-- 3) CREATING THE admins table showing the admins in charge of foodbag platform and vendors.
CREATE TABLE admins (
id INT NOT NULL AUTO_INCREMENT,
`name` VARCHAR(250) NOT NULL,
`type` TINYINT(2) UNSIGNED NOT NULL,
email_address VARCHAR(250) NOT NULL,
phone_number TINYINT(50) NOT NULL,
`password` VARCHAR(250) NOT NULL,
PRIMARY KEY(id)
);

-- 4) CREATING THE customers table.
CREATE TABLE customers (
id INT NOT NULL AUTO_INCREMENT,
`name` VARCHAR(250) NOT NULL,
phone_number TINYINT(50) NOT NULL,
address VARCHAR(250) NOT NULL,
payment_method ENUM('card', 'bank transfer', 'cash'),
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