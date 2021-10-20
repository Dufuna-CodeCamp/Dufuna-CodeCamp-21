CREATE DATABASE travels;
use travels;
CREATE TABLE passengers (
    passengers_id INT NOT NULL,
    age VARCHAR,
    fullname VARCHAR NOT NULL,
    sex VARCHAR NOT NULL
);

CREATE TABLE passengers_details (
    id INT NOT NULL AUTO_INCREMENT,
    passenger_id INT NOT NULL,
    passenger_class INT NOT NULL,
    passenger_ticket VARCHAR NOT NULL,
    fare VARCHAR NOT NULL,
    cabin VARCHAR,
    parents_children INT NOT NULL,
    siblings_spouses INT NOT NULL,
    embarked VARCHAR NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (passenger_id) REFERENCES passengers (passengers_id)
);

CREATE TABLE accident_cases (
    id INT AUTO_INCREMENT NOT NULL,
    survive BOOLEAN NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id) REFERENCES passengers (passengers_id)
);