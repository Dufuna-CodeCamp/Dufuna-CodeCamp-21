
CREATE DATABASE transportation;

CREATE TABLE passengers_details (
	id INT NOT NULL auto_increment,
    full_name VARCHAR(250) NOT NULL,
    sex VARCHAR(8) NOT NULL,
    age VARCHAR NULL,
    PRIMARY KEY(id)
);

CREATE TABLE passengers (
	id INT NOT NULL auto_increment,
    passenger_id INT NOT NULL,
    passenger_class ENUM ('1', '2', '3') NOT NULL,
    ticket_number VARCHAR(250) NOT NULL,
    assigned_cabin VARCHAR(15),
    trip_fare FLOAT (10,2) NOT NULL,
    number_of_parents_or_children_aboard INT NOT NULL,
    number_of_siblings_or_spouses_aboard INT NOT NULL,
    point_of_embarkation VARCHAR(250) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(passenger_id) REFERENCES passengers_details(id)
);

CREATE TABLE accident_cases(
	id INT NOT NULL auto_increment,
    passenger_id INT NOT NULL,
    passenger_survived BOOLEAN NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(passenger_id) REFERENCES passengers_details(id)
);