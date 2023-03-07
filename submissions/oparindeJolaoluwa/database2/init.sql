-- Create database 

CREATE DATABASE transportation_company;

-- Show if the database was created

SHOW DATABASES;

-- Select the trasnportation database

USE transportation_company;


-- Table 1 passengers

CREATE TABLE passengers(
    id INT NOT NULL AUTO_INCREMENT,
    full_name VARCHAR(250) NOT NULL,
    sex VARCHAR(10) NOT NULL,
    age VARCHAR(20),
    PRIMARY KEY (id)
);


-- Table 2 Trip details

CREATE TABLE trips(
	id INT NOT NULL AUTO_INCREMENT,
    passengers_id INT NOT NULL,
    passengers_class ENUM('1','2','3') NOT NULL,
    ticket_number VARCHAR(250) NOT NULL,
    trip_fare VARCHAR(250) NOT NULL,
	assigned_cabin VARCHAR(250),
    parents INT NOT NULL,
    children INT NOT NULL,
    siblings_aboard INT NOT NULL,
    spouses_aboard INT NOT NULL,
    embarkation VARCHAR(250) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (passengers_id) REFERENCES passengers(id)
);

-- Table 3 accident

CREATE TABLE accident_cases (
	id INT NOT NULL AUTO_INCREMENT,
    passengers_id INT NOT NULL,
    trips_id INT NOT NULL,
    survived ENUM('YES', 'NO') NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (passengers_id) REFERENCES passengers(id),
    FOREIGN KEY (trips_id) REFERENCES trips(id)
);

-- passengers details table 
CREATE TABLE passengers_details (
	id INT NOT NULL AUTO_INCREMENT,
    passengers_id INT NOT NULL,
    sex ENUM('male', 'female') NOT NULL,
    PRIMARY KEY (id),
     FOREIGN KEY (passengers_id) REFERENCES passengers(id)
);
