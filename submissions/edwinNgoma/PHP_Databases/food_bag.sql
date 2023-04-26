
CREATE DATABASE foodbagdb;
use foodbagdb;

CREATE TABLE customers(
id INT (10) AUTO_INCREMENT NOT NULL,
full_name VARCHAR(255) NOT NULL,
email_address VARCHAR (255) NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
PRIMARY KEY(id)
);

use foodbagdb;

CREATE TABLE orders_table(
id INT NOT NULL AUTO_INCREMENT,
customer_id INT NOT NULL,
product_name VARCHAR(255) NOT NULL,
unit_price FLOAT(20,3) NOT NULL,
quantity int(10) NOT NULL,
total_price FLOAT(20, 3) NOT NULL,
order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
customer_address VARCHAR(255) NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY(customer_id) REFERENCES customers(id)
);
