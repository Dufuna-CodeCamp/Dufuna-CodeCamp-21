USE travels;
-- What is the total number of passengers who survived?
SELECT COUNT(survive) FROM accidents WHERE survive=1;
342

-- What is the total number of passengers who did not survive?
SELECT COUNT(survive) FROM accidents WHERE survive=0;
549

-- Get the name AND sex of passengers under the age of 27 that embarked at Queenstown AND Cherbourg?
SELECT passengers.full_name, passengers.sex FROM passengers 
	INNER JOIN trips ON passengers.passenger_id=trips.id
	WHERE passengers.age < 27 AND (trips.embarked='C' or trips.embarked='Q')
    ORDER BY passengers.passenger_id ASC;

-- How many of the passengers that embarked at Southampton survived?
SELECT COUNT(*) FROM accidents INNER JOIN trips ON accidents.id = trips.id 
WHERE trips.embarked='S' AND accidents.survive=1;
218

-- Get the id, name AND the total number of passengers who paid a fare greater than $100 AND above the age of 35 had siblings or spouses on board?
SELECT passengers.passenger_id, passengers.full_name
	FROM passengers INNER JOIN trips ON passengers.passenger_id = trips.id 
    WHERE trips.fare> 100.00 AND passengers.age > 35 AND trips.siblings_spouses > 0;

SELECT COUNT(*) FROM passengers INNER JOIN trips ON passengers.passenger_id = trips.id 
    WHERE trips.fare> 100.00 AND passengers.age > 35 AND trips.siblings_spouses > 0;
