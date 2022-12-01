use transportation_company;

/* Question 1: What is the total number of passengers who survived? 
	Answer: 342*/
select count(survived) from accidents where survived = 1;


/* Question 2: What is the total number of passengers who did not survive? 
	Answer: 549*/
select count(survived) from accidents where survived = 0;


/* Question 3: Get the name and sex of passengers under the age of 27 
that embarked at Queenstown and Cherbourg? */
select id, full_name, sex, age
from passengers
left join trips
on passengers.id = trips.passenger_id
where passengers.age < 27 and trips.point_of_embarkation = 'Q' or 'C';


/* Question 4: How many of the passengers that embarked at Southampton survived?
	Answer: 218*/
select count(survived) from accidents 
right join trips
on accidents.passenger_id = trips.passenger_id
where accidents.survived = 1 and trips.point_of_embarkation = 'S';


/* Question 5: Get the id, name and the total number of passengers
 who paid a fare greater than $100 and above 
 the age of 35 had siblings or spouses on board? */
select id, full_name from passengers
left join trips
on passengers.id = trips.passenger_id
where passengers.age > 35 and trips.trip_fare > 100 and trips.no_of_siblings_or_spouses_aboard > 0;

/* Total number of passengers? Answer: 9 */
select count(full_name) from passengers
left join trips
on passengers.id = trips.passenger_id
where passengers.age > 35 and trips.trip_fare > 100 and trips.no_of_siblings_or_spouses_aboard > 0;