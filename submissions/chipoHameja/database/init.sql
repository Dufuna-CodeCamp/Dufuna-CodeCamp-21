/* Create and use foodbag_db database */
CREATE DATABASE foodbag_db;
USE foodbag_db;

/* Create food table */
CREATE TABLE food (
    id INT NOT NULL AUTO_INCREMENT,
    type VARCHAR(250) NOT NULL,
    PRIMARY KEY (id)
);

/* Create vendor_food table */
CREATE TABLE vendor_food (
    id INT NOT NULL AUTO_INCREMENT,
    admin_id INT NOT NULL,
    food_id INT NOT NULL,
    name VARCHAR(250) NOT NULL,
    amount FLOAT(10, 2) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (admin_id) REFERENCES admins (id),
    FOREIGN KEY (food_id) REFERENCES food (id)
);

/* Create admins table */
CREATE TABLE admins (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(250) NOT NULL,
    type ENUM('0', '1') NOT NULL,
    email_address VARCHAR(250) NOT NULL,
    phone_number VARCHAR(250) NOT NULL,
    password VARCHAR(250) NOT NULL,
    PRIMARY KEY (id)
);

/* Create customers table */
CREATE TABLE customers (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(250) NOT NULL,
    phone_number VARCHAR(250) NOT NULL,
    address VARCHAR(250) NOT NULL,
    payment_method VARCHAR(250),
    PRIMARY KEY (id)
);

/* Create vendors table */
CREATE TABLE vendors (
	id INT NOT NULL AUTO_INCREMENT,
    vendor_id INT NOT NULL,
    customer_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (vendor_id) REFERENCES admins (id)
)