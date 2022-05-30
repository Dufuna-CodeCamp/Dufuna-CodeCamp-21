CREATE DATABASE REFERENCES;
USE REFERENCES;

CREATE TABLE  passengers (
    id NOT NULL AUTO_INCREMENT PRIMARY key,
    full_name VARCHAR(100) NOT NULL,
    passengers_id INT NOT NULL, 
    age VARCHAR NOT NOT,
    sex VARCHAR(10) NOT NULL, 
    created_at DATETIME, 
);
SHOW TABLES;

CREATE TABLE passengers_details (
	id INT NOT NULL AUTO_INCREMENT FOREIGN KEY (passengers_id),
    passenger_id INT,
    trip_fare DECIMAL(10,2) NOT NULL,
    passenger_ticket_number VARCHAR(20) NOT NULL,
    cabin_code VARCHAR(20),
    passenger_class INT NOT NULL,
    point_of_embarkation VARCHAR(40) NOT NULL,
    number_of_slibing INT NOT NULL,
    number_of_chidren INT NOT NULL,
    created_at DATETIME,
    PRIMARY KEY (id)
    ); 

CREATE TABLE accident_cases (
	id INT NOT NULL AUTO_INCREMENT FOREIGN KEY (passengers_id),
    passenger_id INT,
    accident_discribtion VARCHAR(100) NOT NULL,
	PRIMARY KEY (id)
    );
SHOW TABLES;

