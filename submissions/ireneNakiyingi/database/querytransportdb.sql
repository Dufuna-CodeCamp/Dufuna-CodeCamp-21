-- select previously created database
USE transport_company;

-- 1.people that survived
SELECT COUNT(*) FROM flight_status WHERE status=1;
-- 342

-- 2. peopele that didnt survive
SELECT COUNT(*) FROM  flight_status WHERE status =0; 
-- 549

--  3.name and sex of 	passengers under 27 who embraked at Q and C
SELECT registered_passengers.passenger_id,registered_passengers.passenger_name,registered_passengers.sex,travel_details.point_of_embarkation  FROM registered_passengers LEFT JOIN travel_details ON registered_passengers.passenger_id = travel_details.travel_id
WHERE  (travel_details.point_of_embarkation LIKE '%Q' OR travel_details.point_of_embarkation LIKE '%C') AND registered_passengers.age<27 ; 


-- 4.passengers who embarked at S that survived

SELECT COUNT(*)  FROM flight_status RIGHT JOIN travel_details ON flight_status.traveller_id = travel_details.travel_id
WHERE travel_details.point_of_embarkation = 'S' AND flight_status.status = 1;
-- result 218

-- 5. id, name, total number of passengers who paid fare >100 above 35 had siblings/spouses on board
SELECT registered_passengers.passenger_id, registered_passengers.passenger_name FROM registered_passengers RIGHT JOIN travel_details
ON registered_passengers.passenger_id = travel_details.travel_id
WHERE  (travel_details.trip_fare>100 AND registered_passengers.age>35) AND travel_details.number_of_siblings_spouses !=0;

-- total number of people above
SELECT COUNT(*) FROM registered_passengerS
RIGHT JOIN travel_details
ON registered_passengers.passenger_id = travel_details.travel_id
WHERE  registered_passengers.age>35 AND travel_details.trip_fare>100 AND travel_details.number_of_siblings_spouses >0;
