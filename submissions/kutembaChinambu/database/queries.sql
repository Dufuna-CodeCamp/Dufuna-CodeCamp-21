<!-- Query that counts the number of people that survived the accident -->
SELECT COUNT(*)
FROM flight_statuses
WHERE survived = 1;

<!-- 549 people survived -->

<!-- Query that counts the total number of passengers that did not survive -->

SELECT COUNT(*)
FROM flight_statuses
WHERE survived != 1;
<!-- 342 people did not survive -->

<!-- Query that selects the names and sex of passengers under the age of 27 that embarked at Queenstown or Cherbourg -->
SELECT passengers.full_name, passengers.sex
FROM passengers INNER JOIN trips
ON  passengers.id = trips.passenger_id AND passengers.age < 27 AND
trips.point_of_embarkation = 'C' or 'Q';

<!-- Query that counts the number of passengers that embarked at Southampton and survived -->
SELECT COUNT(*)
FROM trips INNER JOIN flight_statuses
ON trips.passenger_id = flight_statuses.passenger_id AND  trips.point_of_embarkation = 'S'
AND flight_statuses.survived = 1;
<!-- Number is 427 -->

<!-- Query that selects passenger ids and name that paid $100 and above, are above the age of 35 and had siblings/spouses on board.-->
SELECT passengers.id, passengers.full_name
FROM passengers INNER JOIN trips
ON passengers.id = trips.passenger_id AND trips.trip_fare > 100 AND 
passengers.age >35 AND number_of_siblings_and_spouses_aboard >= 1;