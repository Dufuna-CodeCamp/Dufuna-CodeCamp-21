CREATE DATABASE foodbag;
SHOW DATABASES;
USE foodbag;
CREATE TABLE food (
	id INT NOT NULL AUTO_INCREMENT,
	type VARCHAR(100) NOT NULL,
    created_at DATETIME,
    PRIMARY KEY(id)
);

SHOW TABLES;
INSERT INTO food (type, created_at)
	VALUES
    ('Fast Food', now()),
    ('Vegetables & fruits', now()),
    ('Drinks & cocktails', now()),
    ('Resturants', now());
SELECT * FROM food;

CREATE TABLE admins (
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(100) NOT NULL,
    type INT NOT NULL,
    phone_number INT NOT NULL,
    password VARCHAR(10) NOT NULL,
    created_at DATETIME,
    PRIMARY KEY(id)
);

SHOW TABLES;
INSERT INTO admins (name, type, phone_number, password, created_at)
	VALUES
    ('user1', '0', 'user1@gmail.com', '12345', now()),
    ('KFC', '1', 'kfc@gmail.com', '67890', now()),
    ('Chicken repblic', '1', 'chickenrepblic@gmail.com','56789', now());
SELECT * FROM admins;

CREATE TABLE vendor_food (
	id INT NOT NULL AUTO_INCREMENT,
    admin_id INT NOT NULL,
    food_id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    created_at DATETIME,
    PRIMARY KEY (id),
    FOREIGN KEY (admin_id) REFERENCES admins (id),
	FOREIGN KEY (food_id) REFERENCES food (id),
);
SHOW TABLES;

INSERT INTO vendor_food (admin_id, food_id, name, amount, created_at)
	VALUES
    (2, ,1 ,'KFC-King Bucket' ,5000.00, now()),
    (2, ,2 ,'Zinger Burger' ,3600.00, now()),
    (2, ,4 ,'Chicken Strips' ,1430.00, now()),
    (2, ,3 ,'Yamilicious' ,900.00, now()),
    (3, ,2 ,'Refuel_max' ,1200.00, now()),
    (3, ,1 ,'Express meal' ,2000.00, now()),
    (3, ,4 ,'Citizen meal' ,1500.00, now()),
    (3, ,1 ,'crunchy wings' ,1750.00, now());
SELECT * FROM vendor_food;

CREATE TABLE customer (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
	phone_number INT NOT NULL,
    address VARCHAR(40) NOT NULL,
    payment_method VARCHAR(10) NOT NULL,
    address VARCHAR(255) NOT NULL,
    job_title VARCHAR(100) NOT NULL,
    created_at DATETIME,
    PRIMARY KEY(id)
);

SHOW TABLES;
INSERT INTO customer (name, phone_number, address, payment_method, created_at)
	VALUES
    ('Dare', '08012345678', 'No 1 house area', 'Transfer', now()),
    ('Ola', '07012345678', 'Oke strees, London area', 'Paystack', now()),
    ('Glory', '08112345678', 'Country city, White house', 'Bank', now());
SELECT * FROM customer;

CREATE TABLE orders (
	id INT NOT NULL AUTO_INCREMENT,
    vendor_id INT NOT NULL,
    customer_id INT NOT NULL,
    created_at DATETIME,
    PRIMARY KEY (id),
    FOREIGN KEY (vendor_id) REFERENCES vendor_food (id),
    FOREIGN KEY (customer_id) REFERENCES customer (id),
);
SHOW TABLES;

INSERT INTO orders (employee_id, amount, created_at)
	VALUES
    (3, 2, now()),
    (7, 1, now()),
    (1, 3, now());
SELECT * FROM orders;

