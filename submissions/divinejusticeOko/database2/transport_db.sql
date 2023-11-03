CREATE DATABASE ABCtransport;

CREATE TABLE passengers(
	passengerID INT NOT NULL AUTO_INCREMENT,
    fullname VARCHAR(50) NOT NULL,
    sex VARCHAR(1) NOT NULL,
    age INT,
    PRIMARY KEY(passengerID)
);

CREATE TABLE tripdetails(
	tripID INT NOT NULL AUTO_INCREMENT,
	passengerID INT NOT NULL,
    class VARCHAR(4) NOT NULL,
    ticketnumber VARCHAR(10) NOT NULL,
    fare INT NOT NULL,
    Pchild INT NOT NULL,
    Sspouse INT NOT NULL,
    embarked VARCHAR(1) NOT NULL,
    cabin VARCHAR(5),
    PRIMARY KEY(tripID),
    FOREIGN KEY(passengerID) REFERENCES passengers(passengerID)
);

CREATE table survivals(
	passengerID INT NOT NULL,
    survived INT NOT NULL,
    PRIMARY KEY(passengerID),
    FOREIGN KEY(passengerID) REFERENCES passengers(passengerID)
);

