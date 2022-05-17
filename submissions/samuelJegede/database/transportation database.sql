CREATE DATABASE transport;
USE transport;
CREATE TABLE passengers (
	id INT NOT NULL AUTO_INCREMENT,
    full_name VARCHAR(250) NOT NULL,
    sex VARCHAR(6) NOT NULL,
    age VARCHAR(3),
    PRIMARY KEY (id)
);
CREATE TABLE trip_details (
	id INT NOT NULL AUTO_INCREMENT,
    passenger_id INT NOT NULL,
    passenger_class ENUM('1', '2', '3') NOT NULL,
    passenger_ticket_number VARCHAR(10) NOT NULL,
    trip_fare VARCHAR(20) NOT NULL,
    assigned_cabin VARCHAR(4),
    parents_children INT NOT NULL,
    siblings_spouuses INT NOT NULL,
    embarkation_point VARCHAR(250) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (passenger_id) REFERENCES passengers (id) 
);

CREATE TABLE accidents (
	id INT NOT NULL AUTO_INCREMENT,
    survived VARCHAR(3) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id) REFERENCES passengers (id)
);