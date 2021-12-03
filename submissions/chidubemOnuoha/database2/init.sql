--create a database for a transport company
CREATE DATABASE transport_company;
--run your command to create your database

--we are going to use the databse
USE transport_company;

CREATE TABLE  passengers (
    id NOT NULL AUTO_INCREMENT PRIMARY key,
    full_name VARCHAR NOT NULL,
    passengers_id INT NOT NULL age VARCHAR,
    sex VARCHAR NOT NULL, 
    created_at DATETIME,
    
);

--creating a passengers detail table
 CREATE TABLE passengers_details (
     id INT NOT NULL AUTO_INCREMENT  FOREIGN KEY (passengers_id),
     passenger_class VARCHAR NOT NULL,
     ticket_number VARCHAR NOT NULL,
     trip_fare VARCHAR NOT NULL,
     assigned_cabin VARCHAR NOT NULL,
     number_passengers VARCHAR NULL,
     number_sibling  VARCHAR NULL,
     created_at DATETIME,
     passenger_id INT NOT NULL,
     
 );

--creting a passenger acciedent_cases
 CREATE TABLE accident_cases (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY (id) FOREIGN KEY (passengers_id),
    passenger_id INT NOT NULL AUTO_INCREMENT,
    accident_id INT NOT NULL
    ticket_number VARCHAR NOT NULL,
    assigned_cabin VARCHAR NOT NULL,
    passenger_class VARCHAR  NOT NULL,
    created_at DATETIME
    FOREIGN key(passengers_id)
    

 )

