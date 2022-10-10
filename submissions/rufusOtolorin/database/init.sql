 -- TO CREATE DATABASE CALLED FOODBAG
CREATE DATABASE foodbag;
-- TO CONFIRM IF DATABASE IS CREATED
SHOW DATABASES;
 -- TO USE THE FOODBAG DATABASE
USE foodbag;

 -- TO START CREATING THE FOOD_BAG TABLE
CREATE TABLE food (
	id INT NOT NULL AUTO_INCREMENT,
    type ENUM('fast_food', 'vegetable_fruits', 'drinks_cocktails', 'restaurants') NOT NULL DEFAULT 'fast_food',
    PRIMARY KEY (id)
);

-- TO START CREATING THE ADMINS TABLE
CREATE TABLE admins (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    type INT NOT NULL,
    email_address VARCHAR(255) NOT NULL,
    phone_number VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

-- TO START MAKING THE VENDOR_FOOD TABLE
CREATE TABLE vendor_food (
	id INT NOT NULL AUTO_INCREMENT,
    admin_id INT NOT NULL,
    food_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (admin_id) REFERENCES admins (id),
    FOREIGN KEY (food_id) REFERENCES food (id)
);

-- TO START CREATING CUSTOMERS ACCOUNT TABLE
CREATE TABLE customers_account (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    phone_number VARCHAR(100) NOT NULL,
    address VARCHAR(255) NOT NULL,
    payment_method ENUM('card', 'cash', 'transfer') NULL DEFAULT 'card',
    PRIMARY KEY (id)
);

-- NOW TO MAKE THE ORDERS TABLE
CREATE TABLE orders (
	id INT NOT NULL AUTO_INCREMENT,
    vendor_id INT NOT NULL,
    customers_id INT ,
    PRIMARY KEY (id),
    FOREIGN KEY (vendor_id) REFERENCES vendor_food (id),
    FOREIGN KEY (customers_id) REFERENCES customers_account (id)
);

-- COMMAND TO CONFIRM THAT ALL TABLES HAS BEEN MADE
SHOW TABLES;
