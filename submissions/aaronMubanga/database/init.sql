
-- creation of a DataBase

CREATE DATABASE data_bases;

-- Selection of a DataBase to work on.

USE data_bases;

-- (1) Table Food Bag 

CREATE TABLE food_bag (
	id INT NOT NULL AUTO_INCREMENT,
    type VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);


-- (2) Table Vendor Food

CREATE TABLE vendor_food (
	id INT NOT NULL AUTO_INCREMENT,
    admin_id INT NOT NULL,
    food_id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    amount DECIMAL(4,2) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (admin_id) REFERENCES admins (id),
    FOREIGN KEY (food_id) REFERENCES food_bag (id)
);

-- (3) Table Admins

CREATE TABLE admins (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    type ENUM('0', '1') NOT NULL,
    email_address VARCHAR(100) NOT NULL,
    phone_number INT NOT NULL,
    password VARCHAR(20) NOT NULL,
    PRIMARY KEY (id)
);

-- (4) Table Customer's Account

CREATE TABLE customers_account (
	id INT NOT NULL AUTO_INCREMENT,
    admin_id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    phone_number INT NOT NULL,
    address VARCHAR(100) NOT NULL,
    payment_method VARCHAR(100),
    payment_verification VARCHAR(100),
    PRIMARY KEY (id),
    FOREIGN KEY (admin_id) REFERENCES admins (id)
);

-- (5) Table Orders 

CREATE TABLE orders (
	id INT NOT NULL AUTO_INCREMENT,
    vendor_id INT NOT NULL,
    customers_id INT,
    admin_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (vendor_id) REFERENCES vendor_food (id),
    FOREIGN KEY (customers_id) REFERENCES customers_account (id),
    FOREIGN KEY (admin_id) REFERENCES admins (id)
);