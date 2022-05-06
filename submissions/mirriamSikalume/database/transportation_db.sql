CREATE database transportation_table;
USE transportation_table;

CREATE TABLE passengers_table (
    id INT NOT NULL auto_increment,
    full_name VARCHAR (250) NOT NULL,
    sex VARCHAR (250) NOT NULL,
    age INT NULL,
    primary key(id)
    );
    
CREATE TABLE company_table (
    id INT NOT NULL auto_increment,
    passengers_id INT NOT NULL,
    passengers_class ENUM('1' , '2' , '3') NOT NULL,
    passengers_ticket_number VARCHAR (250) NOT NULL,
    trip_fare FLOAT(10,2) NOT NULL,
    assigned_cabin VARCHAR(250),
    number_of_parents_or_child_aboard INT NOT NULL,
    number_of_siblings_or_spouse_aboard INT NOT NULL,
    point_of_embarkation VARCHAR (250) NOT NULL,
    primary key(id),
    foreign key (passenger_id) REFERENCES passengers_table (id)
    );
    
    CREATE TABLE accident_table (
    id INT NOT NULL auto_increment,
    passengers_id INT NULL,
    primary key(id),
    foreign key(passengers_id) REFERENCES passengers_table(id)
    );
    
    
