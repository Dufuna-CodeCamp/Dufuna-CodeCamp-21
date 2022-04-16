-- creating database named travel_sample
CREATE DATABASE travel_sample;

-- specifying database to use
USE travel_sample;


-- creating users table
CREATE TABLE users (
	id INT NOT NULL AUTO_INCREMENT,
    full_name VARCHAR(100) NOT NULL,
    sex VARCHAR(10) NOT NULL,
    age INT,
    PRIMARY KEY (id)
);

-- creating trip_passengers table
CREATE TABLE trip_passengers (
	id INT NOT NULL AUTO_INCREMENT,
    passenger_id INT NOT NULL,
    passenger_class INT NOT NULL,
    ticket_number VARCHAR(50) NOT NULL,
    trip_fare DECIMAL(10,5) NOT NULL,
    cabin VARCHAR(100),
    num_children_parents INT NOT NULL,
    num_sibilings_spouses INT NOT NULL,
    embark_point VARCHAR(10) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (passenger_id) REFERENCES users (id)
);

-- creating accidents table
CREATE TABLE accidents (
	id INT NOT NULL AUTO_INCREMENT,
    passenger_id INT NOT NULL,
    status INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (passenger_id) REFERENCES trip_passengers (id)
);



