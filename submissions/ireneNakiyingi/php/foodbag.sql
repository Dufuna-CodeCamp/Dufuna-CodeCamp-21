USE food_bag;
-- customers table
CREATE TABLE customer (
  SN INT NOT NULL AUTO_INCREMENT,
  Full_Name Varchar(45), 
  Email_Address Varchar(40),
  Created_At datetime ,
  PRIMARY KEY (SN)
); 
INSERT INTO customer 
( Full_Name, Email_Address, Created_At) VALUES 
('Alex crew', 'a@gmail.com', now()),
('parker tee', 'p@gmail,com',now())
;
select * from customer;
INSERT INTO customer 
( Full_Name, Email_Address, Created_At) VALUES 
('Betty White', 'bw@gmail.com', now()),
('Wanda hunt', 'huntw@gmail,com',now())
;
select * from customer;