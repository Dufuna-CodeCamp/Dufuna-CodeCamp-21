CREATE database food_bag;
use food_bag;

CREATE TABLE food_table (
	id INT NOT NULL auto_increment,
	food_type VARCHAR(255) NOT NULL,
	primary key(id)
);

CREATE TABLE vendors_table (
	id INT NOT NULL auto_increment,
	admin_id INT NOT NULL,
	food_id INT NOT NULL,
	name VARCHAR (255) NOT NULL,
	amount DECIMAL NOT NULL,
	primary key(id), foreign key(food_id) references food_table(id) 
);

CREATE TABLE admins_table (
	id INT NOT NULL auto_increment,
	name VARCHAR (255) NOT NULL,
	type ENUM ('0','1') NOT NULL,
	email_address VARCHAR (255) NOT NULL,
	phone_number VARCHAR (50) NOT NULL,
	password VARCHAR (255) NOT NULL,
	primary key(id)
);

CREATE TABLE customers_table (
	id INT NOT NULL auto_increment,
	name VARCHAR (255) NOT NULL,
	phone_number VARCHAR (50) NOT NULL,
	address VARCHAR (255) NOT NULL,
	payment_method VARCHAR (255) NULL,
	primary key(id)
);

CREATE TABLE orders_table (
	id INT NOT NULL auto_increment,
	vendor_id INT NULL,
	customer_id INT NOT NULL,
	primary key(id),
	foreign key(vendor_id) references vendors_table(id), 
	foreign key(customer_id) references customers_table(id)
)
