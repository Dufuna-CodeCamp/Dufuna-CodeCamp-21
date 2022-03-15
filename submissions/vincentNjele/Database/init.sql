CREATE database food_bag;

use food_bag;
/* food_table comes here */

CREATE TABLE foods_table (
id int NOT null auto_increment,
food_type varchar(255) NOT null,
primary key(id)
)


/* vendors_table comes here */


CREATE TABLE vendors_table (
id int NOT null auto_increment,
admin_id int NOT null,
food_id int NOT null,
name varchar(255) NOT null,
amount double NOT null,
primary key(id), foreign key(food_id) references food_table(id)
)

/* admins_table comes here */

CREATE TABLE admins_table (
id int NOT null auto_increment,
name varchar(255) NOT null,
type int NOT null,
email_address varchar(255) NOT null,
phone_number int NOT null,
password varchar(255) NOT null,
primary key(id)
)

/* customers_table comes here */


CREATE TABLE customers_table (
id int NOT null auto_increment,
name varchar(255) NOT null,
phone_number int NOT null,
address varchar(255) NOT null,
payment_method varchar(255) null,
primary key(id)
)

/* orders_table comes here */

CREATE TABLE orders_table (
id int NOT null auto_increment,
vendor_id int NOT null,
customer_id int  null,
primary key(id), foreign key(vendor_id) references vendors_table(id), foreign key(customer_id) references customers_table(id)
)

