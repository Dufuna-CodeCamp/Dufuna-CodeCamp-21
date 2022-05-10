
/* 1. Survivors */

SELECT  count(s.survival_status) FROM survival_table s WHERE s.survival_status = 1
/* Number: 342 */

/* 2. Those that did not survive*/

SELECT  count(s.survival_status) FROM survival_table s WHERE s.survival_status = 0

/* Number is:  549*/


/* 3. name and sex of passengers < 27 && embarked @ Q && C  */

SELECT  distinct p.full_name,p.sex, t.embarkation_point FROM passengers_table p INNER JOIN trips_table t ON t.passenger_id = p.passenger_id WHERE p.age < 27
AND t.embarkation_point IN ('Q','C');

/* 158 in total */


/*  4. Those that embarked at Southampton  */

SELECT COUNT(s.survival_status) FROM survival_table s INNER JOIN trips_table t ON 
t.passenger_id = s.passenger_id WHERE s.survival_status = 1 AND t.embarkatiON_point = 'S'

/*  Those that embarked to Southampton = 218  */



/* 5. id and names of passsengers who paid > 100  */

SELECT p.passenger_id, p.full_name  FROM passengers_table p
INNER JOIN trips_table t ON t.passenger_id = p.passenger_id WHERE 
t.fare >100 AND p.age > 35 
AND t.num_of_siblings_or_spouses > 0

/*
passenger_id	full_name
320	Spedden, Mrs. Frederic Oakley (Margaretta Corning Stone)
391	Carter, Mr. William Ernest
439	Fortune, Mr. Mark
545	Douglas, Mr. Walter Donald
582	Thayer, Mrs. John Borland (Marian Longstreth Morris)
661	Frauenthal, Dr. Henry William
699	Thayer, Mr. John Borland
764	Carter, Mrs. William Ernest (Lucile Polk)
857	Wick, Mrs. George Dennick (Mary Hitchcock)

Those with spouses and siblings are 9 in total*/