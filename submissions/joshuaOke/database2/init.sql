CREATE DATABASE REFERENCES;
use REFERENCES;
CREATE TABLE passengers (
    passengers_id INT NOT NULL,
    age VARCHAR,
    fullname VARCHAR NOT NULL,
    sex VARCHAR NOT NULL
);

CREATE TABLE passengers_details (
    id INT NOT NULL AUTO_INCREMENT FOREIGN KEY (passengers_id),
    passengerclass enum(1,2,3) NOT NULL,
    passengerticket VARCHAR NOT NULL,
    tripfare VARCHAR NOT NULL,
    assignedcabin VARCHAR,
    parents INT NOT NULL,
    children INT NOT NULL,
    siblings INT NOT NULL,
    spouses INT NOT NULL,
    embarked VARCHAR NOT NULL
);

CREATE TABLE accident_cases (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY (id),
    passengerid INT NOT NULL FOREIGN KEY (id)
);