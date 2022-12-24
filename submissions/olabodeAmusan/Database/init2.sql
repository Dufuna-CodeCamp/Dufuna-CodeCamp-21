CREATE DATABASE transportation_company;
USE transportation_company;

CREATE TABLE passengers(
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(250) NOT NULL,
sex ENUM('male','female') NOT NULL DEFAULT 'male',
age VARCHAR(8) NULL,
PRIMARY KEY(id)
);

CREATE TABLE trips(
id INT NOT NULL AUTO_INCREMENT,
passenger_id INT NOT NULL,
passenger_class ENUM('1','2','3') NOT NULL DEFAULT '1',
ticket_number VARCHAR(250) NOT NULL,
trip_fare DECIMAL(10,2) NOT NULL,
assigned_cabin VARCHAR(100) NOT NULL DEFAULT 'nil',
parch INT NOT NULL,
sibsp INT NOT NULL,
embarkation VARCHAR (250) NOT NULL ,
PRIMARY KEY(id),
FOREIGN KEY(passenger_id) REFERENCES passengers(id)
);

CREATE TABLE accidents(
id INT NOT NULL AUTO_INCREMENT,
passenger_id INT NOT NULL,
survival BOOLEAN NOT NULL DEFAULT 1,
PRIMARY KEY(id),	
FOREIGN KEY(passenger_id) REFERENCES passengers(id)
);



