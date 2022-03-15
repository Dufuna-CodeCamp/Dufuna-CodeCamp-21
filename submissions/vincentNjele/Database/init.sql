CREATE database food_bag;

use food_bag;
/* food_table comes here */

CREATE TABLE foods_table (
id INT NOT null auto_increment,
food_type VARCHAR(255) NOT null,
primary key(id)
)


/* vendors_table comes here */


CREATE TABLE vendors_table (
id INT NOT null auto_increment,
admin_id INT NOT null,
food_id INT NOT null,
name VARCHAR(255) NOT null,
amount double NOT null,
primary key(id), foreign key(food_id) references food_table(id)
)

/* admins_table comes here */

CREATE TABLE admins_table (
id INT NOT null auto_increment,
name VARCHAR(255) NOT null,
type INT NOT null,
email_address VARCHAR(255) NOT null,
phone_number INT NOT null,
password VARCHAR(255) NOT null,
primary key(id)
)

/* customers_table comes here */


CREATE TABLE customers_table (
id INT NOT null auto_increment,
name VARCHAR(255) NOT null,
phone_number INT NOT null,
address VARCHAR(255) NOT null,
payment_method VARCHAR(255) null,
primary key(id)
)

/* orders_table comes here */

CREATE TABLE orders_table (
id INT NOT null auto_increment,
vendor_id VARCHAR NOT null,
customer_id INT  null,
primary key(id), foreign key(vendor_id) references vendors_table(id), foreign key(customer_id) references customers_table(id)
)

