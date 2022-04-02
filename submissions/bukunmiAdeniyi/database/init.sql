
-- CREATING food_bag database
CREATE DATABASE food_bag;
SHOW DATABASES;

-- USING the CREATED database

USE food_bag;

-- CREATING a food TABLE
CREATE TABLE food (
id INT NOT NULL AUTO_INCREMENT,
type VARCHAR(250) NOT NULL,
PRIMARY KEY(id)
);
SHOW TABLES;

-- INPUTING the record into the food TABLE
INSERT INTO food (type)
VALUES
('king_bucket'),
('zinger_burger'),
('chicken_strips'),
('yamilicious');

SELECT * FROM food;


-- CREATING vendor_food TABLE
CREATE TABLE vendor_food(
id INT NOT NULL AUTO_INCREMENT,
admin_id INT NOT NULL,
food_id INT NOT NULL,
name VARCHAR(200) NOT NULL, 
amount DECIMAL (10,2) NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (food_id) REFERENCES food (id)
);

SELECT * FROM vendor_food;


-- INPUTING the record into the vendor_food TABLE
INSERT INTO vendor_food (admin_id, food_id, name, amount)
VALUES 
(2, 3, 'james brown', 1000.00),
(4, 2, 'Paul Scold', 2000.00),
(6, 4, 'Richard isaac', 3000.00),
(8, 1, 'kent thiele', 4000.00);

DROP TABLE vendor_food;

-- CREATING admin TABLE
CREATE TABLE admin(
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(100) NOT NULL,
type VARCHAR(155) NOT NULL,
email_address VARCHAR(50) NOT NULL,
phone_number INT NOT NULL,
password VARCHAR(49) NOT NULL,
PRIMARY KEY(id)
);

-- INPUTING the record into the admin TABLE
INSERT INTO admin (name, type, email_address, phone_number, password )
VALUES
('james brown','king_bucket', 'jamesbrown@gmail.com', 08163, 'james123' ),
('paul white','zinger_burger', 'pauwhite@gmail.com', 08155, 'paul123' ),
('Ben Ken', 'chicken_strips', 'benken@gmail.com', 08156, 'ben123' ),
('luis emry','yamilicious', 'luisemry@gmail.com', 08122, 'luis123' );

-- CREATING the customers TABLE
CREATE TABLE customers (
id TINYINT UNSIGNED AUTO_INCREMENT NOT NULL,
name VARCHAR(200) NOT NULL,
phone_number VARCHAR(14) NOT NULL,
address VARCHAR(200) NOT NULL,
payment_method VARCHAR(14),
PRIMARY KEY (id)
);

-- CREATING the orders TABLE
CREATE TABLE orders (
id INT UNSIGNED AUTO_INCREMENT NOT NULL,
customer_id INT,
vendor_id INT NOT NULL,
PRIMARY KEY (id)
);