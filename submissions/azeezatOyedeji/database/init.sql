-- create foodbag database;
CREATE DATABASE foodbag;

-- specifying which database to use
USE foodbag;

-- create table for food
CREATE TABLE foods(
id INT NOT NULL AUTO_INCREMENT,
type ENUM('Fast Food','Vegetables & Fruits','Drinks & Cocktails','Resturants'),
PRIMARY KEY (id)
);

-- create vendors table
CREATE TABLE vendors_foods(
id INT NOT NULL AUTO_INCREMENT,
admin_id INT NOT NULL,
food_id INT NOT NULL,
name VARCHAR(255) NOT NULL,
amount DECIMAL(10,2) NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (admin_id) REFERENCES admins(id),
FOREIGN KEY (food_id) REFERENCES foods(id)
);

-- creating admins table
CREATE TABLE admins(
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(255) NOT NULL,
type ENUM('0','1') NOT NULL,
email_address VARCHAR(255) NOT NULL,
phone_number VARCHAR(100) NOT NULL,
password VARCHAR(15) NOT NULL,
PRIMARY KEY(id)
);

-- creating customers account table
CREATE TABLE customers_acc(
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(255) NOT NULL,
phone_number VARCHAR(100) NOT NULL,
address VARCHAR(255) NOT NULL,
payment_method ENUM('POS','Cash','Transfer'),
PRIMARY KEY (id)
);
 
-- creating orders table
CREATE TABLE orders(
id INT NOT NULL AUTO_INCREMENT, 
vendor_id INT NOT NULL, 
customer_id INT,
PRIMARY KEY(id),
FOREIGN KEY (vendor_id) REFERENCES vendors_foods(id),
FOREIGN KEY (customer_id) REFERENCES customers_acc(id)
); 