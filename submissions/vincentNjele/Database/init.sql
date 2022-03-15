create database food_bag;

use food_bag;
/* food_table comes here */

create table food_table (
id int not null auto_increment,
food_type varchar(255) not null,
primary key(id)
)


/* vendors_table comes here */


create table vendors_table (
id int not null auto_increment,
admin_id int not null,
food_id int not null,
name varchar(255) not null,
amount double not null,
primary key(id), foreign key(food_id) references food_table(id)
)

/* admins_table comes here */

create table admins_table (
id int not null auto_increment,
name varchar(255) not null,
type int not null,
email_address varchar(255) not null,
phone_number varchar(255) not null,
password varchar(255) not null,
primary key(id)
)

/* customers_table comes here */

create table customers_table (
id int not null auto_increment,
name varchar(255) not null,
phone_number varchar(255) not null,
address varchar(255) not null,
payment_method varchar(255) null,
primary key(id)
)

/* orders_table comes here */

create table orders_table (
id int not null auto_increment,
vendor_id int not null,
customer_id int  null,
primary key(id), foreign key(vendor_id) references vendors_table(id), foreign key(customer_id) references customers_table(id)
)

