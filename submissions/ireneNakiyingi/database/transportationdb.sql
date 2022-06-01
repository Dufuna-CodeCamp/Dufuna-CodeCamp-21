-- create and select database
CREATE database transport_company;
USE transport_company;

-- create table for the information of the passengers
CREATE TABLE registered_passengers(
id INT NOT NULL auto_increment,
passenger_name VARCHAR(255) NOT NULL,
sex VARCHAR(255) NOT NULL ,
age varchar(5) NULL,
PRIMARY KEY(id)
);

-- create a table for the travel information of the passengers
CREATE TABLE travel_details (
id INT NOT NULL AUTO_INCREMENT,
travel_id INT NOT NULL,
passenger_class ENUM('1','2','3') NOT NULL,
ticket_number VARCHAR(100) NOT NULL,
trip_fare DECIMAL(10,4) NOT NULL,
assigned_cabin VARCHAR(10) NULL,
number_of_parents_children INT NOT NULL,
number_of_siblings_spouses INT NOT NULL,
point_of_embarkation VARCHAR(100) NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (travel_id) REFERENCES registered_passengers(id)
);


-- table in the event of an accident, status = alive/dead
CREATE TABLE flight_status(
id INT NOT NULL AUTO_INCREMENT,
traveller_id INT NOT NULL,
status VARCHAR(10) NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (traveller_id) REFERENCES registered_passengers(id) 
);


