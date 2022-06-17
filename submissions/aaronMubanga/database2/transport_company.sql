
-- Database

CREATE DATABASE transportion_company;

SHOW DATABASES;

USE transportion_company;

-- Tables

-- (1) passengers

CREATE TABLE passengers(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(250) NOT NULL,
    age VARCHAR(10) NOT NULL,
    PRIMARY KEY (id)
);

-- (2) Passenger's details table

CREATE TABLE passengers_details (
	id INT NOT NULL AUTO_INCREMENT,
    passengers_id INT NOT NULL,
    sex ENUM('male', 'female') NOT NULL,
    PRIMARY KEY (id),
     FOREIGN KEY (passengers_id) REFERENCES passengers(id)
);

-- (3) Trip details

CREATE TABLE trips(
	id INT NOT NULL AUTO_INCREMENT,
    passengers_id INT NOT NULL,
    passengers_class ENUM('1','2','3') NOT NULL,
    ticket_number VARCHAR(250) NOT NULL,
    trip_fare VARCHAR(250) NOT NULL,
	assigned_cabin VARCHAR(250),
    parents INT NOT NULL,
    spouses_aboard INT NOT NULL,
    children INT NOT NULL,
    siblings_aboard INT NOT NULL,
    embarkation VARCHAR(250) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (passengers_id) REFERENCES passengers(id)
);

-- (4) Accentents

CREATE TABLE accident_cases (
	id INT NOT NULL AUTO_INCREMENT,
    passengers_id INT NOT NULL,
    trips_id INT NOT NULL,
    survived ENUM('YES', 'NO') NOT NULL,
    PRIMARY KEY (id)
    FOREIGN KEY (passengers_id) REFERENCES passengers(id),
    FOREIGN KEY (trips_id) REFERENCES trips(id)
);


