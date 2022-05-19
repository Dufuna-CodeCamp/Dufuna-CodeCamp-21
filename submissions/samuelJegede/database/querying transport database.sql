-- Number of passengers that survived
SELECT COUNT(*) FROM accidents WHERE survived = 1;
290

-- Number of passengers that did not survive
SELECT COUNT(*) FROM accidents WHERE survived = 0;
424

-- Name and sex of passengers under the age of 27 that embarked at Queenstown and Cherbourg
SELECT passengers.full_name, passengers.sex FROM passengers
INNER JOIN trip_details ON passengers.passenger_id = trip_details.passenger_id
WHERE passengers.age < 27 AND (trip_details.embarkation_point = 'C'
or trip_details.embarkation_point = 'Q');

-- Passengers that embarked at Southampton and survived
SELECT COUNT(*) FROM accidents 
INNER JOIN trip_details ON accidents.passenger_id = trip_details.passenger_id
WHERE trip_details.embarkation_point = 'S' AND accidents.survived = 1;
202

-- Id and name of passengers who paid a fare greater than $100 AND above the age of 35 had siblings or spouses on board
SELECT passengers.passenger_id, passengers.full_name FROM passengers
INNER JOIN trip_details ON passengers.passenger_id = trip_details.passenger_id
WHERE trip_details.trip_fare > 100.00 AND passengers.age > 35
AND trip_details.siblings_spouses > 0;

-- Total number of passengers who paid a fare greater than $100 AND above the age of 35 had siblings or spouses on board
SELECT COUNT(*) FROM passengers
INNER JOIN trip_details ON passengers.passenger_id = trip_details.passenger_id
WHERE trip_details.trip_fare > 100.00 AND passengers.age > 35
AND trip_details.siblings_spouses > 0;
9