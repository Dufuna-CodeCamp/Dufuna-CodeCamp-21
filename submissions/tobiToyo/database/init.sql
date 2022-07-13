/* CREATION OF DATABASE */
create database food_bag;
show databases; 
use food_bag;

/* CREATION OF food_table*/
create table food ( id int not null auto_increment, 
	type varchar(60) not null,
    primary key (id) );
show tables;
show columns from food;

insert into food (type) 
	values ('Fast Food'), 
		('Vegetables & Fruits'), 
        ('Drinks & Cocktails'), 
        ('Restaurants');
select * from food;

/* CREATION OF admins table*/
create table  admins (id int not null auto_increment, 
	name varchar(250) not null, type int not null, 
		email_address varchar(250) not null, 
		phone_number varchar(250) not null, 
        password varchar(250) not null, 
        primary key(id) );
        
select * from admins;

insert into admins (name, type, email_address, phone_number, password) 
	values ("Jane Tayloe", 0, "jane.tayloe@foodbag.com", "08100456398", "jane.tayloe"),
		("KFC", 1, "sales@kfc.com", "08087361887", "kfc.food"),
		("Chicken Republic", 1, "sales@chickenrepublic.com", "09063782457", "chi.repub");
select * from admins;

/* CREATION OF vendor_food table*/
 create table vendor_food (
	id int not null auto_increment,
	admin_id int not null, 
	food_id int not null, 
	name varchar(250) not null, 
	amount varchar(250) not null, 
	primary key(id), 
	foreign key (admin_id) references admins (id), 
	foreign key (food_id) references food(id)
 );
 
 
select * from vendor_food;

insert into vendor_food ( admin_id, food_id, name, amount) 
	values (2, 1, "King Bucket", "5000"), 
		(2, 2, "Zinger Burger", "3600"), 
        (2, 4, "Yamilicious", "900"),
        (2, 3, "Chicken Strips", "1450"),
		(3, 1, "Citizen Meal", "1500"), 
		(3, 3, "Crunchy Wings", "1750"),
        (3, 2, "Refuel Max", "1200"),
        (3, 4, "Express meal", "2000");
        

select * from vendor_food;


/* CREATION OF customer table*/
create table customer ( id int not null auto_increment, 
	name varchar(250) not null,
    phone_number varchar(250) not null,
    address varchar(250) not null,
    payment_method varchar(250),
    primary key(id) ); 
select * from customer;

insert into customer (name, phone_number, address, payment_method)
	values ("Joan Steele", "07023453234", "4th avenue", "credit card"),
    ("Ade Taiwo", "09123783412", "2nd avenue", null);
    
select * from customer;


/* CREATION OF orders table*/
create table orders ( id int not null auto_increment,
	vendor_id int not null,
    customer_id int,
    primary key(id),
    foreign key(vendor_id) references vendor_food(id),
    foreign key(customer_id) references customer(id)
    ); 
    
select * from orders;

insert into orders (vendor_id, customer_id)
	values (1, 2),
		(3, 1),
        (4, null);
        
select * from orders;
