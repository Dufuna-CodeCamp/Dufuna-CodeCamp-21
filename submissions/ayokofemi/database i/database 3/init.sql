USE transportation_company;
SHOW TABLES;

-- number of pax who survived
SELECT Count (*) FROM accident_status WHERE status =1;
-- 342

-- number of pax who did not survived
SELECT Count(*) FROM accident_status WHERE status =0;
-- 549

-- name and sex of those under 27 who embark on Queenstown and Cherbourg
SELECT registered_passenger.full_name, registered_passenger.sex FROM 
registered_passenger INNER JOIN record_detail ON registered_passenger.id = 
record_detail.id WHERE registered_passenger.age < 27 AND 
record_detail.point_of_embarkation = "Q" || record_detail.point_of_embarkation = "C";

-- how many passenger that embark on southampton survived
SELECT Count(record_detail.point_of_embarkation) FROM record_detail INNER JOIN accident_status ON 
accident_status.id=record_detail.id WHERE accident_status.status = 1 AND
 record_detail.point_of_embarkation = "S"; 
--  218

-- id, names & total number of pax who paid > $100 and above age 35 who has siblings or spouses on board
SELECT registered_passenger.id, registered_passenger.full_name Count(record_detail.trip_fare)FROM registered_passenger INNER JOIN
 record_detail ON registered_passenger.id=record_detail.id WHERE record_detail.trip_fare> 100 AND 
 registered_passenger.age>35  and record_detail.number_of_siblings_spouses_abroad=0;
-- id   full_name
-- 320	Spedden, Mrs. Frederic Oakley (Margaretta Corning Stone)
-- 391	Carter, Mr. William Ernest
-- 439	Fortune, Mr. Mark
-- 545	Douglas, Mr. Walter Donald
-- 582	Thayer, Mrs. John Borland (Marian Longstreth Morris)
-- 661	Frauenthal, Dr. Henry William
-- 699	Thayer, Mr. John Borland
-- 764	Carter, Mrs. William Ernest (Lucile Polk)
-- 857	Wick, Mrs. George Dennick (Mary Hitchcock)
  
 
