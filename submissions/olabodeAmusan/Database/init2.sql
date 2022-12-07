CREATE DATABASE transportation_company;
USE transportation_company;
CREATE TABLE passengers(
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(250) NOT NULL,
sex ENUM('male','female') NOT NULL DEFAULT 'male',
age INT NOT NULL DEFAULT '0',
PRIMARY KEY(id)
);

CREATE TABLE trips(
id INT NOT NULL AUTO_INCREMENT,
passenger_id INT NOT NULL,
passenger_class ENUM('1','2','3') NOT NULL DEFAULT '1',
ticket_number VARCHAR(8) NOT NULL,
trip_fare DECIMAL(10,2) NOT NULL,
assigned_cabin VARCHAR(5) NOT NULL DEFAULT 'nil',
parent INT NOT NULL,
siblings INT NOT NULL,
embarkation VARCHAR (250) NOT NULL ,
PRIMARY KEY(id),
FOREIGN KEY(passenger_id) REFERENCES passengers(id)
);

CREATE TABLE accidents(
id INT NOT NULL AUTO_INCREMENT,
passenger_id INT NOT NULL,
trip_id INT NOT NULL,
survival ENUM('yes', 'no') NOT NULL DEFAULT 'yes',
PRIMARY KEY(id),	
FOREIGN KEY(passenger_id) REFERENCES passengers(id),
FOREIGN KEY(trip_id) REFERENCES trips(id)
);

