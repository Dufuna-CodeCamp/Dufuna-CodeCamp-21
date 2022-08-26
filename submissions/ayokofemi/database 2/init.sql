show databases;
CREATE DATABASE transportation_company;
USE transportation_company;

--this is for details of registered_passenger--
CREATE TABLE registered_passengers (
id INT NOT NULL AUTO_INCREMENT,
full_name VARCHAR(250) NOT NULL,
sex VARCHAR(6) NOT NULL,
age INT(3) NULL,
PRIMARY KEY (id)
);

--this is for record_details of flight--
CREATE TABLE record_details (
id INT NOT NULL AUTO_INCREMENT,
passengers_id INT NOT NULL,
passenger_class ENUM('1','2','3') NOT NULL,
passenger_ticket_number VARCHAR(10) NOT NULL,
trip_fare DECIMAL(9,2) NOT NULL,
assigned_cabin VARCHAR(9) NOT NULL,
number_of_parents_children_aboard INT(2) NULL,
number_of_siblings_spouses_aboard INT(2) NULL,
point_of_embarkation VARCHAR(15) NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (passengers_id) REFERENCES registered_passengers(id)
);

--this is for accident_status--
CREATE TABLE accident_statuses (
id INT NOT NULL AUTO_INCREMENT,
passenger_id INT NOT NULL,
status BOOLEAN NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (passenger_id) REFERENCES registered_passengers(id)
);
