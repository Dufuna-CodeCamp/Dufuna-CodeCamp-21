/* Creating transport company database */
create database transport_company;

use transport_company;

create table passengers (
	id int not null auto_increment,
	full_name varchar(50) not null,
    sex varchar(10) not null,
    age varchar(10),
    primary key (id)
    );
    
/* creating trips table */    
create table trips (
	id int not null auto_increment,
	passenger_id int not null,
    passenger_class int not null,
    passenger_ticket_number varchar(10) not null,
    trip_fare int not null,
    assigned_cabin varchar(50),
    number_of_parents_children_aboard int not null,
    number_of_siblings_spouses_aboard int not null,
    point_of_embarkation varchar(50) not null,
    primary key(id),
    foreign key (passenger_id) references passengers(id)
    );

/* Creating survivorsrs table */
create table survivors (
	id int not null auto_increment,
	passenger_id int not null,
    survived int not null,
    primary key(id),
    foreign key (passenger_id) references passengers(id)
    );
    
alter table passengers modify full_name varchar(250) not null;
alter table passengers modify sex varchar(250) not null;
alter table passengers modify age varchar(250);
alter table trips modify passenger_ticket_number varchar(250);
alter table trips modify passenger_class enum('1','2','3') not null;
alter table trips modify assigned_cabin varchar(250);
alter table trips modify point_of_embarkation varchar(250);
alter table trips modify trip_fare DECIMAL(10,2);
alter table survivors modify survived boolean default true;   