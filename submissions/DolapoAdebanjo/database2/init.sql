-- CREATE A TRANSPORTATION DATABASE
CREATE DATABASE transportation;
USE transportation;

-- CREATE A passengers table for personal details of passenger
CREATE TABLE passengers (
id INT NOT NULL AUTO_INCREMENT,
age VARCHAR,
PRIMARY KEY(id)
);

--CREATE A passenger_details table for the travel details of passengers.
CREATE TABLE passengers_details (
id INT NOT NULL AUTO_INCREMENT,
passengers_id INT NOT NULL,
passenger_class ENUM('1','2','3') NOT NULL,
ticket_number VARCHAR(20) NOT NULL,
trip_fare FLOAT(10, 2) NOT NULL,
assigned_cabin VARCHAR(20),
number_of_parents_children_aboard INT NOT NULL,
number_of_siblings_spouses_aboard INT NOT NULL,
point_of_embarkation VARCHAR(250) NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (passengers_id) REFERENCES passengers (id)
);

-- CREATE A accident_cases table to track flight statuses and accidents of passengers.
CREATE TABLE accident_cases (
id INT NOT NULL AUTO_INCREMENT,
passengers_id INT NOT NULL,
passenger_survived BOOLEAN NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (passengers_id) REFERENCES passengers (id)
)