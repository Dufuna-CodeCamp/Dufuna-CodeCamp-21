-- we create a database to be using
CREATE DATABASE food_bag_database;
use food_bag_database;

-- we create the food table consisting of two columns namely, the id and type (four different food categories)
CREATE TABLE food_table(
	id int not null auto_increment,
	type varchar(255) not null,
    primary key(id)
);

-- vendor_food table is the relationship between the vendor itself and the food they sell. This table will 
-- contain all they need to know about the food they sell. There will be a relationship between the food table and this table

CREATE TABLE vendors_table(
	id int not null auto_increment,
	name varchar(255) not null,
	amount decimal(20,4) not null,
    admin_id int not null,
	food_id int not null,
    primary key(id),
    foreign key(food_id) references food_table (id)
);

-- we create the admins table
-- admins table will contain both the system admins of the food bag platform and the vendors
-- they will be differentiated by type admin(0) vendor(1)

CREATE TABLE admins_table(
	id int not null auto_increment,
	name varchar(200) not null,
	type varchar(100) not null,
	email_address varchar(50) not null,
	phone_number text not null,
	password varchar (20) not null,
	primary key (id)
);


-- we create a customer table and specify its columns 
CREATE TABLE customers_table(
	id int not null auto_increment,
	name varchar(100) not null,
	phone_number text not null,
	address varchar(255) not null,
    payment_method varchar(255) null,
    primary key(id)
);

-- we create an orders table
CREATE TABLE orders_table(
	id int not null auto_increment,
	customer_id int null,
    vendor_id int not null, 
	primary key(id),
    foreign key(customer_id) references customers_table(id),
	foreign key(vendor_id) references vendors_table(id)

);