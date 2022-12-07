SELECT * FROM survivors WHERE SurvivedPassengers ='1';
/*total number ofpassengers who survived are
 342*/
SELECT * FROM survivors WHERE survivedPassengers ='0';
/*total number ofpassengers who survived are 
549*/
/*name and sex of registered passengers under the age of 27 that embarked at Queenstown and Cherbourg*/
SELECT registered_passengers.FullName, registered_passengers.Sex FROM registered_passengers LEFT JOIN travel_details ON registered_passengers.PassengerId=travel_details.PassengerId WHERE age < 27 AND Embarkation !="S";

SELECT * FROM survivors LEFT JOIN travel_details ON survivors.id=travel_details.PassengerId WHERE Embarkation='S' AND SurvivedPassengers > 0;
/*registered passengers that survived who embarked at Southampton
218*/
/*total number of passengers who paid a fare greater than $100 and are above the age of 35 with their siblings and spouses on board
are 9 */
SELECT FullName, Sex, Age  FROM registered_passengers LEFT JOIN travel_details ON registered_passengers.PassengerId=travel_details.PassengerId WHERE TripFares>100 AND SiblingsSpousesAboard > 0 AND registered_passengers.age > 35;