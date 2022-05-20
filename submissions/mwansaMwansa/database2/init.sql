
/*This query creates a database named food_bag
*/

CREATE DATABASE food_bag;

/*this query creates a table called food_table with columns id and food_type that are both set to NOT NULL in the food_bag database. The id column is of data type INT and is an auto increment value and is the primary key, while the food_type column is of data type VARCHAR*/

CREATE TABLE food_table (
	id INT NOT NULL auto_increment,
    food_type VARCHAR(255) NOT NULL,
    primary key(id)
);

/*this query creates a table called vendor_table with columns id, admin_id, food_id, name, amount, and amount. The food_id column is a foreign key that maps the vendor_table to the food_table on the id column*/

CREATE TABLE vendor_table(
	id INT NOT NULL auto_increment,
    admin_id INT NOT NULL,
    food_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    amount DECIMAL NOT NULL,
    primary key(id), foreign key(food_id) references food_table(id)
);

/*this query creates a table called admin_table with cloumns id, name, type, email_address, phone_number, and password. All columns are set to NOT NULL, the id column is the primary key*/

CREATE TABLE admin_table (
	id INT NOT NULL auto_increment,
    name VARCHAR(255) NOT NULL,
    type ENUM ('0', '1') NOT NULL,
    email_address VARCHAR(255) NOT NULL,
    phone_number VARCHAR(15) NOT NULL,
    password VARCHAR(255) NOT NULL,
    primary key(id)
);

/*This query creates a table called customer_table with columns id, name, phone_number, address, and payment_method*/

CREATE TABLE customer_table (
	id INT NOT NULL auto_increment,
    name VARCHAR(255) NOT NULL,
    phone_number VARCHAR(15) NOT NULL unique,
    address VARCHAR(255) NULL,
    payment_method VARCHAR(255) NULL,
    primary key(id)
);

/*this query creates a table called orders_table with columns id, vendor_id, and customer_id. vendor_id and customer_id are foreign keys that reference the id column in the vendor_table and the id in the customer_table respectively*/

CREATE TABLE orders_table (
	id INT NOT NULL auto_increment,
    vendor_id INT NOT NULL,
    customer_id INT NULL,
    primary key(id),
    foreign key(vendor_id) references vendor_table(id),
    foreign key(customer_id) references customer_table(id)
    
);
