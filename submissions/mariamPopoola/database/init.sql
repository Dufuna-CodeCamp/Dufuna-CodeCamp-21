-- Database: food_bag


-- Table structure for food

CREATE TABLE food (
    id INT NOT NULL AUTO_INCREMENT,
    type INT NOT NULL,
    category_one VARCHAR(100) NOT NULL,
    category_two VARCHAR(100) NOT NULL,
    category_three VARCHAR(100) NOT NULL,
    category_four VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);



-- Table structure for vendor_food

CREATE TABLE vendor_food (
    id INT NOT NULL AUTO_INCREMENT,
    admin_id INT NOT NULL,
    food_id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id) REFERENCES food (id)
);


-- Table structure for admins

CREATE TABLE admins (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR NOT NULL,
    type INT NOT NULL,
    email_address VARCHAR(50) NOT NULL,
    phone_number INT(11) NOT NULL,
    password VARCHAR(11) NOT NULL,
    PRIMARY KEY (id)
);


-- Table structure for customers

CREATE TABLE customers (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR NOT NULL,
    phone_number INT(11) NOT NULL,
    address VARCHAR(100) NOT NULL,
    payment_method ENUM('cash','bank_transfer','card') NOT NULL,
    PRIMARY KEY (id)
);


-- Table structure for orders

CREATE TABLE orders (
    id INT NOT NULL AUTO_INCREMENT,
    vendor_id INT NOT NULL,
    customer_id INT,
    PRIMARY KEY (id)
);


