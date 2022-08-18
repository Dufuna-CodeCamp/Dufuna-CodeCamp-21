CREATE DATABASE transportation_company;
USE transportation_company;

CREATE TABLE registered_passengers(
	id INT NOT NULL AUTO_INCREMENT,
    full_name VARCHAR(255) NOT NULL,
    sex ENUM ('male', 'female') NOT NULL,
    age INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE trips(
	id INT NOT NULL AUTO_INCREMENT,
    passenger_class ENUM ('1', '2', '3'),
    passenger_id INT NOT NULL,
    ticket_number VARCHAR(255) NOT NULL,
    trip_fare FLOAT (10, 2) NOT NULL,
    assigned_cabin VARCHAR(255) NOT NULL,
    number_of_parents_or_children INT NOT NULL,
    number_of_siblings_or_spouse INT NOT NULL,
    point_of_embarkment VARCHAR(255) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (passenger_id) REFERENCES registered_passengers (id)
);
ALTER TABLE trips MODIFY passenger_class ENUM ('1', '2', '3') NOT NULL;

CREATE TABLE accidents(
	id INT NOT NULL AUTO_INCREMENT,
    affected_passengers INT NOT NULL,
    passenger_status ENUM ('survived', 'deceased'),
    PRIMARY KEY (id),
    FOREIGN KEY (affected_passengers) REFERENCES registered_passengers (id)
);
ALTER TABLE accidents MODIFY passenger_status ENUM ('survived', 'deceased') NOT NULL;

SHOW COLUMNS FROM accidents;







