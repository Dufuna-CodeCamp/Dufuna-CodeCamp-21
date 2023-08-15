/* Creating food_bag database */
create database food_bag;
show databases;
use food_bag;
/* Creating food table */
create table food ( 
	id int not null auto_increment, 
	type ENUM('fast_food', 'vegetable_fruits', 'drinks_cocktails', 'restaurants') not null default 'fast_food',
    primary key (id) 
    );

/* Creating admins table */
create table  admins (
	id int not null auto_increment, 
	name varchar(250) not null, 
    type int not null, 
	email_address varchar(250) not null, 
	phone_number int not null, 
	password varchar(250) not null, 
	primary key(id) 
	);

/* Creating vendor table */
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
    
/* Creating customer table */
create table customer ( 
	id int not null auto_increment, 
	name varchar(255) not null,
    phone_number varchar(250) not null,
    address varchar(250) not null,
    payment_method ENUM('card', 'cash', 'transfer') null default 'card',
    primary key(id) 
    );
    
/* Creating order table */
create table orders ( 
	id int not null auto_increment,
	vendor_id int not null,
    customer_id int not null,
    primary key(id),
    foreign key(vendor_id) references vendor_food(id),
    foreign key(customer_id) references customer(id)
    );