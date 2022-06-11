-- QUERYING THE TRANSPORTATION DATABASE (TASK 1)

SHOW TABLES;
SELECT * FROM survival;
SELECT * FROM passenger;
SELECT * FROM travel_detail;

-- QUESTION 1
SELECT * FROM survival WHERE survived = 1;
-- 342 passengers survived.


-- QUESTION 2
SELECT * FROM survival WHERE survived = 0;
-- 549 passengers did not survive.


-- QUESTION 3
SELECT passenger.name, passenger.Sex
FROM passenger INNER JOIN travel_detail ON passenger.PassengerId = travel_detail.PassengerId WHERE passenger.age < 27
AND Embarked IN ('C', 'Q');


-- QUESTION 4
SELECT survival.PassengerId, survival.survived, travel_detail.embarked
FROM survival INNER JOIN travel_detail ON survival.PassengerId = travel_detail.PassengerId WHERE survived = 1 AND embarked = 'S';
-- 218 passengers from those who embarked at Southampton survived.


-- QUESTION 5 
SELECT passenger.PassengerId, passenger.name
FROM passenger INNER JOIN travel_detail ON passenger.PassengerId = travel_detail.passengerId WHERE age > 35 AND fare > 100  AND SibSp > 0;
