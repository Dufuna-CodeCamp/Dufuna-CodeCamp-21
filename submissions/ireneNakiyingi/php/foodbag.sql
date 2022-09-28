USE food_bag;
-- customers table
CREATE TABLE customers (
  SN INT NOT NULL AUTO_INCREMENT,
  Full_Name Varchar(45), 
  Email_Address Varchar(40),
  Created_At datetime ,
  PRIMARY KEY (SN)
); 


INSERT INTO customers 
( Full_Name, Email_Address, Created_At) VALUES 
('Alex crew', 'a@gmail.com', now()),
('parker tee', 'p@gmail,com',now())
;
select * from customers;
INSERT INTO customers 
( Full_Name, Email_Address, Created_At) VALUES 
('Betty White', 'bw@gmail.com', now()),
('Wanda hunt', 'huntw@gmail,com',now())
;
select * from customers;

-- orders TABLE
CREATE table order_lists (
S_N INT NOT NULL AUTO_INCREMENT,
Product_Name varchar(25) NOT NULL,
Unit_Price float(10,2) NOT NULL,
Quantity INT(100) NOT NULL,
Total_price float(10,2) NOT NULL,
create_date timestamp NOT NULL,
Address varchar(225) NOT NULL,
primary key (S_N),
foreign key (S_N) references customers(SN)
);
select * from order_lists;
-- insert data
insert into order_lists 
(Product_Name, Unit_Price, Quantity, Total_Price,create_date, Address)values
('Jelly roll', 5000.0, 2, 10000.0, now(), '234 Binti av, Sinter, Kavule, Uganda');
insert into order_lists 
(Product_Name, Unit_Price, Quantity, Total_Price,create_date, Address)values
('Black currant tootsie', 4500.0, 3, 13500.0, now(), '45 Mathi av, Wandegeya, Kiwatule, Uganda'),
('Strawberry', 15000.0, 1, 15000.0, now(), 'Ap 6 Senator av, Munyonyo, Kololo, Uganda'),
('Vanilla toast', 2300.0, 5, 11500.0, now(), 'Nkizi road, Ntinda, Kampala, Uganda')
;
select * from order_lists;