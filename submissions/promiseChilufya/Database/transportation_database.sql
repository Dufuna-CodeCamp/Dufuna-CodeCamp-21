CREATE DATABASE Transportation;

USE Transportation;

/* passengers table */
	CREATE TABLE passengers_table(
	id INT NOT NULL AUTO_INCREMENT,
	full_name VARCHAR(255) NOT NULL,
	sex VARCHAR(100) NOT NULL,
	age INT NULL,
	PRIMARY KEY(id)
	);

/* trips tables */
	CREATE TABLE trips_table(
	id INT NOT NULL AUTO_INCREMENT,
	passenger_id INT NOT NULL,
	passenger_class ENUM('1','2','3') NOT NULL,
	trip_fare FLOAT NOT NULL,
	cabin VARCHAR(255) NULL,
	number_of_parents_or_children INT NOT NULL,
	number_of_siblings_or_spouses INT NOT NULL,
	embarkation_point VARCHAR(255) NOT NULL,
	PRIMARY KEY(id),
	FOREIGN KEY(passenger_id) REFERENCES passengers_table(id)
	);

/* accidents table */
CREATE TABLE accidents_table(
id INT NOT NULL AUTO_INCREMENT,
passenger_id INT NOT NULL,
survival_status BOOLEAN NOT NULL,
PRIMARY KEY(id),
FOREIGN KEY(passenger_id) REFERENCES passengers_table(id)
);
