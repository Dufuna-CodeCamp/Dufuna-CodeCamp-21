SELECT * FROM transportation.passengers;
SELECT * FROM transportation.travel_details;
SELECT * FROM transportation.accident_cases;

/* Total number of passengers that survived */
SELECT COUNT(passenger_survived) FROM `accidents` WHERE passenger_survived=1;
/* 342 */

/* Total number of passengers that survived */
SELECT COUNT(passenger_survived) FROM `accidents` WHERE passenger_survived=0;
/* 549 */

/* Name and sex of passengers under the age of 27 that embarked at Queenstown and Cherbourg */
SELECT passengers.full_name, passengers.sex FROM passengers INNER JOIN trips ON passengers.id=trips.passenger_id WHERE passengers.age < 27 AND (trips.point_of_embarkation="Q" OR trips.point_of_embarkation="C");

/* Passengers that embarked at Southampton that survived */
SELECT COUNT(accidents.passenger_survived) FROM ((accidents INNER JOIN passengers ON accidents.passenger_id=passengers.id) INNER JOIN trips ON accidents.passenger_id=trips.passenger_id) WHERE accidents.passenger_survived=1 AND trips.point_of_embarkation="S";
/* 218 */

/* id, name and the total number of passengers who paid a fare greater than $100 and above the age of 35 had siblings or spouses on board */
SELECT passengers.id, passengers.full_name, COUNT(passengers.full_name) FROM passengers INNER JOIN trips ON passengers.id=trips.passenger_id WHERE trips.trip_fare>100 AND passengers.age>35 AND trips.number_of_siblings_spouses_aboard>0;