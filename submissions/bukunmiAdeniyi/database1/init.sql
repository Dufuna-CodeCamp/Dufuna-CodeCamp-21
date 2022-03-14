-- FIRSTLY CREATING  a transport company DATABASE

CREATE DATABASE transports;

-- USING  the transport DATABASE created
USE transports;

-- CREATING a TABLE named passengers
CREATE TABLE passengers(
id INT NOT NULL AUTO_INCREMENT,
full_name VARCHAR(100) NOT NULL,
passenger_id INT NOT NULL,
age INT,
sex VARCHAR(50),
created_at DATETIME,
PRIMARY KEY (id)
);

SHOW COLUMNS FROM passengers;

-- CREATING a TABLE keeping the records of passengers 
 CREATE TABLE passengers_details (
     id INT NOT NULL AUTO_INCREMENT,  
     passenger_class ENUM('1','2','3') NOT NULL,
     ticket_number VARCHAR(50) NOT NULL,
     trip_fare DECIMAL(10,2) NOT NULL,
     assigned_cabin VARCHAR(20) NULL,
     number_passengers INT NOT NULL,
     number_sibling  VARCHAR(50) NULL,
     point_embarkation VARCHAR (100) NOT NULL,
     created_at DATETIME,
    passengers_id INT NOT NULL,
    PRIMARY KEY(id),
     FOREIGN KEY (passengers_id) REFERENCES passengers (id)
      );
      SHOW COLUMNS FROM passengers_details;
      
      -- CREATING a TABLE indicating events of accidents whether the passengers survived or not -- 
      CREATE TABLE accident_trips (
    id INT NOT NULL AUTO_INCREMENT ,
    passenger_id INT NOT NULL,
    accident_id INT NOT NULL,
    passenger_status ENUM('Y', 'N'),
    ticket_number VARCHAR(70) NOT NULL,
    assigned_cabin VARCHAR(60) NOT NULL,
    passenger_class VARCHAR(100)  NOT NULL,
    created_at DATETIME,
     PRIMARY KEY (id),
   FOREIGN KEY (passenger_id) REFERENCES passengers (id)
 );
      
