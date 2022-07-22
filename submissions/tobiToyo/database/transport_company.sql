create database dufuna_transport_company;
use dufuna_transport_company;
create table passengers (
	id int not null auto_increment,
	full_name varchar(150) not null,
    sex varchar(50) not null,
    age int,
    primary key (id)
    );
    

create table trips (
	id int not null auto_increment,
	passenger_id int not null,
    passenger_class int not null,
    passenger_ticket_number  varchar(100) not null,
    trip_fare int not null,
    assigned_cabin varchar(100),
    number_of_parents_children_aboard int not null,
    number_of_siblings_spouses_aboard int not null,
    point_of_embarkation varchar(100) not null,
    primary key(id),
    foreign key (passenger_id) references passengers(id)
    );


create table survivors (
	id int not null auto_increment,
	passenger_id int not null,
    survived int not null,
    primary key(id),
    foreign key (passenger_id) references passengers(id)
    );
    
    
