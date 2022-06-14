create database transportation_company;
show databases;
use transportation_company;
create table passengers (
	id int auto_increment not null,
    full_name varchar(100) not null,
    sex varchar(10) not null,
    age int,
    primary key (id)
);
select * from passengers;
use transportation_company;
create table travel_details (
	id int auto_increment not null,
    class int not null,
    ticket varchar(10) not null,
    fare decimal(10,2) not null,
    cabin varchar(10),
    parents_children int not null,
    siblings_spouses int not null,
    embarked varchar(50) not null,
    primary key (id)
);
select * from travel_details;

create table survivals (
	id int auto_increment not null,
    survived int not null,
    primary key (id)
);
select * from survivals;
show tables in transportation_company;
