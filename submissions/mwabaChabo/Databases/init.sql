CREATE DATABASE transport;
USE transport;
CREATE TABLE registered_passengers (
PassengerId INT NOT NULL AUTO_INCREMENT,
FullName VARCHAR(250) NOT NULL,
Sex VARCHAR(10) NOT NULL,
Age VARCHAR(10) NULL,
PRIMARY KEY(PassengerId)
);

CREATE TABLE travel_details (
Id INT NOT NULL AUTO_INCREMENT,
PassengerId INT NOT NULL,
PassengerClasses ENUM('1','2','3') NULL DEFAULT'1',
PassengerTicketNumbers VARCHAR(250) NOT NULL,
TripFares DECIMAL(8.2) NOT NULL,
AssignedCabins VARCHAR(255),
ParentChildrenAboard INT NOT NULL,
SiblingsSpousesAboard INT NOT NULL,
Embarkations VARCHAR(100) NOT NULL,
PRIMARY KEY(Id),
FOREIGN KEY(PassengerId) REFERENCES registered_passengers(PassengerId)
);

CREATE TABLE survivors(
Id INT NOT NULL AUTO_INCREMENT,
PassengerId INT NOT NULL,
SurvivedPassengers BOOLEAN NOT NULL,
PRIMARY KEY(Id),
FOREIGN KEY(PassengerId) REFERENCES registered_passengers(PassengerId)
);