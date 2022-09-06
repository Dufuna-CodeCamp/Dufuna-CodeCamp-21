CREATE DATABASE foodbag;
USE foodbag;
CREATE TABLE food (
	Id int NOT NULL AUTO_INCREMENT,
	type ENUM('fast_food','vegetable_fruits','drinks_cocktails', 'restaurants') NOT NULL
	DEFAULT 'fast_food',
	PRIMARY KEY(Id)
);
SHOW COLUMNS FROM food;

CREATE TABLE vendor_food(
	id INT NOT NULL AUTO_INCREMENT,
    admin_id INT NOT NULL,
    food_id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    amount DECIMAL NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (admin_id) REFERENCES admins(id),
    FOREIGN KEY (food_id) REFERENCES food(id)
);
ALTER TABLE vendor_food MODIFY name VARCHAR(255) NOT NULL;

CREATE TABLE admins(
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    type ENUM('system_admin', 'vendor_admin') NOT NULL 
    DEFAULT 'system_admin',
    email_address VARCHAR(100) NOT NULL,
    phone_number VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);
ALTER TABLE admins MODIFY name VARCHAR(255) NOT NULL;
ALTER TABLE admins MODIFY email_address VARCHAR(255) NOT NULL;
ALTER TABLE admins MODIFY password VARCHAR(255) NOT NULL;

CREATE TABLE customer(
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    phone_number VARCHAR(50) NOT NULL,
    address VARCHAR(255) NOT NULL,
    payment_method ENUM('card', 'cash', 'transfer') DEFAULT 'card',
    PRIMARY KEY (id)
);

ALTER TABLE customer MODIFY name VARCHAR(255) NOT NULL;


CREATE TABLE orders(
	id INT NOT NULL AUTO_INCREMENT,
	vendor_id INT NOT NULL,
	customer_id INT NOT NULL,
	PRIMARY KEY(id),
	FOREIGN KEY (vendor_id) REFERENCES vendor_food(id),
	FOREIGN KEY (customer_id) REFERENCES customer(id)
);











