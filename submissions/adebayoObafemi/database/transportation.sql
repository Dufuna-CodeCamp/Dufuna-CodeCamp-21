create database transportation_company;
use transportation_company;

-- create the passengers list table -- 
create table passenger_list (
	id int not null auto_increment,
    full_name varchar(100) not null,
    sex varchar(10) not null,
    age int,
    primary key (id)
);

-- after review: modify the full_name column -- 
alter table passengers
modify full_name varchar(250) not null;

-- change passenger_list table name --
alter table passenger_list
rename to passengers;

-- modify sex column in the passenger's table -- 
alter table passengers
modify sex enum('F', 'M', ' ') default ' ' not null;

-- create the table for the list of trips--
create table trips (
	id int not null auto_increment,
    passenger_class int not null,
    pasenger_ticket_number int not null,
    trip_fare int not null,
    assigned_cabin varcharacter(20),
    no_of_parents_or_children_aboard int not null,
    no_of_siblings_or_spouses_aboard int not null,
    point_of_embarkation varchar(250) not null,
    primary key (id)
);

-- after review: modify the assigned_cabin column --
alter table trips
modify assigned_cabin varchar(250);

-- modify the trips table -- 
alter table trips
add passengers_id int not null,
add foreign key(passengers_id) references passengers (id);

alter table trips
modify passenger_class enum('1', '2', '3', ' ') DEFAULT ' ' not null;

-- create the table for unplanned events such as accident--
create table accidents (
	id int not null auto_increment,
    event_date date,
    passenger_id int not null,
    survived BOOLEAN not null,
    primary key (id),
    foreign key (passenger_id) references passengers (id)
);