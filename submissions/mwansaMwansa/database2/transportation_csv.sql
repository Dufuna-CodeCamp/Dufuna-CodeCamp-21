--1. What is the total number of passengers who survived?

SELECT COUNT(*) FROM accident_cases WHERE survived=1;
-- total numbeer of passengers who survived is 342

--2. What is the total number of passengers who did not survive?

SELECT COUNT(*) FROM accident_cases WHERE survived=0;
-- total number of passengers who survived is 549.

--3. Get the name and sex of passengers under the age of 27 that embarked at Queenstown and Cherbourg?

SELECT passengers_details.full_name, passengers_details.sex FROM passengers_details
INNER JOIN travel_details
ON travel_details.passenger_id = passengers_details.id
WHERE passengers_details.age<27 AND (travel_details.point_of_embarkation='Q' OR travel_details.point_of_embarkation='C');

/** SELECT COUNT(*) FROM passengers_details
INNER JOIN travel_details
ON travel_details.passenger_id = passengers_details.id
WHERE passengers_details.age<27 AND (travel_details.point_of_embarkation='Q' OR travel_details.point_of_embarkation='C');
-- 158 passengers under the age of 27 embarked at Queenstown and Cherbourg
**/

--4. How many of the passengers that embarked at Southampton survived?

SELECT COUNT(*) FROM travel_details
INNER JOIN accident_cases
ON travel_details.passenger_id = accident_cases.passenger_id
WHERE travel_details.point_of_embarkation='S' AND accident_cases.survived=1;
--218 passengers embarked at Southampton and survived.

--5. Get the id, name and the total number of passengers who paid a fare greater than $100 and above the age of 35 had siblings or spouses on board?

SELECT passengers_details.id, passengers_details.full_name FROM passengers_details
INNER JOIN travel_details
ON travel_details.passenger_id = passengers_details.id
WHERE passengers_details.age > 35 AND (travel_details.trip_fare > 100 OR travel_details.number_of_siblings_or_spouses_aboard !=0);

--

/**SELECT COUNT(*) FROM passengers_details
INNER JOIN travel_details
ON travel_details.passenger_id = passengers_details.id
WHERE passengers_details.age > 35 AND (travel_details.trip_fare > 100 AND travel_details.number_of_siblings_or_spouses_onboard =1);
**/

