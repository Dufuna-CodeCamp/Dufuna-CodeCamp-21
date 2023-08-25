/* Creating transport company database */
create database transport_company;

use transport_company;

create table passengers (
	id int not null auto_increment,
	full_full_name varchar(50) not null,
    sex varchar(10) not null,
    age varchar(10),
    primary key (id)
    );
    
/* creating trips table */    
create table trips (
	id int not null auto_increment,
	passengers_id int not null,
    passengers_class int not null,
    passengers_ticket_number varchar(10) not null,
    trip_fare int not null,
    assigned_cabin varchar(50),
    number_of_parents_children_aboard int not null,
    number_of_siblings_spouses_aboard int not null,
    point_of_embarkation varchar(50) not null,
    primary key(id),
    foreign key (passengers_id) references passengers(id)
    );
show columns from trips;
/* Creating survivorsrs table */
create table survivors (
	id int not null auto_increment,
	passengers_id int not null,
    survived int not null,
    primary key(id),
    foreign key (passengers_id) references passengers(id)
    );
    
create database transport;
use transport;

alter table passengers modify full_full_name varchar(250) not null;
alter table passengers modify sex varchar(250) not null;
alter table passengers modify age varchar(250);
alter table trips modify passengers_ticket_number varchar(250);
alter table trips modify passengers_class enum('1','2','3') not null;
alter table trips modify assigned_cabin varchar(250);
alter table trips modify point_of_embarkation varchar(250);
alter table trips modify trip_fare DECIMAL(10,2);
alter table survivors modify survived boolean default true;
alter table passengers modify sex enum('male','female') not null;

/* Q1 */
select count(survived) from survivors where survived = 1;
 /* 342 survivors */ 

/* Q2 */
select count(survived) from survivors where survived = 0;
/* 549 casualties */ 

/* Q3 */
select passengers.full_name, passengers.sex from passengers inner join trips on passengers.id = trips.id where passengers.age < 27 and (point_of_embarkation = 'Q' or point_of_embarkation = 'C');

/* Q4 */
select count(survived) from survivors inner join trips on survivors.passenger_id = trips.passenger_id where survived = 1 and point_of_embarkation = 'S';
/* Total: 218 */

/* Q5 */
select passengers.id, passengers.full_name from passengers inner join trips on trips.id = passengers.id where passengers.age > 35 and (trips.trip_fare > 100 and trips.number_of_siblings_spouses_aboard != 0);
