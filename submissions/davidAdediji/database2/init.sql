-- create database for transportation company
CREATE DATABASE transportation_company;

-- use transportation company database
USE transportation_company;


-- 1. Create Passengers table 
CREATE TABLE passengers(
    id INT NOT NULL AUTO_INCREMENT,
    full_name VARCHAR(50) NOT NULL,
    sex VARCHAR(10) NOT NULL,
    age VARCHAR(50),
    PRIMARY KEY (id)
);

-- 2. Create passenger details table
CREATE TABLE passenger_details(
    id INT NOT NULL AUTO_INCREMENT,
    passenger_id INT NOT NULL,
    passenger_class ENUM('1', '2', '3') NOT NULL, 
    ticket_number VARCHAR(50) NOT NULL;
    trip_fare DECIMAL(10,2) NOT NULL,
    assigned_cabin VARCHAR(50),
    parent_children_no INT NOT NULL,
    siblings_spouse_no INT NOT NULL,
    embarkment_point VARCHAR(250) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (passenger_id) REFERENCES passengers (id)
);


CREATE TABLE accident_cases (
    id INT NOT NULL AUTO_INCREMENT,
    passengers_id INT NOT NULL,
    passenger_survived BOOLEAN NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (passengers_id) REFERENCES passengers (id)
);

