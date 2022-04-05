<!--This query creates the passengers table -->

CREATE TABLE passengers
(
id INT NOT NULL AUTO_INCREMENT,
full_name VARCHAR(100) NOT NULL,
sex VARCHAR(10) NOT NULL,
age INT,
PRIMARY KEY (id)
);


<!-- This is a query that creates the trips table -->

CREATE TABLE trips
(
id INT NOT NULL AUTO_INCREMENT,
passenger_id INT NOT NULL,
passenger_class ENUM('1','2','3') NOT NULL,
passenger_ticket_number VARCHAR(20) NOT NULL,
trip_fare decimal (30,20) NOT NULL,
assigned_cabin VARCHAR(20),
number_of_parents_and_children_aboard INT NOT NULL,
number_of_siblings_and_spouses_aboard INT NOT NULL,
point_of_embarkation VARCHAR(100) NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (passenger_id) REFERENCES passengers (id)
);

<!-- This is a table that creates the flight_statuses table-->

CREATE TABLE flight_statuses
(
id INT NOT NULL AUTO_INCREMENT,
passenger_id INT NOT NULL,
trip_id INT NOT NULL,
survived ENUM('0','1') NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (passenger_id) REFERENCES passengers (id),
FOREIGN KEY (trip_id) REFERENCES trips (id)
);