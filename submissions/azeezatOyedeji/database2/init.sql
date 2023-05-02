-- create travel database;
CREATE DATABASE travel;

-- specifying which database to use
USE travel;

-- to create passenger details table;
CREATE TABLE passengers(
id INT NOT NULL AUTO_INCREMENT,
full_name VARCHAR(50) NOT NULL,
sex VARCHAR(7) NOT NULL,
age VARCHAR(3),
PRIMARY KEY (id)
);

-- travel details data table;
CREATE TABLE passengers_details(
id INT NOT NULL AUTO_INCREMENT,
passengers_id INT NOT NULL,
p_class INT NOT NULL,
ticket_num VARCHAR(20) NOT NULL,
trip_fare FLOAT(10,4) NOT NULL,
cabin VARCHAR(6),
num_parent_children INT NOT NULL,
num_siblings_spouses INT NOT NULL,
embarked CHAR(1) NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (passengers_id) REFERENCES passenger(id)
);

-- to create survival table;
CREATE TABLE accident_cases(
id INT NOT NULL AUTO_INCREMENT,
 passengers_id INT NOT NULL,
 survived INT NOT NULL,
 PRIMARY KEY (id),
 FOREIGN KEY (passengers_id) REFERENCES passenger_details(id)
);
