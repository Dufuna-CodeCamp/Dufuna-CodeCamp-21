
-- (1) passengers who survived using SELECT...WHERE... 

SELECT COUNT(*) FROM accidents 
WHERE survival = 1;

-- 342 people;

-- (2) passengers who did not survive using SELECT...WHERE... 

SELECT COUNT(*) FROM accidents 
WHERE survival = 0;

-- 549 people;

-- (3) Name and sex of passengers under the age of 27 that embarked at Queenstown and Cherbourg using SELECT...JOIN....WHERE... 
SELECT passengers.name, passengers.sex FROM passengers INNER JOIN trips ON passengers.id = trips.passenger_id AND passengers.age < 27 
WHERE trips.embarked = 'Q' OR  trips.embarked = 'C';


-- (4) Southampton survivers using SELECT...JOIN...WHERE... 

SELECT * FROM trips INNER JOIN accidents ON trips.passenger_id = accidents.passenger_id AND trips.embarked = 'S' 
WHERE accidents.survival = 1;

--  218 people;

-- (5) fare greater than $100 using SELECT...JOIN.....WHERE... 

SELECT passengers.id, passengers.name FROM passengers INNER JOIN trips ON passengers.id = trips.passenger_id AND trips.fare > 100 
WHERE passengers.age > 35 AND trips.sibsp >= 1;
