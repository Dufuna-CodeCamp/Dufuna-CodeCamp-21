
CREATE DATABASE transportation;

CREATE TABLE registered_passengers (
	id INT NOT NULL auto_increment,
    full_name VARCHAR(250) NOT NULL,
    sex VARCHAR(8) NOT NULL,
    age INT NULL,
    primary key(id)
);

CREATE TABLE company_table (
	id INT NOT NULL auto_increment,
    passenger_id INT (250) NOT NULL,
    passenger_class ENUM ('1', '2', '3') NOT NULL,
    ticket_number VARCHAR(250) NOT NULL,
    assigned_cabin VARCHAR(15),
    trip_fare FLOAT (10,2) NOT NULL,
    number_of_parents_or_children_aboard INT NOT NULL,
    number_of_siblings_or_spouses_aboard INT NOT NULL,
    point_of_embarkation VARCHAR(250) NOT NULL,
    primary key(id), foreign key(passenger_id) references registered_passengers(id)
);

CREATE TABLE accidents_table(
	id INT NOT NULL auto_increment,
    passenger_id INT NOT NULL,
    passenger_survived BOOLEAN NOT NULL,
    primary key(id), foreign key(passenger_id) references registered_passengers(id)
);