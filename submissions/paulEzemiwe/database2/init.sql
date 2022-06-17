-- Databse for Transportation

-- command to create references database
CREATE DATABASE REFERENCES;
-- command to select references database
USE REFERENCES;
-- command to create passengers table
CREATE TABLE passengers (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    passengers_id INT NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    sex VARCHAR(10) NOT NULL,
    age VARCHAR(10) NOT NULL,
);

-- command to create travel details table
CREATE TABLE passengers_details (
    id INT NOT NULL AUTO_INCREMENT  FOREIGN KEY (passengers_id),
    passenger_class enum('1', '2', '3') NOT NULL,
    ticket_number INT(100) NOT NULL,
    trip_fare VARCHAR(100) NOT NULL,
    assigned_cabin VARCHAR(100) NULL,
    no_of_parents_abroad INT(11) NULL,
    no_of_children_abroad INT(11) NULL,
    no_of_siblings_abroad INT(11) NULL,
    no_of_spouses_abroad INT(11) NULL,
    point_of_embarkation VARCHAR(100) NOT NULL,
    PRIMARY KEY (id),
);

-- command to create accident_cases table
CREATE TABLE accident_cases (
    id INT NOT NULL AUTO_INCREMENT  FOREIGN KEY (passengers_id),
    flight_id VARCHAR(100) NOT NULL,
    status VARCHAR(100) NOT NULL,
    passengers_survived INT(11) NULL,
    passengers_affected INT(11) NOT NULL,
    PRIMARY KEY (id),
);


