-- Q1: Total number of passengers who survived
select count(*) from accident_cases where survival_status = 1;
-- 342

-- Q2: Total number of passengers who did not survive
select count(*) from accident_cases where survival_status = 0;
-- 549

-- Q3: The name and sex of passengers under the age of 27 that embarked at Queenstown and Cherbourg
select passengers.full_name, passengers.sex
from passengers inner join travel_details
on passengers.id = travel_details.id
where passengers.age < 27 and travel_details.point_of_embarkation like 'Q' or travel_details.point_of_embarkation like 'C';

-- Q4: The number of passengers that embarked at Southampton who survived
select count(*)
from  travel_details inner join accident_cases
on travel_details.id = accident_cases.id
where  travel_details.point_of_embarkation = 'S' and accident_cases.survival_status = '1';
-- 218

-- Q5:  The id, name and the total number of passengers who paid a fare greater than $100 and above the age of 35 who had siblings or spouses on board
select passengers.id, passengers.full_name
from passengers inner join travel_details
on passengers.id = travel_details.id
where travel_details.trip_fare > 100 and passengers.age > 35 and travel_details.siblings_spouses_aboard > 0;
-- 9

-- Database 
CREATE DATABASE transport;
USE transport;

-- Passengers table
CREATE TABLE passengers (
	id INT NOT NULL AUTO_INCREMENT,
    full_name VARCHAR(255) NOT NULL,
    sex ENUM ('male', 'female') NOT NULL DEFAULT 'male',
    age VARCHAR(255),
    PRIMARY KEY (id)
);

-- Travel details of passengers table
CREATE TABLE travel_details (
	id INT NOT NULL AUTO_INCREMENT,
    class INT NOT NULL,
    ticket_number VARCHAR(255) NOT NULL,
    trip_fare DECIMAL (10, 4) NOT NULL,
    assigned_cabin VARCHAR(255),
    parents_children_aboard INT NOT NULL,
    siblings_spouses_aboard INT NOT NULL,
    point_of_embarkation VARCHAR(1) NOT NULL,
    PRIMARY KEY (id)
);

-- Accident records of Passengers table
CREATE TABLE accident_cases (
	id INT NOT NULL AUTO_INCREMENT,
    survival_status BOOLEAN NOT NULL,
    PRIMARY KEY (id)
);