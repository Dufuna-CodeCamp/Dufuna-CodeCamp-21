SHOW DATABASES;
CREATE DATABASE foodbag;
/*Table for four different food categories*/
USE foodbag;
CREATE TABLE food (
id INT NOT NULL AUTO_INCREMENT,
type VARCHAR(250),
PRIMARY KEY(id)
);

INSERT INTO food (type)
VALUES('fast food'),
('vegetables & fruits'),
('drinks & cocktail'),
('resturant');

/*Table showing the relationship between the vendor itself and the food they sell*/ 
CREATE TABLE vendors_food (
id INT NOT NULL AUTO_INCREMENT,
admin_id INT NOT NULL,
food_id INT NOT NULL,
name VARCHAR(250),
amount DECIMAL(10,2) NOT NULL,
PRIMARY KEY(id)
);

/*Table for Admins*/
CREATE TABLE admins (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(250),
type INT NOT NULL,
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
payment_method VARCHAR(250) NOT NULL,
Card_number INT NOT NULL,
card_name VARCHAR(250) NOT NULL,
expiry_date DATE,
cvc INT NOT NULL,
PRIMARY KEY(id)
);

/*Customers' order table*/
CREATE TABLE orders (
id INT NOT NULL AUTO_INCREMENT,
vendor_id INT NOT NULL,
customer_id INT NOT NULL,
PRIMARY KEY(id)
);