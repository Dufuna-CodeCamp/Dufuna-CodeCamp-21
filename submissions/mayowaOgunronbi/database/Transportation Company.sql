CREATE DATABASE transportation_company;
USE transportation_company;


CREATE TABLE passengers (
	id INT AUTO_INCREMENT NOT NULL,
    full_name VARCHAR(250) NOT NULL,
    sex VARCHAR(50) NOT NULL,
    age INT,
    PRIMARY KEY (id)
);


CREATE TABLE travel_details (
	id INT AUTO_INCREMENT NOT NULL,
	passengers_id INT NOT NULL,
    class INT NOT NULL,
    ticket VARCHAR(50) NOT NULL,
    fare DECIMAL(10,2) NOT NULL,
    cabin VARCHAR(10),
    parents_children INT NOT NULL,
    siblings_spouses INT NOT NULL,
    embarked VARCHAR(50) NOT NULL,
    PRIMARY KEY (id),
	FOREIGN KEY passengers_id REFERENCES passengers (id)
	
);


CREATE TABLE survivals (
	id INT AUTO_INCREMENT NOT NULL,
	passengers_id INT NOT NULL,
    survived INT NOT NULL,
    PRIMARY KEY (id),
	FOREIGN KEY passengers_id REFERENCES passengers (id)
);


