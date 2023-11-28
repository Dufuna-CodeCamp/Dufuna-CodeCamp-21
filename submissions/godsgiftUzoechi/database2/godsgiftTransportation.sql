CREATE DATABASE giftctravels;
USE giftctravels;

-- creating passengers table

 CREATE TABLE passengers (
  id INT NOT NULL AUTO_INCREMENT,
  full_name VARCHAR(250) NOT NULL,
  sex VARCHAR(10) NOT NULL,
  age VARCHAR(10) NULL,
  PRIMARY KEY (id)
  );
  
  -- Creating trip table 
  
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
   
   -- creating survivors table 
   
   CREATE TABLE survivors (
     id INT NOT NULL AUTO_INCREMENT,
     passengers_id INT NOT NULL,
     survivals BOOLEAN NOT NULL,
     PRIMARY KEY (id),
     FOREIGN KEY (passengers_id) REFERENCES passengers (id)
    );
    
SELECT * FROM survivors;
SELECT * FROM passengers;
SELECT * FROM trip;

SELECT count(*) 
FROM passenger
WHERE survivors.survivals = '1';

-- total number of passengers who survived =342

SELECT count(*) 
FROM survivors
WHERE survivors.survivals = '0';

-- total number of passengers who did not survived =549

SELECT full_name, sex
FROM passengers AS p
INNER JOIN trip AS t
ON p.id = t.passengers_id
WHERE p.age < 27
AND (embarkation = 'q' OR embarkation = 'c');


SELECT COUNT(*)
FROM passengers AS p
INNER JOIN trip AS t
ON p.id = t.passengers_id
WHERE p.age < 27
AND (t.embarkation = 'Q' OR t.embarkation = 'C');


SELECT COUNT(*)
FROM passengers 
INNER JOIN trip
ON  passengers.id = trip.passengers_id
WHERE passengers.age < 27 
AND (embarkation = 'C' OR embarkation = 'Q');

-- passengers under the age of 27 that embarked at Queenstown and Cherbourg =158

SELECT COUNT(*)
FROM trip
INNER JOIN survivors
ON trip.passengers_id = survivors.passengers_id
WHERE survivors.survivals = '1'
AND embarkation = 'S';

-- passengers that embarked at Southampton survived = 218

SELECT p.id, full_name
FROM passengers AS p
INNER JOIN trip AS t
ON  p.id = t.passengers_id
WHERE (t.trip_fare > 100 AND p.age > 35) 
AND (t.siblings_spouses_aboard > 0);


SELECT COUNT(*)
FROM passengers AS p
INNER JOIN trip AS t
ON  p.id = t.passengers_id
WHERE (t.trip_fare > 100 AND p.age > 35) 
AND (t.siblings_spouses_aboard > 0);

-- total number of passengers who paid a fare greater than $100 and above the age of 35 had siblings or spouses on board =9