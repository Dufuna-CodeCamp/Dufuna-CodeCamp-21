SHOW DATABASES;
CREATE DATABASE foodbag;
USE foodbag;
DROP TABLE food;
DROP TABLE vendors_food;
DROP TABLE admins;
DROP TABLE customers;
DROP TABLE orders;
/*Table for four different food categories*/
CREATE TABLE food (
id INT NOT NULL AUTO_INCREMENT,
type ENUM('fast food', 'vegetables & fruits', 'drinks & cocktail', 'resturant') NOT NULL DEFAULT 'fast food',
PRIMARY KEY(id)
);

/*Table showing the relationship between the vendor itself and the food they sell*/ 
CREATE TABLE vendors(
id INT NOT NULL AUTO_INCREMENT,
admin_id INT NOT NULL,
food_id INT NOT NULL,
name VARCHAR(250),
amount DECIMAL(10,2) NOT NULL,
PRIMARY KEY(id),
FOREIGN KEY (admin_id) REFERENCES admins(id),
FOREIGN KEY (food_id) REFERENCES food(id)
);

/*Table for Admins*/
CREATE TABLE admins (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(250),
type BOOLEAN default TRUE,
email_address VARCHAR(250) NOT NULL,
phone_number VARCHAR(250) NOT NULL,
password VARCHAR(250) NOT NULL,
PRIMARY KEY(id)
);

/*Registered Customers*/
CREATE TABLE customers (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(250),
phone_number VARCHAR(250) NOT NULL,
address VARCHAR(250) NOT NULL,
payment_method ENUM('cash', 'pos', 'transfer, cheque') DEFAULT 'cash',
PRIMARY KEY(id)
);

/*Customers' order table*/
CREATE TABLE orders (
id INT NOT NULL AUTO_INCREMENT,
vendor_id INT NOT NULL,
customer_id INT NOT NULL,
PRIMARY KEY(id),
FOREIGN KEY (vendor_id) REFERENCES vendors(id),
FOREIGN KEY (customer_id) REFERENCES customers(id)
);