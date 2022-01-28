
--
-- Database: `food_bag`
--


-- --------------------------------------------------------

--
-- Table structure for table `food`
--

CREATE TABLE food (
  id INT NOT NULL AUTO_INCREMENT,
  type INT NOT NULL,
  category_one VARCHAR NOT NULL,
  category_two VARCHAR NOT NULL,
  category_three VARCHAR NOT NULL,
  category_four VARCHAR NOT NULL,
  PRIMARY KEY (id)
);


-- --------------------------------------------------------

--
-- Table structure for table `vendor_food`
--

CREATE TABLE vendor_food (
  id INT NOT NULL AUTO_INCREMENT,
  admin_id INT NOT NULL,
  food_id INT NOT NULL,
  name VARCHAR NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (id) REFERENCES food (id)
) ;



-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE admins (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR NOT NULL,
  type INT NOT NULL,
  email_address VARCHAR NOT NULL,
  phone_number INT NOT NULL,
  password VARCHAR NOT NULL,
  PRIMARY KEY (id)
);

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE customers (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR NOT NULL,
  phone_number INT NOT NULL,
  address VARCHAR NOT NULL,
  payment_method ENUM('cash','bank_transfer','card') NOT NULL,
  PRIMARY KEY (id)
)



-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE orders (
  id INT NOT NULL AUTO_INCREMENT,
  vendor_id INT NOT NULL,
  customer_id INT,
  PRIMARY KEY (id)
);






