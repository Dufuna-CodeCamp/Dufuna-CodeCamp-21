# creating database
CREATE DATABASE t_flight;
SHOW DATABASES;
USE t_flight;

# Creating table for the passengers
CREATE TABLE passengers (
	passengerid INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL,
    sex VARCHAR(10) NOT NULL,
    age INT,
    created_at DATETIME,
    PRIMARY KEY(passengerid)
);

# Creating table for the survivals
CREATE TABLE survival (
	passengerid INT NOT NULL AUTO_INCREMENT,
    survived INT NOT NULL,
	PRIMARY KEY(passengerid),
    FOREIGN KEY (passengerid) REFERENCES passengers (passengerid)
);

# Table contain travelers detals
CREATE TABLE passengers_details (
	passengerid INT NOT NULL AUTO_INCREMENT,
    ticket VARCHAR(20) NOT NULL,
    fare DECIMAL(10,4) NOT NULL,
    cabin VARCHAR(20),
    embarked VARCHAR(5) NOT NULL,
    pclass INT NOT NULL,
    sibsp INT NOT NULL,
    parch INT NOT NULL,
    created_at DATETIME,
    PRIMARY KEY(passengerid),
	FOREIGN KEY (passengerid) REFERENCES passengers (passengerid)
);

#Total number of passengers who surrvived
SELECT COUNT(survived) FROM survival WHERE survived=1;
#342

#Total number of passengers who did not surrvived
SELECT COUNT(survived) FROM survival WHERE survived=0;
SELECT * FROM survival WHERE survived LIKE '%0';
#549

# Name and sex of passengers under the age of 27 at Q and C
SELECT passengers.name, passengers.sex  
FROM passengers INNER JOIN passengers_details 
ON passengers.passengerid = passengers_details.passengerid 
WHERE age<27 AND (embarked= 'Q' OR embarked= 'C');

# Passengers that embarked at Southampton survied
SELECT COUNT(survived) 
FROM survival INNER JOIN passengers_details 
ON survival.passengerid = passengers_details.passengerid
WHERE survived=1 AND embarked= 'S';
#218

# id and name of passengers who paid 100 above and are above 35
SELECT passengers_details.passengerid, passengers.name  
FROM passengers_details INNER JOIN passengers
ON passengers.passengerid = passengers_details.passengerid 
WHERE fare > 100 AND age > 35 AND sibsp !=0;
