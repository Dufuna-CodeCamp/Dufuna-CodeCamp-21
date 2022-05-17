CREATE DATABASE transport;
USE transport;
CREATE TABLE passengers (
	id INT NOT NULL AUTO_INCREMENT,
    full_name VARCHAR(250) NOT NULL,
    sex VARCHAR(250) NOT NULL,
    age INT,
    PRIMARY KEY (id)
);
CREATE TABLE trip_details (
	id INT NOT NULL AUTO_INCREMENT,
    passenger_id INT NOT NULL,
    passenger_class ENUM('1', '2', '3') NOT NULL,
    passenger_ticket_number VARCHAR(250) NOT NULL,
    trip_fare FLOAT(15,2) NOT NULL,
    assigned_cabin VARCHAR(250),
    parents_children INT NOT NULL,
    siblings_spouuses INT NOT NULL,
    embarkation_point VARCHAR(250) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (passenger_id) REFERENCES passengers (id) 
);

CREATE TABLE accidents (
	id INT NOT NULL AUTO_INCREMENT,
    survived ENUM('0','1') NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id) REFERENCES passengers (id) 
);