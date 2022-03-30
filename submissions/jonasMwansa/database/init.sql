-- we create a database to be using
CREATE DATABASE food_bag_database;
USE food_bag_database;

-- we create the food table consisting of two columns namely, the id and type (four different food categories)
CREATE TABLE food_table(
	id INT NOT NULL AUTO_INCREMENT,
	type BOOLEAN NOT NULL,
    PRIMARY KEY(id)
);

-- vendor_food table is the relationship between the vendor itself and the food they sell. This table will 
-- contain all they need to know about the food they sell. There will be a relationship between the food table and this table

CREATE TABLE vendors_table(
	id INT NOT NULL AUTO_INCREMENT,
	name vARCHAR(255) NOT NULL,
	amount DECIMAL(20,4) NOT NULL,
    admin_id INT NOT NULL,
	food_id INT NOT NULL,
    PRIMARY KEY(id),
    
    FOREIGN KEY(food_id) REFERENCES food_table (id)
);

-- we create the admins table
-- admins table will contain both the system admins of the food bag platform and the vendors
-- they will be differentiated by type admin(0) vendor(1)

CREATE TABLE admins_table(
	id INT NOT NULL AUTO_INCREMENT,
	name varchar(200) NOT NULL,
	type BOOLEAN NOT NULL,
	email_address VARCHAR(250) NOT NULL,
	phone_number TEXT NOT NULL,
	password VARCHAR(20) NOT NULL,
	PRIMARY KEY(id)
);


-- we create a customer table and specify its columns 
CREATE TABLE customers_table(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(200) NOT NULL,
	phone_number TEXT NOT NULL,
	address varchar(255) NOT NULL,
    payment_method VARCHAR(255) NULL,
    PRIMARY KEY(id)
);

-- we create an orders table
CREATE TABLE orders_table(
	id INT NOT NULL AUTO_INCREMENT,
	customer_id INT NULL,
    vendor_id INT NOT NULL, 
	PRIMARY KEY(id),
    FOREIGN KEY(customer_id) REFERENCES customers_table(id),
	FOREIGN KEY(vendor_id) REFERENCES vendors_table(id)
);