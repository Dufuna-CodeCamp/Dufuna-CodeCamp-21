CREATE DATABASE transportation;

USE transportation;

/*create a passengers table with  properties comes below*/

CREATE TABLE passengers_table(
id INT NOT NULL auto_increment,
full_name VARCHAR(255) NOT NULL,
sex VARCHAR(10) NOT NULL,
age INT NULL,
primary key(id)
);

/* tickets_table comes here*/

CREATE TABLE tickets_table(
id INT NOT NULL auto_increment,
passengers_id INT NOT NULL,
ticket_number VARCHAR(255) UNIQUE NOT NULL,
date_purchased VARCHAR(50) NOT NULL,
primary key(id),
foreign key(passengers_id) references passengers_table(id)
);


/*create a trips table comes here*/

CREATE TABLE trips_table(
id INT NOT NULL auto_increment,
passenger_id INT NOT NULL,
ticket_id INT NOT NULL,
class_type INT NOT NULL,
trip_fare FLOAT NOT NULL,
cabin VARCHAR(255) NULL,
num_of_parents_or_children INT NULL,
num_of_siblings_or_spouses INT NULL,
embarkation_point VARCHAR(255) NOT NULL,
primary key(id),
foreign key(passenger_id) references passengers_table(id),
foreign key(ticket_id) references tickets_table(id)
);

/* accidents_table comes here*/

CREATE TABLE accidents_table(
id INT NOT NULL,
passenger_id INT NOT NULL,
survival_status BOOL NOT NULL,
primary key(id),
foreign key(passengers_id) references passengers_table(id)
);


