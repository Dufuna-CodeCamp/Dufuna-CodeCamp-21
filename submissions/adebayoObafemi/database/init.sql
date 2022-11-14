/* create the database for the task */
create database foodbag;

/* show the databases to confirm the creation of the intende database */
show databases;

/* select the database for use */
USE foodbag;

/* create the food_list table */
create table food_list (
	id int not null auto_increment,
    food_type varchar(20) not null,
    primary key(id)
);

-- rename the food_type column --
ALTER TABLE food_list 
CHANGE food_type type ENUM('fast_food', 'vegetable_fruits', 'drinks_cocktails', 'restaurants') NOT NULL 
DEFAULT 'fast_food';

/* create the vendor_food table */
create table vendor_food (
	id int not null auto_increment,
    admin_id int not null,
    food_id int not null,
    food_name varchar(50) not null,
    amount int not null,
    primary key (id),
    foreign key (food_id) references food_list (id)
);

-- modify food_name columm --  
ALTER TABLE vendor_food
MODIFY food_name VARCHAR(250) NOT NULL;

ALTER TABLE vendor_food
MODIFY amount DECIMAL(10,2) NOT NULL;

/* create the admins table */
create table admins (
	id int not null,
    name varchar(50) not null,
    type varchar(5) not null,
    email_address varchar(100) not null,
    phone_number varchar(15) not null,
    password varchar(20) not null,
    primary key (id)
);

--  add admin_id column to the admins table --
ALTER TABLE admins
ADD admin_id varchar(50) NOT NULL;

ALTER TABLE admins
MODIFY name varchar(250) NOT NULL,
MODIFY type BOOLEAN,
MODIFY email_address VARCHAR(250) NOT NULL;


-- add the admin_id foreign key to the vendor_food table -- 
ALTER TABLE vendor_food
ADD FOREIGN KEY (admin_id) REFERENCES vendor_food (id);


/* modify the id column of the admins table to auto_increment */
alter table admins 
modify column id int not null auto_increment;

/* create the customer table */
create table customer (
	id int not null auto_increment,
    name varchar(100) not null,
    phone_number varchar(15) not null,
    address varchar(255) not null,
    payment_method varchar(50),
    primary key (id)
);

-- modify  customer table --
ALTER TABLE customer
MODIFY name VARCHAR(250) NOT NULL,
MODIFY phone_number VARCHAR(100) NOT NULL,
MODIFY payment_method ENUM('card', 'cash', 'transfer') DEFAULT 'card';

/* create the orders table */
create table orders (
	id int not null auto_increment,
    vendor_id int not null,
    customer_id int not null,
    primary key (id),
    foreign key (vendor_id) references vendor_food (id)
);

-- modify orders table -- 
ALTER TABLE orders
CHANGE customer_id customers_id INT;

ALTER TABLE orders
MODIFY customers_id INT;

ALTER TABLE orders
ADD FOREIGN KEY (customers_id) REFERENCES customer(id);