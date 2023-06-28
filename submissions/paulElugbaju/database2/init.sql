CREATE DATABASE jibola_transport_limited;

USE jibola_transport_limited;

CREATE TABLE passengers (
	id INT NOT NULL AUTO_INCREMENT,
    full_name VARCHAR(255) NOT NULL,
    sex ENUM ('male', 'female') NOT NULL DEFAULT 'male',
    age VARCHAR(255),
    PRIMARY KEY (id)
);

CREATE TABLE passengers_details (
	id INT NOT NULL AUTO_INCREMENT,
    passenger_id INT NOT NULL,
    class ENUM ('1', '2', '3') NOT NULL DEFAULT '1',
    ticket_number VARCHAR(255) NOT NULL,
    trip_fare DECIMAL (10, 2) NOT NULL,
    assigned_cabin VARCHAR(255),
    parents_children_aboard INT NOT NULL,
    siblings_spouses_aboard INT NOT NULL,
    point_of_embarkation VARCHAR(255) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (passenger_id) REFERENCES passengers (id)	
);

CREATE TABLE accident_cases (
	id INT NOT NULL AUTO_INCREMENT,
	passenger_id INT NOT NULL,
    status BOOLEAN NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (passenger_id) REFERENCES passengers_details (id)	
);

show tables;