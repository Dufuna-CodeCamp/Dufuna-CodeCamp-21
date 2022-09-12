CREATE DATABASE food_bag;
-- Creation of Database

show DATABASES;
-- To show the list of all Databases

USE food_bag;
-- The USE key word helps to use food_bag for our task databse

-- TABLE CREATION

-- Food Table Creation
CREATE TABLE food (
id INT NOT NULL AUTO_INCREMENT,
type ENUM('fast_food','vegetable_fruits','drinks_cocktails', 'restaurants') NOT NULL DEFAULT 'fast_food',
PRIMARY KEY (id)
);

-- Admins Table Creation
CREATE TABLE admins (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(250) NOT NULL,
type ENUM('0','1') NOT NULL, 
email_address VARCHAR(250) NOT NULL,
phone_number VARCHAR(50) NOT NULL,
password VARCHAR(100) NOT NULL,
PRIMARY KEY (id)
);

-- Vendor table creation

CREATE TABLE vendor_food (
id INT NOT NULL AUTO_INCREMENT,
admin_id INT NOT NULL,
food_id INT NOT NULL,
name VARCHAR(250) NOT NULL,
amount DECIMAL(20, 2) NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (food_id) REFERENCES food (id),
FOREIGN KEY (admin_id) REFERENCES admins (id)
);


-- Customers table creation

CREATE TABLE customers (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(100) NOT NULL,
phone_number VARCHAR(50) NOT NULL,
address VARCHAR(250) NOT NULL,
payment_method ENUM('Card','Mobile Money','Cash') NULL,
PRIMARY kEY (id)
);


-- Customers and Vendors linked together

CREATE TABLE orders (
id INT AUTO_INCREMENT NOT NULL,
vendor_id INT NOT NULL,
customer_id INT NULL, --Not important
PRIMARY KEY (id),
FOREIGN KEY (vendor_id) REFERENCES vendor_food (id),
FOREIGN KEY (customer_id) REFERENCES customers (id)
);

show table status;

-- End of Tables
