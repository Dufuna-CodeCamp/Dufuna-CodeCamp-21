--create a database for a transport company
CREATE DATABASE transport_company;
--run your command to create your database

--we are going to use the databse
USE transport_company;

CREATE TABLE  passengers (
    id NOT NULL AUTO_INCREMENT,
    full_name VARCHAR,
    sex VARCHAR,
    age VARCHAR,
);


