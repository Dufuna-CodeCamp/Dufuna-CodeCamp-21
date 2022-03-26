CREATE database food_bag;

USE food_bag;
/* This is the food table */

	CREATE TABLE food_table(
	id INT NOT NULL AUTO_INCREMENT,
	food_type VARCHAR(255) NOT NULL,
	PRIMARY KEY(id)
	);
    /* This is the vendor_food table*/
    
    CREATE TABLE vendor_food(
    id INT NOT NULL AUTO_INCREMENT,
    admin_id INT NOT NULL,
    food_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    amount double NOT NULL,
    PRIMARY KEY(id), FOREIGN KEY(food_id) REFERENCES food_table(id)
    );
    /* This is the Admins Table */
    
    CREATE TABLE admins_table(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    type INT NOT NULL,
    email_address VARCHAR(255) NOT NULL,
    phone_number INT NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
    );
    /* This customers table */
    
    CREATE TABLE customer_table(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    phone_number INT NOT NULL,
    address VARCHAR(255) NOT NULL,
    payment_method VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
    );
    
    /* This is the orders_table */
    
    CREATE TABLE orders_table(
    id INT NOT NULL AUTO_INCREMENT,
    vendor_id INT NOT NULL,
    customer_id INT NULL,
    PRIMARY KEY(id), FOREIGN KEY(vendor_id) REFERENCES vendor_food(id), FOREIGN KEY(customer_id) REFERENCES customer_table(id)
    );