CREATE DATABASE transport_company;
USE transport_company;
CREATE TABLE passenger_details(
	passenger_id INT NOT NULL AUTO_INCREMENT,
    fullname VARCHAR(250) NOT NULL,
    sex ENUM('MALE','FEMALE') NOT NULL,
    age INT,
    PRIMARY KEY(passenger_id)
);
CREATE TABLE travel_details(
	travel_id INT NOT NULL AUTO_INCREMENT,
    passenger_id INT NOT NULL,
    passenger_class ENUM('1','2','3') NULL DEFAULT '1',
    ticket_number VARCHAR(250) NOT NULL,
    trip_fare DECIMAL(10,2) NOT NULL,
    assigned_cabin VARCHAR(250),
    parents_child TINYINT NOT NULL,
    siblings_spouse TINYINT NOT NULL,
    embarkation VARCHAR(100) NOT NULL,
    PRIMARY KEY(travel_id),
    FOREIGN KEY(passenger_id) REFERENCES passenger_details(passenger_id)
);

CREATE TABLE survivals(
	survival_id INT NOT NULL AUTO_INCREMENT,
    passenger_id INT NOT NULL,
    survival_status BOOLEAN NOT NULL DEFAULT '1',
    PRIMARY KEY(survival_id),
    FOREIGN KEY(passenger_id) REFERENCES passenger_details(passenger_id)
);