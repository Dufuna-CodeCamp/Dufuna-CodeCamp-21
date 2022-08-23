select * from accidents;
delete from accidents;
alter table registered_passengers modify age varchar(50);
SET SQL_SAFE_UPDATES = 0;

SHOW TABLES;
SELECT * FROM accidents;

-- the total number of people who survived = 342;
SELECT passenger_status, COUNT(passenger_status) FROM accidents
WHERE passenger_status = 'survived';

-- the total number of people who did not survive = 549;
SELECT passenger_status, COUNT(passenger_status) FROM accidents
WHERE passenger_status = '';


-- the name and sex of passengers under age 27 that embarked at Queenstown and Cherbourg;
SELECT registered_passengers.full_name, registered_passengers.sex
FROM registered_passengers INNER JOIN trips ON registered_passengers.id = trips.registered_passengers_id WHERE registered_passengers.age < 27
AND point_of_embarkment IN ('Q', 'C');


-- how many passengers that embarked at southhampton survived (total = 218);
SELECT point_of_embarkment, COUNT(point_of_embarkment) FROM trips 
INNER JOIN accidents ON trips.registered_passengers_id = accidents.registered_passengers_id
WHERE point_of_embarkment = 'S' AND accidents.passenger_status = 'survived';

-- get the id, name and the total number of passengers
-- who paid a fare greater than $100
-- above age 35, had siblings or spouse aboard;
-- total number = 7;
SELECT registered_passengers.id, full_name, COUNT(registered_passengers.id) FROM registered_passengers
JOIN trips ON registered_passengers.id = trips.registered_passengers_id 
WHERE trip_fare > 100 AND registered_passengers.age > 35 
AND number_of_parents_or_children > 0 AND number_of_siblings_or_spouse > 0
GROUP BY registered_passengers.id;