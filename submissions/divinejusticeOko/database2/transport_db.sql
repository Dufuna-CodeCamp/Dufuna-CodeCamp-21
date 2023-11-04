CREATE DATABASE ABCtransport;

USE ABCtransport;

CREATE TABLE passengers(
	 passengers_id INT NOT NULL AUTO_INCREMENT,
    fullname VARCHAR(50) NOT NULL,
    sex VARCHAR(1) NOT NULL,
    age INT,
    PRIMARY KEY(passengers_id)
);
CREATE TABLE passengers_details(
	tripID INT NOT NULL AUTO_INCREMENT,
	passengers_id INT NOT NULL,
    class VARCHAR(4) NOT NULL,
    ticketnumber VARCHAR(10) NOT NULL,
    fare DECIMAL(7,2) NOT NULL,
    Pchild INT NOT NULL,
    Sspouse INT NOT NULL,
    embarked VARCHAR(1) NOT NULL,
    cabin VARCHAR(5),
    PRIMARY KEY(tripID),
    FOREIGN KEY(passengers_id) REFERENCES passengers(passengers_id)
);

CREATE TABLE accident_cases(
    id INT NOT NULL AUTO_INCREMENT,
	passengers_id INT NOT NULL,
    survived BOOLEAN NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (passengers_id) REFERENCES passengers(passengers_id)
);
