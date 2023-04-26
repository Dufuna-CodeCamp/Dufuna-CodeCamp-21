/* 
 * query to count how many people survived the accident. 
 * ANS = 342
 */
SELECT COUNT(*)  FROM accident_cases WHERE survived_accident = 1;

/* 
 * query to count how many people did not survive the accident. 
 * ANS = 549
 */
SELECT COUNT(*)  FROM accident_cases WHERE survived_accident = 1;

/* 
 * query to get name and sex of passengers whose age is less than 27 and embarked at Queenstown and Cherbourg
 */
SELECT passengers.full_name, passengers.sex FROM passengers LEFT JOIN  passengers_details ON passengers.id = passengers_details.passengers_id   WHERE passengers.age < 27 AND (passengers_details.point_of_embarkation = "C" OR passengers_details.point_of_embarkation = "Q");

/* 
 * query to count how many passengers embarked at SouthHampton and survived
 * ANS = 218
 */
SELECT COUNT(*)  FROM passengers LEFT JOIN accident_cases ON passengers.id = accident_cases.passengers_id WHERE accident_cases.survived_accident = 1;

/* 
 * query to retrieve the total number of passengers who paid a fare greater tha $100, are above the age of 35 and had siblings or spouses on board
 * ANS = 9
 */
SELECT passengers.id, passengers.full_name FROM passengers LEFT JOIN passengers_details ON passengers.id = passengers_details.passengers_id WHERE passengers.age > 35 AND passengers_details.trip_fare > 100 AND number_of_siblings_spouses > 0;



