-- Create a Database
 CREATE travels;


--  use created database
USE travels;



-- Total number of passengers that survived



-- Total number of passengers that did not survive
SELECT COUNT(*) FROM travels_csv WHERE Survived = 0;
549

-- Name and Sex of passengers under 27 of age that embarked at Queenstown and Cherbourg
SELECT names.Name, names.Sex FROM names JOIN train_csv_1 ON names.PassengerId = train_csv_1.PassengerId WHERE names.Age < 27 AND (train_csv_1.Embarked = 'Q' || train_csv_1.Embarked = 'C');



-- Surivals that embarked at Southampton
SELECT COUNT(train_csv_1.Embarked) FROM train_csv_1 INNER JOIN travels_csv ON train_csv_1.PassengerId = travels_csv.PassengerId WHERE train_csv_1.Embarked = 'S' AND travels_csv.Survived = 1;
218


-- id, name and total of passengers who paid higer than $100 and above 35 years that has siblings or spouses on board
SELECT names.PassengerId,names.Name, COUNT(train_csv_1.Fare) FROM names INNER JOIN train_csv_1 ON names.PassengerId = train_csv_1.PassengerId WHERE train_csv_1.Fare > 100 AND names.Age > 35 AND train_csv_1.SibSp > 0;
320, 9
