DROP DATABASE transportation_company;
SHOW DATABASES;
CREATE DATABASE transportation_company;
USE transportation_company;

CREATE TABLE passengers (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(250) NOT NULL,
age VARCHAR(10) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE passengers_details (
id INT NOT NULL AUTO_INCREMENT,
passengers_id INT NOT NULL,
sex ENUM ('male','female') NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (passengers_id) REFERENCES passengers(id)
);

CREATE TABLE trips (
id INT NOT NULL AUTO_INCREMENT,
passenger_id INT NOT NULL,
passenger_class ENUM ('1','2','3'),
passenger_ticket_number VARCHAR(250),
trip_fare DECIMAL (5,2) NOT NULL,
assigned_cabin VARCHAR(250),
parents INT NOT NULL,
spouses_aboard INT NOT NULL,
children INT NOT NULL,
siblings_aboard INT NOT NULL,
embarkation VARCHAR(250) NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (passenger_id) REFERENCES passengers(id)
);

CREATE TABLE accident_cases (
id INT NOT NULL AUTO_INCREMENT,
trip_id INT NOT NULL,
passenger_id INT NOT NULL,
passenger_survived ENUM ('YES','NO'),
PRIMARY KEY (id),
FOREIGN KEY (trip_id) REFERENCES trips(id),
FOREIGN KEY (passenger_id) REFERENCES passengers(id)
);
