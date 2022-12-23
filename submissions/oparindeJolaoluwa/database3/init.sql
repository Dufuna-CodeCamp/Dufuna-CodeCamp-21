-- select transportation_company database

USE transportation_company;

-- total number of passengers that survived
SELECT COUNT(*) FROM accident_cases WHERE survived = 1;
-- 342

-- total number of passengers that did not survived
SELECT COUNT(*) FROM accident_cases WHERE survived = 0;
-- 549

-- name and sex of under 27 from Queenstown and Cherbourg
 SELECT passengers.full_name, passengers.sex 
 FROM passengers INNER JOIN trips ON passengers_id = trips.passengers_id AND passengers.age < 27 
 WHERE trips.embarkation = 'Q' OR  trips.embarkation = 'C';
 
 -- survivor at Southampton
SELECT COUNT(*) 
FROM accident_cases INNER JOIN trips ON accident_cases.passengers_id = trips.passengers_id AND trips.embarkation= 'S' 
WHERE accident_cases.survived = 1;
-- 218
 
 
-- ID and Name of passenger> 100 and above 35 

SELECT passengers.id, passengers.full_name 
FROM passengers INNER JOIN trips ON passengers.id = trips.passengers_id AND trips.trip_fare > 100 
WHERE passengers.age > 35 AND trips.spsil >= 1;

-- Count Total number
SELECT COUNT(passengers.id), COUNT(passengers.full_name) 
FROM passengers INNER JOIN trips ON passengers.id = trips.passengers_id AND trips.trip_fare > 100 
WHERE passengers.age > 35 AND trips.spsil >= 1;
-- 9
