#Create database for transportation company
CREATE DATABASE transportation_company;

#Select transportation company database
USE transportation_company;

#Table for passenger details
CREATE TABLE passenger_details (
	id INT NOT NULL AUTO_INCREMENT,
    full_name VARCHAR(250) NOT NULL,
    sex VARCHAR(10) NOT NULL,
    age VARCHAR(100),
    PRIMARY KEY (id)
);

#Table for travel details
CREATE TABLE travel_details (
	id INT NOT NULL AUTO_INCREMENT,
    passenger_id INT NOT NULL,
    passenger_class ENUM('1', '2', '3') NOT NULL,
    passenger_ticket_number VARCHAR(50) NOT NULL,
    trip_fare DECIMAL(10,2) NOT NULL,
    assigned_cabin VARCHAR(20),
    number_parents_children INT NOT NULL,
    number_siblings_spouses INT NOT NULL,
    embarkation_point VARCHAR(250) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (passenger_id) REFERENCES passenger_details (id)
);

#Table for passenger survivals
CREATE TABLE passenger_survivals (
	id INT NOT NULL AUTO_INCREMENT,
    passenger_id INT NOT NULL,
    survived BOOLEAN NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (passenger_id) REFERENCES passenger_details (id)
);