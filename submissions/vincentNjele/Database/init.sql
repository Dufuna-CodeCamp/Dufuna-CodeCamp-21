CREATE database food_bag;

use food_bag;
/* food_table comes here */

CREATE TABLE foods_table (
id INT NOT NULL auto_increment,
food_type VARCHAR(255) NOT NULL,
primary key(id)
)


/* vendors_table comes here */


CREATE TABLE vendors_table (
id INT NOT NULL auto_increment,
admin_id INT NOT NULL,
food_id INT NOT NULL,
name VARCHAR(255) NOT NULL,
amount double NOT NULL,
primary key(id), foreign key(food_id) references food_table(id)
)

/* admins_table comes here */

CREATE TABLE admins_table (
id INT NOT NULL auto_increment,
name VARCHAR(255) NOT NULL,
type INT NOT NULL,
email_address VARCHAR(255) NOT NULL,
phone_number INT NOT NULL,
password VARCHAR(255) NOT NULL,
primary key(id)
)

/* customers_table comes here */


CREATE TABLE customers_table (
id INT NOT NULL auto_increment,
name VARCHAR(255) NOT NULL,
phone_number INT NOT NULL,
address VARCHAR(255) NOT NULL,
payment_method VARCHAR(255) NULL,
primary key(id)
)

/* orders_table comes here */

CREATE TABLE orders_table (
id INT NOT NULL auto_increment,
vendor_id VARCHAR NOT NULL,
customer_id INT  NULL,
primary key(id), foreign key(vendor_id) references vendors_table(id), foreign key(customer_id) references customers_table(id)
)

