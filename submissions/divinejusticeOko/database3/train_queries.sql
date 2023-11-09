--	Question 1	
SELECT COUNT(Survived) FROM survival WHERE Survived = 1; 
-- 342

-- Question 2
SELECT COUNT(Survived) FROM survival WHERE Survived = 0; 
-- 549

-- Question 3 
SELECT passenger.name, passenger.sex FROM passenger JOIN traveldetail ON passenger.PassengerId = traveldetail.PassengerId 
WHERE passenger.age < 27 AND traveldetail.Embarked IN ('Q', 'C');
    
-- Question 4 
SELECT COUNT(Survived) FROM survival WHERE survival.Survived = 1 AND survival.PassengerId IN (
	SELECT traveldetail.PassengerId FROM traveldetail WHERE  Embarked = 'S'
);
-- 218

-- Question 5 
SELECT passenger.PassengerId, passenger.name FROM passenger WHERE passenger.age > 35 AND PassengerId IN (
	SELECT traveldetail.PassengerId FROM traveldetail WHERE Fare > 100
);