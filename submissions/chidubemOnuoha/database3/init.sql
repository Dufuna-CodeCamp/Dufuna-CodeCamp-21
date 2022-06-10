-- this is to create the traveler table
CREATE DATABASE travel;

--use database to create your servival table
USE travel;


--select the survival
SELECT COUNT * FROM
WHERE survival = true;

--select and join survival and passenger
SELECT passengers_details.trip_fare, 
FROM passengers_details
INNER JOIN servivals ON passengers_details.passenger_id=servivals.survival_id;


-- select using the AND | OR
SELECT * FROM survivals WHERE parch = passenger_id AND sibsp = id

--expected result 
"342" || "549"
--survival result
"218" AND "9"

--create survival tables

CREATE TABLE survivals (
    id NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    sex VARCHAR(50) NOT NULL,
    survival_id NOT null,
    age INT NOT NULL,
    sibsp INT NOT NOT,
    parch INT NOT NULL,
    ticket VARCHAR(50) NOT NULL,
    fare  VARCHAR(50)NOT NULL,
    cabin VARCHAR(50) NOT NULL,
    survival ENUM('0 = NO', '1 = YES'),
    Passenger_class ENUM('1 = 1st', '2 = 2nd', '3 = 3rd'),
    Port_Embarkation ENUM('C = Cherbourg', 'Q = Queenstown', 'S = Southampton'),
    created_at DATETIME,
)