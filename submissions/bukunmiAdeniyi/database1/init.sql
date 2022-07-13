-- FIRSTLY CREATING  a transport company DATABASE

CREATE DATABASE transports;

-- USING  the transport DATABASE created
USE transports;


-- CREATING a TABLE named passengers
CREATE TABLE passengers(
id INT NOT NULL AUTO_INCREMENT,
full_name VARCHAR(250) NOT NULL,
age VARCHAR(5) NULL,
sex VARCHAR(50),
created_at DATETIME,
PRIMARY KEY (id)
);




-- CREATING a TABLE keeping the records of passengers 
 CREATE TABLE passengers_details (
     id INT NOT NULL AUTO_INCREMENT,  
     passenger_class ENUM('3','2', '1') NOT NULL,
     ticket_number VARCHAR(50) NOT NULL,
     trip_fare DECIMAL(10,5) NOT NULL,
     assigned_cabin VARCHAR(100)  NULL,
     number_parent INT NULL,
     number_sibling  INT NULL,
     point_embarkation ENUM('S', 'Q', 'C') NOT NULL,
     passengers_id INT NOT NULL,
    PRIMARY KEY(id),
     FOREIGN KEY (passengers_id) REFERENCES passengers (id)
      );
    
   
 USE transports;
 CREATE TABLE survivals (
 id INT NOT NULL AUTO_INCREMENT,
 passenger_id INT NOT NULL,
survival ENUM('0 = NO', '1 = YES'),
PRIMARY KEY (id),
FOREIGN KEY(passenger_id) REFERENCES passengers (id)
);





-- What is the total number of passengers who survived?
SELECT COUNT(survival) FROM survivals WHERE survival = 1;
342

-- What is the total number of passengers who did not survived?
SELECT COUNT(survival) FROM survivals WHERE survival = 0;
549 

-- Get the name and sex of passengers under the age of 27 that embarked at Queenstown and Cherbourg?
SELECT passengers.full_name, passengers.age FROM passengers 
INNER JOIN passengers_details ON  passengers.id = passengers_details.passengers_id
WHERE passengers.age < 27 AND (passengers_details.point_embarkation = 'C'or passengers_details.point_embarkation = 'Q')
ORDER BY passengers.id ASC;


-- How many of the passengers that embarked at Southampton survived?
SELECT COUNT(*) FROM survivals INNER JOIN passengers_details ON survivals.passenger_id = passengers_details.passengers_id
WHERE passengers_details.point_embarkation='S' AND survivals.survival=1;

218

-- Get the id, name and the total number of passengers who paid a fare greater than $100 and above the age of 35 had siblings or spouses on board
SELECT passengers.id, passengers.full_name FROM passengers
INNER JOIN passengers_details ON passengers.id = passengers_details.passengers_id
WHERE passengers_details.trip_fare > 100 AND passengers.age > 35 AND passengers_details.number_sibling > 0;


SELECT COUNT(*) FROM passengers INNER JOIN passengers_details ON passengers.id = passengers_details.passengers_id
WHERE passengers_details.trip_fare > 100.00 AND passengers.age > 35 AND passengers_details.number_sibling > 0;
