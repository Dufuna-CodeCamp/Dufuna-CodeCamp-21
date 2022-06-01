-- Database created
CREATE DATABASE transportation_company;


-- Use the database created
USE transportation_company;


-- Table structure for passenger_details

CREATE TABLE passenger_details(
    id INT NOT NULL AUTO_INCREMENT,
    full_name VARCHAR(250) NOT NULL,
    sex VARCHAR(250) NOT NULL,
    age VARCHAR(250),
    PRIMARY KEY (id)
);


-- Table structure for passenger_travel_details
CREATE TABLE passenger_travel_details(
    id INT NOT NULL AUTO_INCREMENT,
    passenger_id INT NOT NULL,
    passenger_class ENUM('1', '2', '3') NOT NULL,
    passenger_ticket_number VARCHAR(250) NOT NULL,
    trip_fare DECIMAL NOT NULL,
    assigned_cabin VARCHAR(250),
    number_parent_children VARCHAR(250) NOT NULL,
    number_siblings_spouse VARCHAR(250) NOT NULL,
    embark_point VARCHAR(250) NOT NULL,
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
