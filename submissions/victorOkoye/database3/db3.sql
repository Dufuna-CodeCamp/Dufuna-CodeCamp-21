-- specifying database to use
use travel_sample;

-- query 1
SELECT COUNT(*) FROM accident_cases WHERE status = 1;
-- 342

-- query 2
SELECT COUNT(*) FROM accident_cases WHERE status = 0;
-- 549

-- query 3
SELECT users.full_name, users.sex
FROM users INNER JOIN passengers_details ON users.id = passengers_details.passengers_id WHERE users.age < 27 
AND passengers_details.embark_point = 'Q' OR passengers_details.embark_point = 'C';

-- query 4
SELECT COUNT(*) 
FROM passengers_details INNER JOIN accident_cases ON passengers_details.id = accident_cases.passengers_id 
WHERE passengers_details.embark_point = 'S' AND accident_cases.status = 1;
-- 218

-- query 5
SELECT passengers_details.id, users.full_name
FROM users INNER JOIN passengers_details ON users.id = passengers_details.passengers_id
WHERE passengers_details.trip_fare > 100 AND users.age > 35 AND passengers_details.num_sibilings_spouses > 0;
-- 9
