-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 23, 2022 at 04:26 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `foodbag_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `customer_order_table`
--

CREATE TABLE `customer_order_table` (
  `id` int(10) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `unit_price` float(20,3) NOT NULL,
  `quantity` int(10) NOT NULL,
  `total_price` float(20,3) NOT NULL,
  `order_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `customer_address` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customer_order_table`
--

INSERT INTO `customer_order_table` (`id`, `customer_id`, `product_name`, `unit_price`, `quantity`, `total_price`, `order_date`, `customer_address`) VALUES
(1, 1, 'mango', 2000.000, 2, 4000.000, '2022-05-23 11:19:11', 'Nkwashi estates,\r\noff Leopards road'),
(2, 2, 'tomato', 1000.000, 5, 5000.000, '2022-05-23 11:24:16', 'Nkwashi estates,\r\noff leopards hill road'),
(3, 3, 'apple', 5000.000, 5, 25000.000, '2022-05-23 11:26:51', '7th avenue,Private state,\nNigeria'),
(4, 4, 'pizza', 10000.000, 2, 20000.000, '2022-05-23 11:30:16', 'Emasdale,\r\nLusaka'),
(5, 5, 'kfc king bucket', 2000.000, 5, 10000.000, '2022-05-23 11:43:37', 'Lusaka\nwest, Lusaka, Zambia'),
(6, 6, 'KFC-king bucket', 12000.000, 3, 36000.000, '2022-05-23 11:36:10', 'Unza campus,\r\nLusaka'),
(7, 7, 'Hungry Lion X2 pack', 500.000, 2, 1000.000, '2022-05-23 11:53:24', 'riverside Campus, copperbelt'),
(8, 8, 'fruticana fruit juice', 6.500, 2, 13.000, '2022-05-23 11:55:05', 'Mukango balacks, Lusaka'),
(9, 9, 'hot dog', 120.000, 3, 360.000, '2022-05-23 12:03:27', '4th avenue, house number 2, Cawama, Lusaka'),
(10, 10, 'Burger', 1000.000, 2, 2000.000, '2022-05-23 12:17:43', '4th avenue, Nkana East, Kitwe, Zambia');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customer_order_table`
--
ALTER TABLE `customer_order_table`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customer_id` (`customer_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customer_order_table`
--
ALTER TABLE `customer_order_table`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `customer_order_table`
--
ALTER TABLE `customer_order_table`
  ADD CONSTRAINT `customer_order_table_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customer_table` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
