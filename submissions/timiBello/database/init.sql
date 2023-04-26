-- CREATING DATABASE NAMED FOODBAG
 CREATE DATABASE food_bag;

 -- SPECIFYING DATABASE TO USE
 USE food_bag;

 -- CREATING FOOD TABLE
 CREATE TABLE food (
 	id INT NOT NULL AUTO_INCREMENT,
     type VARCHAR(100) NOT NULL,
     PRIMARY KEY (id)
 );

 -- CREATING ADMINS TABLE
 CREATE TABLE admins (
 	id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(100) NOT NULL,
     type INT NOT NULL,
     email_address VARCHAR(50) NOT NULL,
     phone_number INT NOT NULL,
     password VARCHAR(20) NOT NULL,
     PRIMARY KEY (id)
 );

 -- CREATING VENDOR FOOD TABLE
 CREATE TABLE vendor_food (
 	id INT NOT NULL AUTO_INCREMENT,
     admin_id INT NOT NULL,
     food_id INT NOT NULL,
     name VARCHAR(100) NOT NULL,
     amount INT NOT NULL,
     PRIMARY KEY (id),
     FOREIGN KEY (admin_id) REFERENCES admins (id),
     FOREIGN KEY (food_id) REFERENCES food (id)
 );

 -- CREATING USERS TABLE
 CREATE TABLE users (
 	id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(100) NOT NULL,
     phone_number INT NOT NULL,
     address VARCHAR(200) NOT NULL,
     payment_method VARCHAR(50),
     card_number INT,
     card_name VARCHAR(100),
     expiry_date DATE,
     cvc INT,
     PRIMARY KEY (id)
 );

 -- CREATING ORDERS TABLE
 CREATE TABLE orders (
 	id INT NOT NULL AUTO_INCREMENT,
     vendor_id INT NOT NULL,
     customer_id INT,
     PRIMARY KEY (id),
     FOREIGN KEY (vendor_id) REFERENCES admins (id),
     FOREIGN KEY (customer_id) REFERENCES users (id)
 );

 --END OF TABLE