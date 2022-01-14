--create a database for a transport company
CREATE DATABASE REFERENCES;

-- Use the created database
Use REFERENCES;
-- Table for passengers
CREATE TABLE passengers(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  passengers_id INT NOT NULL, 
  fullname VARCHAR NOT NULL,
  sex VARCHAR NOT NULL,
  age VARCHAR
);


-- Table for Passenger's Details
CREATE TABLE passengers_details(
    id INT NOT NULL AUTO_INCREMENT  FOREIGN KEY (passengers_id),
    passenger_id INT,
    passenger_class INT NOT NULL,
    passenger_ticket VARCHAR NOT NULL,
    trip_fare DECIMAL NOT NULL,
    assigned_cabin VARCHAR,
    parents_children INT NOT NULL,
    siblings_spouses INT NOT NULL,
    embark_point VARCHAR NOT NULL,
    PRIMARY KEY (id)
);

-- TABLE for Accident issues
CREATE TABLE accident_cases(
   id INT NOT NULL AUTO_INCREMENT  FOREIGN KEY (passengers_id),
   passenger_id INT,
   survive BOOLEAN NOT NULL,
   PRIMARY KEY (id)

);