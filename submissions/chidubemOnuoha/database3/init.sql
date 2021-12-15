-- this is to create the traveler table
CREATE DATABASE travel;

--use database to create your servival table
USE travel;

--create survival tables

CREATE TABLE survivals (
    id NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    sex VARCHAR(50) NOT NULL,
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