USE travel;

-- What is the total number of passengers who survived?
SELECT COUNT(survived) FROM survival WHERE survived=1;
-- Answer = 342
-- What is the total number of passengers who did not survive?
SELECT COUNT(survived) FROM survival WHERE survived=0;
-- Answer = 549
-- Get the name and sex of passengers under the age of 27 that embarked at Queenstown and Cherbourg?
SELECT passengers.full_name, passengers.sex FROM passengers
INNER JOIN passengers_details ON passengers.passengers_id=passengers_details.passenger_id
WHERE passengers.age < 27 AND (passengers_details.embark_point='C' or passengers_details.embark_point='Q')
ORDER BY passengers.passengers_id ASC;

-- How many of the passengers that embarked at Southampton survived?
SELECT COUNT(*) FROM survival INNER JOIN passengers_details ON survival.passenger_id = passengers_details.passenger_id
WHERE passengers_details.embark_point='S' AND survival.survived=1;
-- Answer = 218

-- Get the id, name and the total number of passengers who paid a fare greater than $100 and above the age of 35 had siblings or spouses on board
SELECT passengers.passengers_id, passengers.full_name FROM passengers
INNER JOIN passengers_details ON passengers.passengers_id = passengers_details.passenger_id
WHERE passengers_details.trip_fare > 100 AND passengers.age > 35 AND passengers_details.siblings_spouses > 0;

SELECT COUNT(*) FROM passengers INNER JOIN passengers_details ON passengers.passengers_id = passengers_details.passenger_id
WHERE passengers_details.trip_fare > 100.00 AND passengers.age > 35 AND passengers_details.siblings_spouses > 0;

SHOW TABLES;