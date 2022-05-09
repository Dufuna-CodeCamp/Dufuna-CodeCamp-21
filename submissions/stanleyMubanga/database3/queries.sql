--total number of passengers who survived
SELECT COUNT(survival) FROM accident_cases WHERE survival = 1;
--342

--total number of passengers who did not survived
SELECT COUNT(survival) FROM accident_cases WHERE survival = 0;
--549

--name and sex of passengers under the age of 27 that embarked at Queenstown and Cherbourg

-- THE p AND THE tARE ALIASES FOR PASSENGERS AND TRIPS

SELECT p.name, p.sex 
FROM passengers p INNER JOIN trips t
ON  p.id = t.passengers_id 
AND p.age < 27 
WHERE t.embarked IN ('C', 'Q');
--158

-- passengers that embarked at Southampton survived?
SELECT COUNT(*) 
FROM t INNER JOIN accident_cases a 
ON t.passengers_id = A.passengers_id AND t.embarked = 'S'
WHERE accident_cases.survival = 1; 
--218

--  the id, name and the total number of passengers who paid a fare greater than $100 and above the age of 35 had siblings or spouses on board
SELECT p.id, p.name 
FROM passengers p INNER JOIN trips t
ON p.id = t.passengers_id 
AND t.fare > 100
WHERE p.age > 35 AND sibsp >= 1;
--9