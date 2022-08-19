CREATE DATABASE transportation_company;
USE transportation_company;

CREATE TABLE registered_passengers(
	id INT NOT NULL AUTO_INCREMENT,
    full_name VARCHAR(255) NOT NULL,
    sex ENUM ('male', 'female') NOT NULL,
    age INT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE trips(
	id INT NOT NULL AUTO_INCREMENT,
    passenger_class ENUM ('1', '2', '3') NOT NULL,
    registered_passengers_id INT NOT NULL,
    ticket_number VARCHAR(255) NOT NULL,
    trip_fare FLOAT (10, 2) NOT NULL,
    assigned_cabin VARCHAR(50) NULL,
    number_of_parents_or_children INT NULL,
    number_of_siblings_or_spouse INT NULL,
    point_of_embarkment VARCHAR(255) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (registered_passengers_id) REFERENCES registered_passengers (id)
);


CREATE TABLE accidents(
	id INT NOT NULL AUTO_INCREMENT,
    registered_passengers_id INT NOT NULL,
    passenger_status ENUM ('survived', 'deceased') NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (registered_passengers_id) REFERENCES registered_passengers (id)
);


SHOW COLUMNS FROM registered_passengers;
