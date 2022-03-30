/* Create and use transportation_db database */
CREATE DATABASE transportation_db;
USE transportation_db;

/* Create passengers table */
CREATE TABLE passengers (
	id INT NOT NULL AUTO_INCREMENT,
    full_name VARCHAR(250) NOT NULL,
    sex VARCHAR(250) NOT NULL,
    age INT,
    PRIMARY KEY (id)
);

/* Create trips table */
CREATE TABLE trips (
	id INT NOT NULL AUTO_INCREMENT,
    passenger_id INT NOT NULL,
    passenger_class ENUM('1', '2', '3') NOT NULL,
    passenger_ticket_number VARCHAR(250) NOT NULL,
    trip_fare FLOAT(10, 2) NOT NULL,
    assigned_cabin VARCHAR(250),
    number_of_parents_children_aboard INT NOT NULL,
    number_of_siblings_spouses_aboard INT NOT NULL,
    point_of_embarkation VARCHAR(250) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (passenger_id) REFERENCES passengers (id)
);

/* Create accidents table */
CREATE TABLE accidents (
	id INT NOT NULL AUTO_INCREMENT,
    passenger_id INT NOT NULL,
    passenger_survived BOOLEAN NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (passenger_id) REFERENCES passengers (id)
);