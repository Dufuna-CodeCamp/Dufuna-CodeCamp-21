-- Total number of passengers that survived 
SELECT COUNT(passenger_survived) 
    FROM accident_cases 
    WHERE passenger_survived = 1;

-- Total number of passengers that didn't survive
SELECT COUNT(passenger_survived) 
    FROM accident_cases 
    WHERE passenger_survived = 0;
