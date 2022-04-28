/*we create a database to use*/
CREATE DATABASE transportation_database;
USE transportation_database;

/*create a passengers table with the associated properties*/
CREATE TABLE passengers_table(
id INT NOT NULL AUTO_INCREMENT,
full_name VARCHAR(255) NOT NULL,
sex VARCHAR(10) NOT NULL,
age INT NULL,

PRIMARY KEY(id)
);

/*create the tickets table with the associated properties*/
CREATE TABLE tickets_table(
id INT NOT NULL AUTO_INCREMENT,
passengers_id INT NOT NULL,
ticket_number VARCHAR(255) UNIQUE NOT NULL,
date_purchased VARCHAR(50) NOT NULL,

PRIMARY KEY(id),
FOREIGN KEY(passengers_id) REFERENCES passengers_table(id)
);

/*create a trips table with the associated properties*/
CREATE TABLE trips_table(
id INT NOT NULL AUTO_INCREMENT,
passenger_id INT NOT NULL,
ticket_id INT NOT NULL, 
class_type INT NOT NULL,
fare DECIMAL(20,4) NOT NULL,
cabin VARCHAR(255) NULL,
number_of_parents_or_children INT NULL, 
number_of_siblings_or_spouses INT NULL,
point_of_embarkation VARCHAR(255)  NOT NULL,

PRIMARY KEY(id),
FOREIGN KEY(passenger_id) REFERENCES passengers_table(id),
FOREIGN KEY(ticket_id) REFERENCES tickets_table(id)
);

CREATE TABLE accidents_table(
id INT NOT NULL,
passengers_id INT NOT NULL,
survival_status BOOLEAN NOT NULL,

PRIMARY KEY(id),
FOREIGN KEY(passengers_id) REFERENCES passengers_table(id)
);