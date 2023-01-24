CREATE DATABASE food_bag; 
USE food_bag;

-- food table relates to vendor food table
CREATE TABLE food (
id INT NOT NULL AUTO_INCREMENT, 
type VARCHAR(250) NOT NULL, 
PRIMARY KEY (id));

-- INSERT INTO 	food (food_type) VALUES ('Fast Food'), ('Vegetables and Fruits'), ('Drinks and cocktails'), ('Restaurants');


-- select * from food;

-- vendor foood table, related to food table
CREATE TABLE vendor_food (
id INT NOT NULL AUTO_INCREMENT,
admin_id INT NOT NULL,
food_id INT NOT NULL,
name VARCHAR(250) NOT NULL,
amount INT NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (id) REFERENCES food(id)
);
-- INSERT INTO vendor_food (admin_id, food_id,name, amount) VALUES (1, 1, 'KFC-King Bucket', 5000),(1,2,'Zinger Burger', 3600),(1,3, 'Chicken Strips', 1450),(1,4, 'Yamilicious', 900);
-- select * from vendor_food;

-- table for admins, relates to vendor_food table, admins type 0, vendors type 1; 
CREATE TABLE admins (
id INT NOT NULL AUTO_INCREMENT,
name varchar(250) NOT NULL,
type ENUM('0','1') NOT NULL, 
email_address VARCHAR(250) NOT NULL,
phone_number INT NOT NULL,
password VARCHAR(250) NOT NULL,
PRIMARY KEY(id),
FOREIGN KEY (id) REFERENCES vendor_food(id)
);
-- select * from admins;

-- INSERT INTO admins(name. type) VALUES ('KFC',1), ('Chicken Republic',1);

-- registration table
CREATE TABLE registration (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(100) NOT NULL,
phone_number INT NOT NULL unique,
address VARCHAR(250),
payment_method VARCHAR(250) NOT NULL,
PRIMARY KEY (id)
);

-- order table
CREATE TABLE orders (
id INT NOT NULL AUTO_INCREMENT, 
vendor_id INT NOT NULL,
customer_id INT NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (vendor_id) REFERENCES vendor_food(id),
FOREIGN KEY (customer_id) REFERENCES registration(id)
);