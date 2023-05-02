-- create foodbag database;
CREATE DATABASE foodbag;

-- specifying which database to use
USE foodbag;

-- create table for food
CREATE TABLE food(
id INT NOT NULL AUTO_INCREMENT,
fast_food VARCHAR(100) NOT NULL,
vegetables_fruits VARCHAR(100) NOT NULL,
drinks VARCHAR(100) NOT NULL,
resturant VARCHAR(100) NOT NULL
);

-- create vendors table
CREATE TABLE vendor_food(
id INT NOT NULL AUTO_INCREMENT,
admin_id INT NOT NULL,
food_id INT NOT NULL,
name VARCHAR(255) NOT NULL,
amount FLOAT(6,2) NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (admin_id) REFERENCES food(id)
);

-- creating admins table
CREATE TABLE admins(
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(255) NOT NULL,
type INT NOT NULL,
email_address VARCHAR(255) NOT NULL,
phone_number INT NOT NULL,
password VARCHAR(15) NOT NULL
);

-- creating customers account table
CREATE TABLE customer_acc(
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(255) NOT NULL,
phone_number INT NOT NULL,
address VARCHAR(255) NOT NULL,
payment_method VARCHAR(20)
);
 
-- creating orders table
CREATE TABLE orders(
id INT NOT NULL AUTO_INCREMENT, 
vendor_id INT NOT NULL, 
customer_id INT,
FOREIGN KEY (vendor_id) REFERENCES vendor_food(id)
); 