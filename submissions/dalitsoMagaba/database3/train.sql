USE train;

CREATE TABLE passengers (
id INT NOT NULL AUTO_INCREMENT,
full_name VARCHAR(250) NOT NULL,
sex ENUM('male','female') NOT NULL,
age VARCHAR(10) DEFAULT NULL,
PRIMARY KEY(id)
);

CREATE TABLE trips (
id INT NOT NULL AUTO_INCREMENT,
passenger_id INT NOT NULL,
ticket VARCHAR(250) NOT NULL,
fare FLOAT NOT NULL,
cabin VARCHAR(250) DEFAULT NULL,
embarked ENUM('S','C','Q') NOT NULL,
p_class  ENUM('1','2','3') NOT NULL,
sibsp VARCHAR(10) NOT NULL,
parch VARCHAR(10) NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (passenger_id) REFERENCES passengers(id)
);

CREATE TABLE accidents (
id INT NOT NULL AUTO_INCREMENT,
passenger_id INT NOT NULL,
survived BOOLEAN,
PRIMARY KEY (id),
FOREIGN KEY (passenger_id) REFERENCES passengers(id)
);

SELECT * FROM trips ;
-- (1) Total number of passengers who survived
SELECT COUNT(*) FROM accidents WHERE survived = 1;
-- 342 

-- (2) Total number of passengers who did not survive
SELECT COUNT(*) FROM accidents WHERE survived = 0;
-- 549

-- (3) Name and sex of passengers under 27 who embarked at Queenstown and Cherbourg
SELECT passengers.full_name,passengers.sex FROM passengers INNER JOIN trips ON passengers.id = trips.passenger_id AND passengers.age < 27
WHERE trips.embarked = 'C' OR trips.embarked = 'Q';

-- (4) Passengers that embarked at Southampton that survived
SELECT COUNT(*) FROM trips INNER JOIN accidents ON trips.passenger_id = accidents.passenger_id
WHERE trips.embarked = 'S' AND accidents.survived = 1;
-- 218

-- (5) Passengers with fare greater than $100 and are above 35 with siblings or spouses on board
SELECT passengers.id,passengers.full_name FROM passengers INNER JOIN trips ON passengers.id = trips.passenger_id AND trips.fare > 100
WHERE passengers.age > 35 AND trips.sibsp >= 1;
-- 9