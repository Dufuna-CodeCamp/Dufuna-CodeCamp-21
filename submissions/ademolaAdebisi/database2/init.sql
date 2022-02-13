-- create a database travel_records
CREATE DATABASE travel_records;
-- select the database travel_records
USE travel_records;
-- create table structure for passengers
CREATE TABLE passengers (
    passengers_id INT NOT NULL AUTO_INCREMENT,
    full_name VARCHAR(100) NOT NULL,
    sex VARCHAR(20) NOT NULL,
    age VARCHAR(20),
    PRIMARY KEY (passengers_id)
);

SELECT * FROM accident_cases;

-- create table structure for passengers_details
CREATE TABLE passengers_details (
	id INT NOT NULL AUTO_INCREMENT,
    passenger_id INT,
    passenger_class INT NOT NULL,
    passenger_ticket VARCHAR(20) NOT NULL,
    trip_fare DECIMAL(10,2) NOT NULL,
    assigned_cabin VARCHAR(20) NOT NULL,
    parents_children INT NOT NULL,
    siblings_spouses INT NOT NULL,
    embark_point VARCHAR(20) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY(passenger_id) REFERENCES passengers(passengers_id)
);

-- create table structure for accident_cases
CREATE TABLE accident_cases (
	id INT NOT NULL AUTO_INCREMENT,
    passenger_id INT,
    survived BOOLEAN NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (passenger_id) REFERENCES passengers (passengers_id)
);





