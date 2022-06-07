

/* 1. Those that survived*/
SELECT count(passengers_id), Survived FROM status_table WHERE Survived=1;
/* The total number is: 342 */


/* 2. Those that did not survive*/
SELECT count(passengers_id), Survived FROM status_table WHERE Survived=0;
/* The total number is:  549*/


/* 3. Name and sex of passengers under the age of 27 that embarked at Queenstown and Cherbourg*/
SELECT p.Name, p.Sex, p.Age FROM passengers_table as p
INNER JOIN travel_details_table on p.Id = t.passengers_id
WHERE p.Age < 27  AND t.embarked in ('Q','C');
/*They are 158 in total*/



/*  4. Those that embarked at Southampton  */
SELECT count(Survived) from status_table  inner join travel_details_table 
on travel_details_table.passengers_id = status_table.passengers_id where 
status_table.Survived= 1 and (travel_details_table.embarked = 'S')
/*  The total number is 218  */


/* 5. id and names of passsengers who paid > 100  */
SELECT passengers_table.id, passengers_table.name from passengers_table inner join 
travel_details_table on travel_details_table.passengers_id = passengers_table.Id where 
passengers_table.Age > 35 and (travel_details_table.fare >100 and travel_details_table.SibSp !=0);
/* They're 9 in total*/
