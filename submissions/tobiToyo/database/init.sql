/* CREATION OF DATABASE */
create database food_bag;

use food_bag;

/* CREATION OF food_table*/
create table food ( 
	id int not null auto_increment, 
	type varchar(60) not null,
    primary key (id) 
    );


/* CREATION OF admins table*/
create table  admins (
		id int not null auto_increment, 
		name varchar(250) not null, type int not null, 
		email_address varchar(250) not null, 
		phone_number bigint not null, 
        password varchar(250) not null, 
        primary key(id) 
        );

/* CREATION OF vendor_food table*/
 create table vendor_food (
	id int not null auto_increment,
	admin_id int not null, 
	food_id int not null, 
	name varchar(250) not null, 
	amount int not null, 
	primary key(id), 
	foreign key (admin_id) references admins (id), 
	foreign key (food_id) references food(id)
 );


/* CREATION OF customer table*/
create table customer ( id int not null auto_increment, 
	name varchar(250) not null,
    phone_number bigint not null,
    address varchar(250) not null,
    payment_method varchar(250),
    primary key(id) ); 


/* CREATION OF orders table*/
create table orders ( id int not null auto_increment,
	vendor_id int not null,
    customer_id int,
    primary key(id),
    foreign key(vendor_id) references vendor_food(id),
    foreign key(customer_id) references customer(id)
    ); 
    

