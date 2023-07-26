DROP DATABASE transportation_company;
SHOW DATABASES;
CREATE DATABASE transportation_company;
USE transportation_company;


CREATE TABLE passengers_details (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(250) NOT NULL,
age VARCHAR(10) DEFAULT NULL,
sex ENUM ('male','female') NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE trips (
id INT NOT NULL AUTO_INCREMENT,
passengers_details_id INT,
passenger_class ENUM ('1','2','3'),
passenger_ticket_number VARCHAR(250),
trip_fare DECIMAL (5,2) NOT NULL,
assigned_cabin VARCHAR(250),
parent_children_aboard INT NOT NULL,
siblings_spouses_aboard INT NOT NULL,
embarkation VARCHAR(250) NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (passengers_details_id) REFERENCES passengers_details(id)
);

CREATE TABLE accident_cases (
id INT NOT NULL AUTO_INCREMENT,
passengers_details_id INT,
passenger_survived BOOLEAN,
PRIMARY KEY (id),
FOREIGN KEY (passengers_details_id) REFERENCES passengers_details(id)
);
