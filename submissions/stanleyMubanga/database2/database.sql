-- CREATE THE DATABASE FOR THE COMPANY
CREATE DATABASE transportation_company_db;

-- CHOOSE TO USE THE DATABASE CREATED ABOVE
USE transportation_company_db;

-- CREATE TABLE FOR PASSENGERS
CREATE TABLE passengers (
	id INT NOT NULL AUTO_INCREMENT,
    full_name VARCHAR(250) NOT NULL,
    PRIMARY KEY (id)
);


CREATE TABLE passengers_details (
	id INT NOT NULL AUTO_INCREMENT,
    passengers_id INT NOT NULL,
    sex VARCHAR(10) NOT NULL,
    age VARCHAR(3),
    PRIMARY KEY (id),
    FOREIGN KEY (passengers_id) REFERENCES passengers (id)
);

-- CREATE TABLE FOR TRIPS 
CREATE TABLE trips (
	id INT NOT NULL AUTO_INCREMENT,
    passengers_id INT NOT NULL,
    passenger_class ENUM('1', '2', '3') NOT NULL,
    passenger_ticket_number VARCHAR(250) NOT NULL,
    passenger_assigned_cabin VARCHAR(10),
    trip_fare DECIMAL(10, 2) NOT NULL,
    parents_number_aboard INT NOT NULL,
    siblings_number_aboard INT NOT NULL,
    embarkation_point VARCHAR(250) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (passengers_id) REFERENCES passengers_details (id)
);

-- CREATE TABLE FOR ACCIDENT SURVIVORS(ONLY USED IF AN ACCIDENT OCCURS
CREATE TABLE accident_cases (
	id INT NOT NULL AUTO_INCREMENT,
    passengers_id INT NOT NULL,
	survived BOOLEAN NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (passengers_id) REFERENCES passengers_details (id)
);
