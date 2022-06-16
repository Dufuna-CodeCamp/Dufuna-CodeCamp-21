CREATE DATABASE foodbag_db;
use foodbag_db;

CREATE TABLE customers(
id INT (10) AUTO_INCREMENT NOT NULL,
full_name VARCHAR(255) NOT NULL,
email_address VARCHAR (255) NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
PRIMARY KEY(id)
);

use foodbag_db;

CREATE TABLE orders_table(
customer_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(255) NOT NULL,
unit_price FLOAT(20,3) NOT NULL,
quantity int(10) NOT NULL,
total_price FLOAT(20, 3) NOT NULL,
order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
customer_address VARCHAR(255) NOT NULL,
FOREIGN KEY(customer_id) REFERENCES customers(id)
);