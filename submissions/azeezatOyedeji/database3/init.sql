-- create travel database;
CREATE DATABASE travel;

-- specify which database to use;
USE travel;

-- solution to query 1
SELECT COUNT(*) FROM accident_cases WHERE survived = 1;
-- 342

-- query 2
SELECT COUNT(*) FROM accident_cases WHERE survived = 0;
-- 549

-- query 3
SELECT passengers.full_name, passengers.sex, passengers_details.embarked
 FROM passengers INNER JOIN passengers_details
 ON passengers.id = passengers_details.id
 WHERE passengers.age < 27 AND passengers_details.embarked LIKE 'C' 
 OR passengers_details.embarked LIKE 'Q';

-- query 4
SELECT COUNT(*)
FROM passengers_details INNER JOIN accident_cases
ON passengers_details.id = accident_cases.id
WHERE passengers_details.embarked LIKE 'S' AND accident_cases.survived = 1; 
-- 218

-- query 5
SELECT passengers_details.id, passengers.full_name
FROM passengers INNER JOIN passengers_details
ON passengers.id = passengers_details.id
WHERE passengers_details.trip_fare > 100 
AND passengers.age > 35 
AND passengers_details.num_siblings_spouses > 0;
-- 9

-- to create passenger details table;
CREATE TABLE passengers(
id INT NOT NULL AUTO_INCREMENT,
full_name VARCHAR(50) NOT NULL,
sex VARCHAR(7) NOT NULL,
age VARCHAR(3),
PRIMARY KEY (id)
);

-- travel details data table;
CREATE TABLE passengers_details(
id INT NOT NULL AUTO_INCREMENT,
ticket_num VARCHAR(20) NOT NULL,
trip_fare DECIMAL(10,4) NOT NULL,
cabin VARCHAR(6),
embarked CHAR(1) NOT NULL,
p_class INT NOT NULL,
num_siblings_spouses INT NOT NULL,
num_parent_children INT NOT NULL,
PRIMARY KEY (id)
);

-- to create survival table;
CREATE TABLE accident_cases(
 id INT NOT NULL AUTO_INCREMENT,
 passengers_id INT NOT NULL,
 survived BOOLEAN NOT NULL,
 PRIMARY KEY (id),
 FOREIGN KEY (passengers_id) REFERENCES passengers_details(id)
);