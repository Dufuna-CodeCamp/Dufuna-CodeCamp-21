--for the foodTable--
CREATE TABLE food (
id INT NOT NULL AUTO_INCREMENT,
type VARCHAR(20) NOT NULL,
PRIMARY KEY (id)
);

--for the vendorFood--
CREATE TABLE vendor_food (
id INT NOT NULL AUTO_INCREMENT,
admin_id INT NOT NULL,
food_id INT NOT NULL,
name VARCHAR(30) NOT NULL,
amount FLOAT(4,2) NOT NULL,
PRIMARY KEY (id)
);

--for the adminsTable--
CREATE TABLE admins (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(30) NOT NULL,
type  VARCHAR(16) NOT NULL,
email_address VARCHAR(40) NOT NULL,
phone_number VARCHAR(18) NOT NULL,
password VARCHAR(16) NOT NULL,
PRIMARY KEY (id)
);

--for the customerTable--
CREATE TABLE customer (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(30) NOT NULL,
phone_number VARCHAR(18) NOT NULL,
address VARCHAR(220) NOT NULL,
payment_method VARCHAR(15) NOT NULL,
PRIMARY KEY (id)
);

--for the ordersTable--
CREATE TABLE orders (
id INT NOT NULL AUTO_INCREMENT,
vendor_id INT NOT NULL,
customer_id INT NOT NULL,
PRIMARY KEY (id)
