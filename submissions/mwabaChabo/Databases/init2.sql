/*creating a food bag database*/
CREATE DATABASE food_bag;
/*Highlighting the database to be used*/
USE food_bag;
/*creating a food table*/
CREATE TABLE food (
id INT NOT NULL AUTO_INCREMENT,
type ENUM('FastFoods','Vegetables&Fruits','Drinks&Cocktails','Restaurants'),
PRIMARY KEY(id)
);
/*creating a Vendor_food table*/
CREATE TABLE vendor_food (
id INT NOT NULL AUTO_INCREMENT,
admin_id INT NOT NULL,
food_id INT NOT NULL,
name VARCHAR(250) NOT NULL,
amount DECIMAL(6,2) NOT NULL,
PRIMARY KEY(id),
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
PRIMARY KEY(id)
);








