-- create travel database;

CREATE DATABASE travel;

-- specifying which database to use
USE travel;
-- to create the index/definition table;

-- query 1
SELECT count(*) FROM survival WHERE survived = 1;
-- 342

-- query 2
SELECT count(*) FROM survival WHERE survived = 0;
-- 549

-- query 3
SELECT passenger.name, passenger.sex, travel_details.embarked
 FROM passenger INNER JOIN travel_details
 ON passenger.id = travel_details.id
 WHERE passenger.age < 27 AND travel_details.embarked LIKE 'C' 
 OR travel_details.embarked LIKE 'Q';

-- query 4
SELECT count(*)
FROM travel_details INNER JOIN survival 
ON travel_details.id = survival.id
WHERE travel_details.embarked LIKE 'S' AND survival.survived = 1; 
-- 218

-- query 5
SELECT travel_details.id, passenger.name,travel_details.sib_sp
FROM passenger INNER JOIN travel_details
ON passenger.id = travel_details.id
WHERE travel_details.fare > 100 
AND passenger.age > 35 
AND travel_details.sib_sp > 0;
-- 7




