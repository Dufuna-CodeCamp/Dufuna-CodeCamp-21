USE transportation_company;

/*What is the total number of passengers who survived? 342*/
SELECT * FROM accidents WHERE survival = 1;
/*342*/

/*What is the total number of passengers who did not survive?*/
SELECT * FROM accidents WHERE survival = 0;
/*549*/

/*Get the name and sex of passengers under the age of 27 that embarked at Queenstown and Cherbourg?*/
SELECT passengers.id, passengers.name, passengers.sex FROM passengers
INNER JOIN trips ON passengers.id = trips.passenger_id WHERE age < 27  AND (embarkation = 'Q' OR embarkation = 'C');
/*158*/

/*How many of the passengers that embarked at Southampton survived?*/
SELECT * FROM passengers
INNER JOIN trips INNER JOIN accidents ON passengers.id = trips.passenger_id AND passengers.id = accidents.passenger_id WHERE embarkation = 'S' AND survival = 1;
/*218*/

/*Get the id, name and the total number of passengers who paid a fare greater than $100 and above the age of 35 had siblings or spouses on board?*/
SELECT passengers.id, passengers.name, COUNT(*) FROM passengers
INNER JOIN trips ON passengers.id = trips.passenger_id WHERE trip_fare > 100 AND age > 35 AND sibsp > 0 
GROUP BY passengers.id, passengers.name;
/*9*/
