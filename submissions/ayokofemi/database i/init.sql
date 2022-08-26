--for the foodTable--
CREATE TABLE foods (
id INT NOT NULL AUTO_INCREMENT,
type ENUM ('fast_food','vegetable_fruits','drinks_cocktails','resturants') NOT NULL DEFAULT 'fast_food',
PRIMARY KEY (id)
);

--for the vendorFood--
CREATE TABLE vendor_foods (
id INT NOT NULL AUTO_INCREMENT,
admin_id INT NOT NULL,
food_id INT NOT NULL,
name VARCHAR(250) NOT NULL,
amount FLOAT(10,2) NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (food_id) REFERENCES foods (id),
FOREIGN KEY (admin_id) REFERENCES admins (id)
);

--for the adminsTable--
CREATE TABLE admins (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(250) NOT NULL,
type  ENUM('0','1') NOT NULL DEFAULT '0',
email_address VARCHAR(120) NOT NULL,
phone_number INT(18) NOT NULL,
password VARCHAR(16) NOT NULL,
PRIMARY KEY (id)
);

--for the customerTable--
CREATE TABLE customers (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(100) NOT NULL,
phone_number VARCHAR(18) NOT NULL,
address VARCHAR(220) NOT NULL,
payment_method  ENUM('card', 'cash', 'transfer') NULL DEFAULT 'card',
PRIMARY KEY (id)
);

--for the ordersTable--
CREATE TABLE orders (
id INT NOT NULL AUTO_INCREMENT,
vendor_id INT NOT NULL,
customer_id INT NULL,
PRIMARY KEY (id),
FOREIGN KEY (vendor_id) REFERENCES vendor_food (id),
FOREIGN KEY (customer_id) REFERENCES customer (id)
);