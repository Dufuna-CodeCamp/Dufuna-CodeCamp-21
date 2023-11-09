-- total number of passengers who survived =342

SELECT count(*) 
FROM passenger
WHERE survivors.survivals = '1';


-- total number of passengers who did not survived =549

SELECT count(*) 
FROM survivors
WHERE survivors.survivals = '0';


-- passengers under the age of 27 that embarked at Queenstow and Cherbourg =158
SELECT full_name, sex
FROM passengers AS p
INNER JOIN trip AS t
ON p.id = t.passengers_id
WHERE p.age < 27
AND (embarkation = 'q' OR embarkation = 'c');


SELECT COUNT(*)
FROM passengers AS p
INNER JOIN trip AS t
ON p.id = t.passengers_id
WHERE p.age < 27
AND (t.embarkation = 'Q' OR t.embarkation = 'C');


SELECT COUNT(*)
FROM passengers 
INNER JOIN trip
ON  passengers.id = trip.passengers_id
WHERE passengers.age < 27 
AND (embarkation = 'C' OR embarkation = 'Q');


-- passengers that embarked at Southampton survived = 218

SELECT p.id, full_name
FROM passengers AS p
INNER JOIN trip AS t
ON  p.id = t.passengers_id
WHERE (t.trip_fare > 100 AND p.age > 35) 
AND (t.siblings_spouses_aboard > 0);


-- total number of passengers who paid a fare greater than $100 and above the age of 35 had siblings or spouses on board =9

SELECT COUNT(*)
FROM passengers AS p
INNER JOIN trip AS t
ON  p.id = t.passengers_id
WHERE (t.trip_fare > 100 AND p.age > 35) 
AND (t.siblings_spouses_aboard > 0);

