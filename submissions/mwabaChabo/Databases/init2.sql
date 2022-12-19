/*creating a food bag database*/
CREATE DATABASE food_bag;
/*Highlighting the database to be used*/
USE food_bag;
/*creating a food table*/
CREATE TABLE foods (
id INT NOT NULL AUTO_INCREMENT,
type ENUM('FastFoods','Vegetables_Fruits','Drinks_Cocktails','Restaurants'),
PRIMARY KEY(id)
);
/*creating a Vendor_food table*/
CREATE TABLE vendor_foods (
id INT NOT NULL AUTO_INCREMENT,
admin_id INT NOT NULL,
food_id INT NOT NULL,
name VARCHAR(250) NOT NULL,
amount DECIMAL(10,2) NOT NULL,
PRIMARY KEY(id),
FOREIGN KEY(food_id) REFERENCES food(id),
FOREIGN KEY(admin_id) REFERENCES admin(id)
);
/*creating an admin table*/
CREATE TABLE admin(
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(250) NOT NULL,
type ENUM('0','1') NOT NULL,
email_address VARCHAR(250) NOT NULL,
phone_number VARCHAR(250) NOT NULL,
password VARCHAR(100) NOT NULL,
PRIMARY KEY(id)
);
/*creating an orders table*/
CREATE TABLE orders(
id INT NOT NULL AUTO_INCREMENT,
vendor_id INT NOT NULL,
customer_id INT NOT NULL,
PRIMARY KEY(id),
FOREIGN KEY(vendor_id) REFERENCES vendors(id),
FOREIGN KEY(customer_id) REFERENCES customers(id)
);
/*creating a customers table*/
CREATE TABLE customers(
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(250) NOT NULL,
phone_number VARCHAR(250) NOT NULL,
address VARCHAR(250) NOT NULL,
payment_method ENUM('Card','Cash','Flutterwave','Mobile Money') NULL,
PRIMARY KEY(id)
);








