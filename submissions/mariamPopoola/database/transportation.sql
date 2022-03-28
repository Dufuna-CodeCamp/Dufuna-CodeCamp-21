-- Database created
CREATE DATABASE transportation_company;


-- Use the database created
USE transportation_company;


-- Table structure for passenger_details

CREATE TABLE passenger_details(
    id INT NOT NULL AUTO_INCREMENT,
    full_name VARCHAR(100) NOT NULL,
    sex VARCHAR(11) NOT NULL,
    age INT ,
    PRIMARY KEY (id)
);


-- Table structure for passenger_travel_details

CREATE TABLE passenger_travel_details(
    id INT NOT NULL AUTO_INCREMENT,
    passenger_id INT NOT NULL,
    passenger_class INT NOT NULL,
    passenger_ticket_number VARCHAR(100) NOT NULL,
    trip_fare DECIMAL NOT NULL,
    assigned_cabin VARCHAR(100) NOT NULL,
    number_parent_children INT NOT NULL,
    number_siblings_spouse INT NOT NULL,
    embark_point VARCHAR(100) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY(passenger_id) REFERENCES passenger_details (id)
);


-- Table structure for accident_cases

CREATE TABLE accident_cases(
   id INT NOT NULL AUTO_INCREMENT,
   passenger_id INT NOT NULL,
   survive BOOLEAN NOT NULL,
   PRIMARY KEY (id),
   FOREIGN KEY(passenger_id) REFERENCES passenger_details (id)
);

