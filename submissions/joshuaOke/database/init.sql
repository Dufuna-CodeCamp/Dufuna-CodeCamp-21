-- this is the beginning of the queries
-- this CREATEs the db
-- CREATE database foodbag;

-- then I select the foodbag db for use
-- use foodbag;

-- CREATE the food TABLE  
CREATE TABLE food (
-- id TINYINT(6) unsigned auto_increment PRIMARY key NOT NULL,
id INT NOT NULL AUTO_INCREMENT,
type VARCHAR NOT NULL
);

-- CREATE the Vendor food TABLE 
CREATE TABLE vendor_food (
-- id TINYINT(6) unsigned auto_increment NOT NULL PRIMARY key,
id INT NOT NULL AUTO_INCREMENT,
admin_id INT NOT NULL,
food_id INT NOT NULL,
name VARCHAR,
amount float(10,2) NOT NULL
);

-- CREATE the admins TABLE
-- CREATE TABLE admins (
-- id INT NOT NULL AUTO_INCREMENT,
-- name VARCHAR,
-- type INT NOT NULL,
-- email_address VARCHAR,
-- phone_number VARCHAR,
-- password VARCHAR
-- );

-- CREATE the customers TABLE
CREATE TABLE customers (
id TINYINT(6) unsigned auto_increment NOT NULL PRIMARY key,
name VARCHAR NOT NULL,
phone_number VARCHAR(14) NOT NULL,
address VARCHAR NOT NULL,
-- payment_method enum('card','cash','bank_transfer')
payment_method VARCHAR(14)
);

-- CREATE the orders TABLE
CREATE TABLE orders (
id TINYINT(6) unsigned auto_increment NOT NULL PRIMARY key,
customer_id TINYINT(6),
vendor_id TINYINT(6) NOT NULL
);