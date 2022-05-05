USE transportation_company_db;

-- What is the total number of passengers who survived?
SELECT COUNT(survived) FROM accident_cases WHERE survived=1;
342
-- What is the total number of passengers who did not survive?
SELECT COUNT(survived) FROM accident_cases WHERE survived=0;
549
-- Get the name and sex of passengers under the age of 27 that embarked at Queenstown and Cherbourg?
SELECT passengers.full_name, passengers.sex FROM passengers
INNER JOIN passengers_details ON passengers.passengers_id=passengers_details.passenger_id
WHERE passengers.age < 27 AND (passengers_details.embark_point='C' or passengers_details.embark_point='Q')
ORDER BY passengers.passengers_id ASC;

-- How many of the passengers that embarked at Southampton survived?
SELECT COUNT(*) FROM accident_cases INNER JOIN passengers_details ON accident_cases.passenger_id = passengers_details.passenger_id
WHERE passengers_details.embark_point='S' AND accident_cases.survived=1;
218

-- Get the id, name and the total number of passengers who paid a fare greater than $100 and above the age of 35 had siblings or spouses on board
SELECT passengers.passengers_id, passengers.full_name FROM passengers
INNER JOIN passengers_details ON passengers.passengers_id = passengers_details.passenger_id
WHERE passengers_details.trip_fare > 100 AND passengers_details.age > 35 AND passengers_details.siblings_spouses > 0;

SELECT COUNT(*) FROM passengers INNER JOIN passengers_details ON passengers.passengers_id = passengers_details.passenger_id
WHERE passengers_details.trip_fare > 100.00 AND passengers.age > 35 AND passengers_details.siblings_spouses > 0;

SHOW TABLES;
SELECT * from passengers;