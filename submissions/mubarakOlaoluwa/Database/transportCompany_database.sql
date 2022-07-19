/*Creating the database*/
CREATE DATABASE transport;

/*Selecting the database after creation*/
USE transport;

/*Creating the first table (passengers)*/
CREATE TABLE passengers (
	id INT NOT NULL AUTO_INCREMENT,
    full_name VARCHAR(250) NOT NULL,
    sex VARCHAR(10) NOT NULL,
    age INT,
    PRIMARY KEY (id)
);

/*Creating the second table (trips)*/
CREATE TABLE trips (
	id INT NOT NULL AUTO_INCREMENT,
    class INT NOT NULL,
    ticket_number VARCHAR(20) NOT NULL,
    fare INT NOT NULL,
    cabin VARCHAR (10),
    parents_or_children INT NOT NULL,
    siblings_or_spouses INT NOT NULL,
    embarkation VARCHAR (50),
    passengers_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (passengers_id) REFERENCES passengers (id) 
);

/*Creating the third table (accidents)*/
CREATE TABLE accidents(
	id INT NOT NULL AUTO_INCREMENT,
    survived BOOLEAN NOT NULL,
    passengers_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (passengers_id) REFERENCES trips (id)
);