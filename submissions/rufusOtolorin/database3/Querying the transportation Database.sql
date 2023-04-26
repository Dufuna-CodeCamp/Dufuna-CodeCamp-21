 -- (Q1). TO KNOW THE TOTAL NUMBER OF PASSENGERS THAT SURVIVED
 SELECT COUNT(*) FROM accident_cases WHERE survivals = 1;
 -- NUMBER OF SURVIVED PASSENGERS IS 342
 
 -- (Q2). TO KNOW THE TOTAL NUMBER OF PASSENGERS THAT DID NOT SURVIVED
 SELECT COUNT(*) FROM accident_cases WHERE survivals = 0;
 -- NUMBER OF PASSENGERS THAT DID NOT SURVIVED IS 549
 
	/* (Q3). TO GET THE NAME AND SEX OF PASSENGERS UNDER AGE OF 27 THAT 
	EMBARKED AT QUEENSTOWN AND CHERBOURG*/
    SELECT passengers.full_name, passengers.sex FROM passengers INNER JOIN travel_details ON passengers.id = travel_details.passengers_id 
    AND passengers.age < 27 WHERE travel_details.embarkation = 'Q' OR  travel_details.embarkation = 'C';
    
-- (Q4). TO GET THE SURVIVED NUMBER OF PASSENGERS THAT EMBARKED AT SOUTHAMPTON
-- first, to view answer table
SELECT * FROM travel_details INNER JOIN accident_cases ON travel_details.passengers_id = accident_cases.passengers_id AND travel_details.embarkation = 'S' 
WHERE accident_cases.survivals = 1;
-- second, to generate the count
SELECT COUNT(*) FROM travel_details INNER JOIN accident_cases ON travel_details.passengers_id = accident_cases.passengers_id AND travel_details.embarkation = 'S' 
WHERE accident_cases.survivals = 1;
-- SURVIVED NUMBER OF PASSENGERS THAT EMBARKED AT SOUTHAMPTON IS 218

/* (Q5). TO GET THE ID, NAME AND THE TOTAL NUMBER OF PASSENGERS WHO PAID
A FARE GREATER THAN $100 AND ABOVE THE AGE OF 35 HAD SIBLINGS OR
SPOUSES ON BOARD. */
-- first, to view answer table
SELECT passengers.id, passengers.full_name FROM passengers INNER JOIN travel_details ON passengers.id = travel_details.passengers_id 
AND travel_details.trip_fare > 100 WHERE passengers.age > 35 AND travel_details.siblings_spouses_aboard >= 1;
-- second, to generate the count
SELECT COUNT(passengers.id AND passengers.full_name) FROM passengers INNER JOIN travel_details ON passengers.id = travel_details.passengers_id 
AND travel_details.trip_fare > 100 WHERE passengers.age > 35 AND travel_details.siblings_spouses_aboard >= 1;
-- total number is 9

SHOW tables;

