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

/* create the orders table */
create table orders (
	id int not null auto_increment,
    vendor_id int not null,
    customer_id int not null,
    primary key (id),
    foreign key (vendor_id) references vendor_food (id)
);
