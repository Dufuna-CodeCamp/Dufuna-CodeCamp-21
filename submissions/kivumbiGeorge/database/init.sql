
/*
 * create admin table with fields namely;
 * id - an auto incrementing integer that cannot be empty(null) and is also the primary key of the admin table
 * name - string of maximum length 255 that cannot be empty(of length 0)
 * type - string that is either 0 or 1 depending on whether one is system admin or vendor respectively
 * email_address - string of maximum length 255 that cannot be empty(of length 0)
 * phone_number - string of maximum length 255 that cannot be empty(of length 0)
 * password - string of maximum length 255 that cannot be empty(of length 0)
*/
CREATE TABLE admins (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    type ENUM ("0","1") NOT NULL ,
    email_address VARCHAR(255) NOT NULL,
    phone_number VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);
/*
 * id - an auto incrementing integer that cannot be empty(null) and is also the primary key of the vendor_food table
 * admin_id - an integer that cannot be empty and is a foreign key referencing the admin table
 * food_id - an integer that cannot be empty and is a foreign key referencing the food table
 * name - string of maximum length 255 that cannot be empty(of length 0)
 * amount - a large integer that cannot be empty(null)
*/
CREATE TABLE vendor_food (
	id INT NOT NULL AUTO_INCREMENT,
    admin_id INT NOT NULL,
    food_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    amount BIGINT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(admin_id) REFERENCES admins (id),
    FOREIGN KEY(food_id) REFERENCES food (id)
);
/*
 * id - an auto incrementing integer that cannot be empty(null) and is also the primary key of the customer table
 * vendor_id - an integer that cannot be empty and is a foreign key referencing the admin table
 * customer_id - an integer that cannot be empty and is a foreign key referencing the customer table
*/
CREATE TABLE orders (
	id INT NOT NULL AUTO_INCREMENT,
    vendor_id INT NOT NULL, 
    customer_id INT ,
    PRIMARY KEY(id),
    FOREIGN KEY(customer_id) REFERENCES customer (id)
);
/*
 * create a table called food with two fields namely; 
 * id - an auto incrementing integer that cannot be empty(null) and is also the primary key of the food table
 * type - string of maximum length 255 that cannot be empty(of length 0)
*/
CREATE TABLE food (
	id INT NOT NULL AUTO_INCREMENT,
    type INT NOT NULL,
    PRIMARY KEY(id)
);

/*
 * id - an auto incrementing integer that cannot be empty(null) and is also the primary key of the customer table
 * name - string of maximum length 255 that cannot be empty(of length 0)
 * phone_number - string of maximum length 255 that cannot be empty(of length 0)
 * address - string of maximum length 255 that cannot be empty(of length 0)
 * payment_method - string of maximum length 255 
*/
CREATE TABLE customer (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    phone_number VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    payment_method VARCHAR(255) ,
    PRIMARY KEY(id)
);
