-- What is the total number of passengers who survived?

SELECT COUNT(*) FROM accident_cases WHERE survive = 1;
290


-- What is the total number of passengers who did not survive?

SELECT COUNT(*) FROM accident_cases WHERE survive = 0;
424

-- Get the name and sex of passengers under the age of 27 that embarked at Queenstown and Cherbourg?

SELECT passenger_details.full_name, passenger_details.sex FROM passenger_details 
INNER JOIN passenger_travel_details ON passenger_details.id = passenger_travel_details.passenger_id
WHERE passenger_details.age < 27 
AND (passenger_travel_details.embark_point ="Q" OR passenger_travel_details.embark_point ="C");

-- How many of the passengers that embarked at Southampton survived?
SELECT COUNT(*) FROM accident_cases INNER JOIN passenger_travel_details
ON accident_cases.passenger_id = passenger_travel_details.passenger_id
WHERE passenger_travel_details.embark_point ='S' AND accident_cases.survive = 1;

202

-- Get the id, name and the total number of passengers who paid a fare greater than $100 and above the age of 35 had siblings or spouses on board?
SELECT passenger_details.id, passenger_details.full_name, COUNT(*) 
FROM passenger_details INNER JOIN  passenger_travel_details ON  passenger_travel_details.id = passenger_travel_details.passenger_id 
WHERE passenger_travel_details.trip_fare > 100 AND passenger_details.age > 35 
AND passenger_travel_details.number_siblings_spouse > 0;