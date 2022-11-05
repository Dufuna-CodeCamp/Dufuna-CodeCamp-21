/* 
 * creating database called transport to hold all the tables
 */
CREATE DATABASE transport;
/* 
 * selecting the database to be used for storing tables
 */
USE transport;
/* 
 * creating the passengers table with fields: id, full_name, sex and age
 */
CREATE TABLE passengers (
    id INT NOT NULL AUTO_INCREMENT,
    full_name VARCHAR(255) NOT NULL,
    sex VARCHAR(10) not null,
    age VARCHAR(255),
    PRIMARY KEY(id)
);
/* 
 * creating the passengers_details table with fields: id, passenger_class, passenger_ticket_number,
 * trip_fare, assigned_cabin, number_of_parents, number_of_children, number_of_siblings, number_of_spouses,
 * point_of_embarkation, passengers_id - a foreign key referencing the passengers table
 */
CREATE TABLE passengers_details (
    id INT NOT NULL AUTO_INCREMENT,
    passengers_id INT NOT NULL,
    passenger_class ENUM("1", "2", "3") NOT NULL,
    passenger_ticket_number VARCHAR(255) NOT NULL,
    trip_fare BIGINT NOT NULL,
    assigned_cabin VARCHAR(255),
    number_of_parents_children INT NOT NULL,
    number_of_siblings_spouses INT NOT NULL,
    point_of_embarkation VARCHAR(255) NOT NULL,
    FOREIGN KEY (passengers_id) REFERENCES passengers (id),
    PRIMARY KEY(id)
);
/* 
 * creating the accident_cases table with fields: id, passengers_id - a foreign key 
 * referencing the passengers table,
 * survived_accident
 */
CREATE TABLE accident_cases (
    id INT NOT NULL AUTO_INCREMENT,
    passengers_id INT NOT NULL,
    survived_accident BOOLEAN,
    PRIMARY KEY (id),
    FOREIGN KEY (passengers_id) REFERENCES passengers (id)
);