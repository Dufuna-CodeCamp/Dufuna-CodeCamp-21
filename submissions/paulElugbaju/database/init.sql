-- create new databse called foobbag
CREATE DATABASE foodbag; 

-- allow foodbag database to be used
USE foodbag;

-- create table, food
CREATE TABLE food (
	id INT NOT NULL AUTO_INCREMENT,
    type ENUM ('Fast Food','Vegetables & Fruits','Drinks & Cocktails','Resturants'),
    PRIMARY KEY (id)
);

-- create table, admins
CREATE TABLE admins (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR (250) NOT NULL,
    type ENUM ('0', '1'),
    email_address VARCHAR(250) NOT NULL,
    phone_number VARCHAR(250) NOT NULL,
    password VARCHAR(250) NOT NULL,
	PRIMARY KEY (id)
);

-- create table, vendor_food
CREATE TABLE vendor_food (
	id INT NOT NULL AUTO_INCREMENT,
    food_id INT NOT NULL,
    admin_id INT NOT NULL,
    name VARCHAR (250) NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (food_id) REFERENCES food (id),
    FOREIGN KEY (admin_id) REFERENCES admins (id)
);

-- create table, customers
CREATE TABLE customers (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR (250) NOT NULL,
    phone_number VARCHAR (250) NOT NULL,
    address VARCHAR (250) NOT NULL,
    payment_method ENUM ('cash', 'bank_transfer', 'POS'),
    PRIMARY KEY (id)
);

-- create table, orders
CREATE TABLE orders (
	id INT NOT NULL AUTO_INCREMENT,
    vendor_id INT NOT NULL,
    customer_id INT,
	PRIMARY KEY (id),
	FOREIGN KEY (vendor_id) REFERENCES vendor_food(id),
	FOREIGN KEY (customer_id) REFERENCES customers(id)
);
