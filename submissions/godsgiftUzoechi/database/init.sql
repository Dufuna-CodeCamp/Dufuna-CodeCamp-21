USE food_bag;

-- creating food table 


CREATE TABLE food(
id INT NOT NULL AUTO_INCREMENT,
type ENUM ('vegetable_fruits', 'fastfood','drinks_cocktails', 'resturants') NOT NULL DEFAULT 'drinks_cocktails',
PRIMARY KEY (id)
) ;

-- creating vendor_food table 

CREATE TABLE vendor_food(
id INT NOT NULL AUTO_INCREMENT,
admin_id INT NOT NULL,
food_id INT NOT NULL,
name VARCHAR(255) NOT NULL,
amount DECIMAL (10,2),
PRIMARY KEY (id),
FOREIGN KEY (admin_id) REFERENCES admins (id),
FOREIGN KEY (food_id) REFERENCES food (id)
);

  --  Creating admins table

CREATE TABLE admins(
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR (100) NOT NULL,
tpye ENUM ('0','1') NOT NULL DEFAULT '0',
email_address VARCHAR (50) NOT NULL,
phone_number VARCHAR (40) NOT NULL,
password VARCHAR (50) NOT NULL,
PRIMARY KEY (id)
 );

-- creating customer table 

CREATE TABLE customer(
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR (100) NOT NULL,
phone_number VARCHAR (40) NOT NULL,
address VARCHAR (255) NOT NULL,
payment_method ENUM ('pos', 'cash','transfer','paypal') NOT NULL DEFAULT 'pos',
PRIMARY KEY (id)
);


-- creating order table 

CREATE TABLE orders(
id INT NOT NULL AUTO_INCREMENT,
vendor_id INT NOT NULL,
customer_id INT NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (vendor_id) REFERENCES vendor_food (id), 
FOREIGN KEY (customer_id) REFERENCES customer (id)
);

SHOW TABLES;

SHOW COLUMNS FROM vendor_food;