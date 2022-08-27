/* 1. Those that survived*/
SELECT PassengerId, Survived FROM Survival
WHERE Survived=1;
-- passengers who survived = 342


/* 2. Those that did not survive*/
SELECT PassengerId, Survived FROM Survival
WHERE Survived=0;
-- passengers who did not survive = 549


/* 3. name and sex of passengers < 27 && embarked @ Q && C  */
SELECT Passenger.Name, Passenger.Sex FROM Passenger
INNER JOIN TravelDetail
ON TravelDetail.PassengerId = Passenger.PassengerId
WHERE Passenger.Age<27 AND (TravelDetail.Embarked='C' OR TravelDetail.Embarked='Q');
-- total passengers =158

/*  4. Those that embarked at Southampton  */

SELECT TravelDetail.PassengerId, TravelDetail.Embarked FROM TravelDetail 
INNER JOIN Survival
ON TravelDetail.PassengerId = Survival.PassengerId
WHERE Survival.Survived=1 AND (TravelDetail.Embarked = 'S');

-- passengers that embarked at Southampton survived =218

/* 5. id and names of passsengers who paid > 100  */

SELECT  Passenger.PassengerId, Passenger.Name FROM Passenger
INNER JOIN TravelDetail
ON TravelDetail.PassengerId = Passenger.PassengerId
WHERE Passenger.Age>35 AND (TravelDetail.Fare>100 AND TravelDetail.SibSp != 0);

/*
# PassengerId, Name
320, Spedden, Mrs. Frederic Oakley (Margaretta Corning Stone)
391, Carter, Mr. William Ernest
439, Fortune, Mr. Mark
545, Douglas, Mr. Walter Donald
582, Thayer, Mrs. John Borland (Marian Longstreth Morris)
661, Frauenthal, Dr. Henry William
699, Thayer, Mr. John Borland
764, Carter, Mrs. William Ernest (Lucile Polk)
857, Wick, Mrs. George Dennick (Mary Hitchcock)

COUNT =9

*/
