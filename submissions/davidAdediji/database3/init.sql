USE transportation_company; 

SHOW TABLES;
SELECT * FROM accident_cases;
SELECT * FROM passenger_details;
SELECT * FROM passengers;

-- What is the total number of passengers who survived?
SELECT COUNT(passenger_survived) 
FROM accident_cases 
WHERE passenger_survived = 1;
-- 342

-- What is the total number of passengers who did not survive?
SELECT COUNT(passenger_survived) FROM accident_cases WHERE passenger_survived = 0;
-- 549

-- Get the name and sex of passengers under the age of 27 that embarked at Queenstown and Cherbourg?
SELECT passengers.full_name, passengers.sex FROM passengers
INNER JOIN passenger_details ON passengers.id = passenger_details.passenger_id
WHERE passengers.age < 27 
AND (passenger_details.embarkment_point ="Q" OR passenger_details.embarkment_point ="C");

-- How many of the passengers that embarked at southampton survived?
SELECT COUNT(*) FROM accident_cases INNER JOIN passenger_details
ON accident_cases.passengers_id = passenger_details.passenger_id
WHERE passenger_details.embarkment_point ='S' AND accident_cases.passenger_survived = 1;
-- 218


-- Get the id, name and the total number of passengers who paid a fare greater that $100 and above the age of 35 had siblings or spouses on board?
SELECT passengers.id, passengers.full_name FROM passengers INNER JOIN
passenger_details ON passenger_details.passenger_id = passengers.id WHERE
passengers.age > 35 AND (passenger_details.trip_fare >100 AND passenger_details.siblings_spouse_no !=0);
