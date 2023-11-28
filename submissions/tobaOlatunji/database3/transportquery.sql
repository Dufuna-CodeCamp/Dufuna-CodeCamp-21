SELECT COUNT(*) 
FROM survivors
WHERE survivors.survivals = '1';
-- the total number of survivals = 342

SELECT COUNT(*) 
FROM survivors
WHERE survivors.survivals = '0';
-- the total number of survivals = 549

SELECT COUNT(*) FROM survivors;
-- the total number of passengers is 891

SELECT full_name, sex
FROM passengers 
INNER JOIN trip
ON  passengers.id = trip.passengers_id
WHERE passengers.age < 27 
AND (embarkation = 'C' OR embarkation = 'Q'); 

SELECT COUNT(*)
FROM passengers 
INNER JOIN trip
ON  passengers.id = trip.passengers_id
WHERE passengers.age < 27 
AND (embarkation = 'C' OR embarkation = 'Q'); 

SELECT COUNT(*)
FROM passengers as p
INNER JOIN trip as t
ON p.id = t.passengers_id
INNER JOIN survivors as su
ON t.passengers_id = su.passengers_id
WHERE su.survivals = '1'
AND embarkation = 'S';

SELECT COUNT(*)
FROM survivors
INNER JOIN trip
ON survivors.passengers_id = trip.passengers_id
WHERE survivors.survivals = '1'
AND embarkation = 'S';
-- passengers that embarked at southampton that survived = 218

SELECT p.id, full_name 
FROM passengers AS p 
INNER JOIN trip AS t
ON p.id = t.passengers_id
WHERE (t.trip_fare > '100' AND p.age > '35')
AND (t.siblings_spouses_aboard > '0');

SELECT COUNT(*)
FROM passengers AS p 
INNER JOIN trip AS t
ON p.id = t.passengers_id
WHERE t.trip_fare > '100' AND p.age > '35'
AND t.siblings_spouses_aboard > '0';
-- passengers who paid over $100 and above the age of 35 and had siblings/spouses aboard = 9