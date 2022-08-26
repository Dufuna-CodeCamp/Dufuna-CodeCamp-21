use dufuna_transport_company;

/* 1 Total Number of Passengers who survived */
select * from survivors where survived = 1;
/* The answer is 342  */

/* 2 Total Number of Passengers who did not survive */
select * from survivors where survived = 0;
/* The answer is 549  */

/* 3 Get the name and sex of passengers under the age of 27 that embarked at Queenstown and Cherbourg? */
select passengers.full_name, passengers.sex from passengers inner join trips on passengers.id = trips.passenger_id where passengers.age > 0 and passengers.age < 27 and trips.point_of_embarkation != "s" ;

/* 4 How many of the passengers that embarked at Southampton survived? */

select trips.passenger_id, trips.point_of_embarkation,survivors.survived from trips inner join survivors on trips.passenger_id = survivors.passenger_id where trips.point_of_embarkation = "s" and survivors.survived = 1 ;
/* The answer is 218 */

/* Get the id, name and the total number of passengers who paid a fare greater than $100 and above the age of 35 had siblings or spouses on board? */
select passengers.id, passengers.full_name from passengers inner join trips on passengers.id = trips.passenger_id where trips.trip_fare > 100 and passengers.age > 35 and trips.number_of_siblings_spouses_aboard != 0;
/* Total number is 9 */