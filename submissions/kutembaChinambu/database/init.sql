<!-- This is a query that creates the food table.-->

CREATE TABLE food 
(
id INT NOT NULL AUTO_INCREMENT,
fast_food VARCHAR(100) NOT NULL,
vegetables_and_fruits VARCHAR(100) NOT NULL,
drinks_and_cocktails VARCHAR(100) NOT NULL,
resturants VARCHAR(100) NOT NULL,
PRIMARY KEY (id)
);

<!-- This is a query that creates the admin table -->

CREATE TABLE admin 
(
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(100) NOT NULL,
type ENUM ('0','1') NOT NULL,
email_address VARCHAR(200) NOT NULL,
phone_number CHAR(13) NOT NULL,
password VARCHAR(100) NOT NULL,
PRIMARY KEY (id)
);

<!-- This is a query that creates the vendor_food table-->

CREATE TABLE vendor_food 
(
id INT NOT NULL AUTO_INCREMENT,
food_id INT NOT NULL,
admin_id INT NOT NULL,
name VARCHAR(100) NOT NULL,
email_address VARCHAR(200) NOT NULL,
amount DECIMAL(30,20) NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (food_id) REFERENCES food (id),
FOREIGN KEY (admin_id) REFERENCES admin (id)
);

<!-- This is a query that creates the customer table -->

CREATE TABLE customer
(
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(100) NOT NULL,
phone_number CHAR(13) NOT NULL,
address VARCHAR(200) NOT NULL,
payment_method ENUM('card','Mobile Money','Cash'),
PRIMARY KEY (id)
);

<!-- This is a query that creates the orders table-->

CREATE TABLE orders
(
id INT NOT NULL AUTO_INCREMENT,
vendor_id INT NOT NULL,
customer_id INT,
PRIMARY KEY (id),
FOREIGN KEY (vendor_id) REFERENCES vendor_food (id),
FOREIGN KEY (customer_id) REFERENCES customer (id)
);