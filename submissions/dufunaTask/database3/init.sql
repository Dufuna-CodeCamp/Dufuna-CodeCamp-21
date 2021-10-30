CREATE DATABASE idamsels_shop;
USE idamsels_shop;

-- USER ADMINS TABLE
CREATE TABLE admins (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(100) NOT NULL,
type INT NOT NULL,
email_address VARCHAR(100) NOT NULL,
password VARCHAR(50) NOT NULL,
phone_number VARCHAR(20) NOT NULL,
PRIMARY KEY (id)
); 

INSERT INTO admins (name, email_address, password, phone_number, created_at)
VALUES ('Damisi Mahmood', 'ayomikundamsel@gmail.com', 'Damsel', '09099555551', now()),
('Damisi Adeboje', 'dam.ade@gmail.com', 'Dami', '09099555551', now()),
('Aramide Audrey Araoluwa', 'arami@gmail.com', 'Ara', '09099555551', now());

-- VENDOR FOOOD TABLE
CREATE TABLE vendor_food  (
id INT NOT NULL AUTO_INCREMENT,
category VARCHAR(100) NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO categories (category)
VALUES ('Fendi'),
('Burberry'),
('Jimmy Choo'),
('Dolce&Gabbanna');


-- PRODUCTS TABLE
CREATE TABLE orders (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(100) NOT NULL,
description VARCHAR(250) NOT NULL,
image BLOB NOT NULL,
unit_price DECIMAL(10,2) NOT NULL,
category_id INT NOT NULL,
admin_id INT NOT NULL,
stock_level INT NOT NULL,
status ENUM('in stock', 'out of stock', 'low stock') NOT NULL,
created_at DATETIME,
PRIMARY KEY (id),
FOREIGN KEY (category_id) REFERENCES categories (id),
FOREIGN KEY (admin_id) REFERENCES admins (id)
);

INSERT INTO products (name, description, image, unit_price, stock_level, status, category_id, admin_id, created_at)
VALUES ('Madeline Satchel', 'New for the season, featuring a rigid construction and top handle, this style has plenty of room in the main compartment for all your essentials. Decorated with an invisible button and gold chain, wear yours on the shoulder or carry in hand.', "C:\Users\user\Desktop\Dufuna-CodeCamp20\submissions\damisiMahmood\HTML\Images\jimmychoobag", 2250.00, 5, 'in stock', 3, 0002, now()),
('Fendi Baguette', 'Move with the stars, featuring a rigid construction and top handle, this style has plenty of room in the main compartment for all your essentials. Decorated with an invisible button and gold chain, wear yours on the shoulder or carry in hand.', "C:\Users\user\Desktop\Dufuna-CodeCamp20\submissions\damisiMahmood\HTML\Images\fendi-bag-red-pattern", 3555.00, 10, 'in stock', 1, 0002, now());


-- CUSTOMERS TABLE
CREATE TABLE food (
id INT NOT NULL AUTO_INCREMENT,
first_name VARCHAR(100) NOT NULL,
last_name VARCHAR(100) NOT NULL,
email_address VARCHAR(100) NOT NULL,
password VARCHAR(100) NOT NULL,
created_at DATETIME,
PRIMARY KEY (id)
);

INSERT INTO customers (first_name, last_name, email_address, password, created_at)
VALUES ('Brad', 'Pitt', 'pitt@memail.com', 'firewall', now()),
('Sunday', 'Monday', 'Sunmon@gmail.com', 'monsun', now()),
('Little', 'Stone', 'Slone@ymail.com', 'wakakak', now());


-- CUSTOMERS CONTACT ADDRESSES TABLE 218
SELECT COUNT(*) as
WHERE
CREATE TABLE customers_addresses (
id INT NOT NULL AUTO_INCREMENT,
admin_id INT NOT NULL,
food_id INT NOT NULL,
email_address VARCHAR(100) NOT NULL,
password VARCHAR(100) NOT NULL
type INT NOT NULL,
city VARCHAR(100) NOT NULL,
state VARCHAR(50) NOT NULL,
zipcode VARCHAR(50) NOT NULL,
phone_number VARCHAR(20) NOT NULL,
created_at DATETIME,
PRIMARY KEY (id),
FOREIGN KEY (customers_id) REFERENCES customers (id)
);

INSERT INTO customers_addresses (customers_id, street_address, city, state, zipcode, phone_number, created_at)
VALUES (1, 'h3 road', 'hunters', 'oklahoma', 0098, '009-2545455', now()),
(2, '007 mainsford way', 'conway', 'oklahoma', 0098, '009-6548124', now()),
(3, '45 Aborishade street', 'surulere', 'lagos', 123, '234-801121457', now());

-- ORDERS TABLE
CREATE TABLE orders (
id INT NOT NULL AUTO_INCREMENT,
customers_id INT NOT NULL,
order_amount DECIMAL(10,2) NOT NULL,
order_date DATE,
created_at DATETIME,
PRIMARY KEY (id),
FOREIGN KEY (customers_id) REFERENCES customers (id)
);

INSERT INTO orders (customers_id, order_amount, order_date, created_at)
VALUES (3, 2250.00, cast(now() AS DATE), now()),
(1, 25000.00, cast(now() AS DATE), now()),
(2, 150000.00, cast(now() AS DATE), now());


temp = 33;

if(temp <= 20){
    echo"It is freezing cold today";
}elseif(temp > 20 && temp < 30){
    echo"The weather is just perfect";
}elseif(temp >= 30 and temp < 40){
    echo"It's so hot today.";
}elseif(temp >= 40) {
    echo"Am i in the Sahara today?!";
}

-- ORDER ITEMS
CREATE TABLE order_items (
id INT NOT NULL AUTO_INCREMENT,
orders_id INT NOT NULL,
products_id INT NOT NULL,
quantity INT NOT NULL,
unit_price DECIMAL(10,2) NOT NULL,
total_amount DECIMAL(10,2) NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (orders_id) REFERENCES orders (id),
FOREIGN KEY (products_id) REFERENCES products (id)
);

INSERT INTO order_items (orders_id, products_id, quantity, unit_price, total_amount)
VALUES (1, 2, 1, 3350.00, 3350.00),
(2, 2, 2, 2250.00, 4500.00);