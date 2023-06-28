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

#For total number of passengers who survived
SELECT COUNT(*) FROM passenger_survivals WHERE survived = 1;
# RESULT = 342

#For total number of passengers who did not survive
SELECT COUNT(*) FROM passenger_survivals WHERE survived = 0;
# RESULT = 549

#For name and sex of passengers under age of 27 that embarked at Queenstown and Cherbourg
SELECT passenger_details.full_name, passenger_details.sex 
FROM passenger_details INNER JOIN travel_details ON passenger_details.id = travel_details.passenger_id
WHERE passenger_details.age < 27 AND travel_details.embarkation_point = 'Q' OR travel_details.embarkation_point = 'C';

#For number of surviving passengers who embarked at Southampton
SELECT COUNT(*) FROM passenger_survivals 
INNER JOIN travel_details ON passenger_survivals.passenger_id = travel_details.passenger_id
WHERE passenger_survivals.survived = 1 AND travel_details.embarkation_point = 'S';
# RESULT = 218

#For id, name and total number of passengers who paid a fare greater than $100 and above the age of 35 and had siblings or spouses on board
SELECT COUNT(passenger_details.full_name), passenger_details.id, passenger_details.full_name FROM passenger_details
INNER JOIN travel_details ON passenger_details.id = travel_details.passenger_id
WHERE travel_details.trip_fare > 100.00 AND passenger_details.age > 35 AND travel_details.number_siblings_spouses > 0;
# RESULT = 9