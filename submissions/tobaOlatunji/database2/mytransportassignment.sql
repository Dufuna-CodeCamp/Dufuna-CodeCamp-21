-- TO CREATING TRANSPORTATION COMPANY DATABASE
CREATE DATABASE toptravels;
USE toptravels;
 -- TO CONFIRM THAT THE TRANSPORTATION COMPANY DATABASE WAS CREATED
 SHOW DATABASES;

 -- TO USE THE DATABASE CREATED
 USE toptravels;
 
  -- TO CREATE PASSENGERS TABLE
  CREATE TABLE passengers (
  id INT NOT NULL AUTO_INCREMENT,
  full_name VARCHAR(250) NOT NULL,
  sex VARCHAR(10) NOT NULL,
  age VARCHAR(10) NULL,
  PRIMARY KEY (id)
  );
  
   -- TO CREATE TRAVEL DETAILS TABLE
   CREATE TABLE trip (
   id INT NOT NULL AUTO_INCREMENT,
   passengers_id INT NOT NULL,
   class ENUM('1', '2', '3') NULL DEFAULT '1',
   ticket_number VARCHAR(250) NOT NULL,
   trip_fare DECIMAL(10, 2) NOT NULL,
   assigned_cabin VARCHAR(255),
   parent_children_aboard INT NOT NULL,
   siblings_spouses_aboard INT NOT NULL,
   embarkation VARCHAR(100),
   PRIMARY KEY (id),
   FOREIGN KEY (passengers_id) REFERENCES passengers (id)
   );
   
    -- TO CREATE SURVIVAL TABLE
    CREATE TABLE survivors (
     id INT NOT NULL AUTO_INCREMENT,
     passengers_id INT NOT NULL,
     survivals BOOLEAN NOT NULL,
     PRIMARY KEY (id),
     FOREIGN KEY (passengers_id) REFERENCES passengers (id)
    );

     -- TO SHOW ALL TABLE IN THE TRANSPORTATION COMPANY DATABASE
    SHOW tables;

SELECT * FROM survivors;
SELECT * FROM trip;
SELECT * FROM passengers;

SELECT COUNT(*) 
FROM survivors
WHERE survivors.survivals = '1';
-- the total number of survivals = 342

SELECT COUNT(*) 
FROM survivors
WHERE survivors.survivals = '0';
-- the total number of survivals = 549

SELECT COUNT(*) FROM survivors;
-- the total number of passengers is 891

SELECT full_name, sex
FROM passengers 
INNER JOIN trip
ON  passengers.id = trip.passengers_id
WHERE passengers.age < 27 
AND (embarkation = 'C' OR embarkation = 'Q'); 

SELECT COUNT(*)
FROM passengers 
INNER JOIN trip
ON  passengers.id = trip.passengers_id
WHERE passengers.age < 27 
AND (embarkation = 'C' OR embarkation = 'Q'); 

SELECT COUNT(*)
FROM passengers as p
INNER JOIN trip as t
ON p.id = t.passengers_id
INNER JOIN survivors as su
ON t.passengers_id = su.passengers_id
WHERE su.survivals = '1'
AND embarkation = 'S';

SELECT COUNT(*)
FROM survivors
INNER JOIN trip
ON survivors.passengers_id = trip.passengers_id
WHERE survivors.survivals = '1'
AND embarkation = 'S';
-- passengers that embarked at southampton that survived = 218

SELECT p.id, full_name 
FROM passengers AS p 
INNER JOIN trip AS t
ON p.id = t.passengers_id
WHERE (t.trip_fare > '100' AND p.age > '35')
AND (t.siblings_spouses_aboard > '0');

SELECT COUNT(*)
FROM passengers AS p 
INNER JOIN trip AS t
ON p.id = t.passengers_id
WHERE t.trip_fare > '100' AND p.age > '35'
AND t.siblings_spouses_aboard > '0';
-- passengers who paid over $100 and above the age of 35 and had siblings/spouses aboard = 9