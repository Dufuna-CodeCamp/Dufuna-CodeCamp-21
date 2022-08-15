/* Question 1 */
SELECT * FROM accidents WHERE survived = 1;
/* Answer = 342. 342 passengers survived. */

/* Question 2 */
SELECT * FROM accidents WHERE survived = 0;
/* Answer = 549. 549 passengers did not survive */

/* Question 3 */
SELECT passengers.full_name, passengers.sex FROM passengers INNER JOIN trips 
ON passengers.age < 27 AND trips.embarkation = 'C' AND passengers.id = trips.passengers_id
OR passengers.age < 27 AND trips.embarkation = 'Q' AND passengers.id = trips.passengers_id;

/* Question 4 */
SELECT accidents.survived, trips.embarkation FROM accidents INNER JOIN trips
ON trips.id = accidents.passengers_id AND trips.embarkation = 'S' AND accidents.survived = 1;
/* Answer = 218. There are 218 survived passengers that embarked from Southampton */

/* Question 5 */
SELECT passengers.id, passengers.full_name FROM passengers INNER JOIN trips 
ON passengers.id = trips.passengers_id AND trips.fare > 100 
AND passengers.age > 35 AND trips.siblings_or_spouses > 0;
