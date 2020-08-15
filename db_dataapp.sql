-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 14, 2020 at 07:06 PM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.1.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_dataapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `company_id` int(11) NOT NULL,
  `fullname` varchar(50) DEFAULT NULL,
  `company` varchar(50) DEFAULT NULL,
  `com_address` varchar(50) DEFAULT NULL,
  `com_phone` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`company_id`, `fullname`, `company`, `com_address`, `com_phone`) VALUES
(1, 'Maira Lorena ', 'Lorena.Ltda', '16 clontarf road ', 9876543);

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `employee_id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `appointment_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`employee_id`, `project_id`, `name`, `appointment_date`) VALUES
(202001, 0, 'Gloria Dunfy', NULL),
(202002, 0, 'Ovi wan kenobi', NULL),
(202003, 0, 'Luke sky walker', NULL),
(202004, 0, 'Jar Jar Binks', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `invoice`
--

CREATE TABLE `invoice` (
  `n_invoice` int(150) NOT NULL,
  `item` varchar(150) DEFAULT NULL,
  `creat_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `invoice`
--

INSERT INTO `invoice` (`n_invoice`, `item`, `creat_at`) VALUES
(1, '', NULL),
(9, 'service1', '2020-08-08'),
(10, 'Array', '2020-08-08'),
(11, 'Array', '2020-08-08'),
(12, '', '2020-08-08'),
(13, 'Array', '2020-08-08'),
(14, 'service1', '2020-08-08'),
(15, 'th', '2020-08-09');

-- --------------------------------------------------------

--
-- Table structure for table `master_admin`
--

CREATE TABLE `master_admin` (
  `admin_id` int(11) NOT NULL,
  `adminame` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `status` char(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `master_admin`
--

INSERT INTO `master_admin` (`admin_id`, `adminame`, `password`, `status`) VALUES
(1, 'lorena', '7b7a53e239400a13bd6be6c91c4f6c4e', 'y');

-- --------------------------------------------------------

--
-- Table structure for table `master_customer`
--

CREATE TABLE `master_customer` (
  `customer_id` int(11) NOT NULL,
  `name_customer` varchar(50) DEFAULT NULL,
  `desc_customer` text DEFAULT NULL,
  `created_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `master_customer`
--

INSERT INTO `master_customer` (`customer_id`, `name_customer`, `desc_customer`, `created_at`) VALUES
(1, 'Chandra Gustiya', 'Yea simple easy', '2019-05-15'),
(2, 'Hi Digital Update IONIC 4', 'Work it yes', '2019-05-15'),
(3, 'GOOD IONIC', 'Channel recommened', '2019-05-15'),
(17, 'IONIC 4 CRUD PHP MYSQL', 'Simple Description', '2019-05-18'),
(18, 'IONIC 4 LOGIN PHP MYSQL', 'Simple Description', '2019-05-18'),
(19, 'IONIC SIMPLE', 'Ionic Simple Description', '2019-05-18'),
(20, 'HAPPY CODING', 'IOnic Happy Simple Description', '2019-05-19'),
(21, 'IONIC EASY', 'Easy Simple Description', '2019-05-19'),
(22, 'IONIC HAPPY', 'Ionic Simple', '2019-05-19'),
(23, 'IONIC', 'Simple Description', '2019-05-19'),
(24, 'IONIC FRAMEWORK XXXXX', 'Simple Description Framework', '2019-05-19');

-- --------------------------------------------------------

--
-- Table structure for table `master_user`
--

CREATE TABLE `master_user` (
  `user_id` int(11) NOT NULL,
  `fullname` varchar(150) NOT NULL,
  `u_email` varchar(150) NOT NULL,
  `u_companyname` varchar(150) NOT NULL,
  `u_address` varchar(150) NOT NULL,
  `u_phone` int(11) NOT NULL,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `status` char(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `master_user`
--

INSERT INTO `master_user` (`user_id`, `fullname`, `u_email`, `u_companyname`, `u_address`, `u_phone`, `username`, `password`, `status`) VALUES
(40, 'maira lorena', 'mlwalterog@gmail.com', 'koko', '', 830347557, 'lorena', '7b7a53e239400a13bd6be6c91c4f6c4e', 'y'),
(42, 'Celeste', 'mlwalterog', 'mlwalterog@gmail.com', '0830347557', 830347557, 'maira', '7b7a53e239400a13bd6be6c91c4f6c4e', 'y'),
(43, 'maira', 'mlwalterog@gmail.com', 'mlwalterog@gmail.com', '', 830347557, 'maira', '7b7a53e239400a13bd6be6c91c4f6c4e', 'y'),
(44, 'Maira Alejandra', 'mlwalterog@gmail.com', 'mlwalterog@gmail.com', 'monck place', 830347577, 'MairaAlejandra', '7b7a53e239400a13bd6be6c91c4f6c4e', 'y'),
(46, 'maira Alejandra', 'mlwalterog@gmail.com', 'mlwalterog@gmail.com', '0830347557', 830347557, 'mairaAlejandra', '7b7a53e239400a13bd6be6c91c4f6c4e', 'y'),
(47, 'Maira', 'mlwalterog@gmail.com', 'lalala', '0830347557', 830347557, 'mairaAlejandra', '7b7a53e239400a13bd6be6c91c4f6c4e', 'y'),
(48, 'Marlo', 'mlwalterog@gmail.com', 'mlwalterog@gmail.com', '0830347557', 830347557, 'marlo', '7b7a53e239400a13bd6be6c91c4f6c4e', 'y'),
(49, 'Marciano molina', 'marcianomolina@hotmail.com', 'marcianos ltda', '', 2147483647, 'marciano', '7b7a53e239400a13bd6be6c91c4f6c4e', 'y'),
(50, 'Filipe', 'filipe@gmail.com', 'Filipe ltda', '', 2147483647, 'filipe', '7b7a53e239400a13bd6be6c91c4f6c4e', 'y'),
(51, 'Belquis', 'belquis@gmail.com', 'Belquis ltda', '', 2147483647, 'belquis', '7b7a53e239400a13bd6be6c91c4f6c4e', 'y'),
(52, 'Angel Miguel', 'angel@gmail.com', 'Angel ltda', '5 Clotarf Road ', 8367542, 'Angel', '7b7a53e239400a13bd6be6c91c4f6c4e', 'y'),
(53, 'Valery', 'valery@gmail.com', 'valery ltda', '16 clontarf road ', 9876545, 'valery', '7b7a53e239400a13bd6be6c91c4f6c4e', 'y'),
(54, 'Avatar', 'avatar@gmail.com ', 'avatar ltda', '', 65243167, 'avatar', '7b7a53e239400a13bd6be6c91c4f6c4e', 'y'),
(55, 'Lillan Paola', 'paola@gmail.com', 'paola ltda', '', 57, 'Paola', '7b7a53e239400a13bd6be6c91c4f6c4e', 'y'),
(56, 'Jim Troll ', 'jim@gmail.com', 'Jim Troll', '', 98765432, 'Jim', '7b7a53e239400a13bd6be6c91c4f6c4e', 'y'),
(58, 'Steve Sitrol ', 'Steve@hotmail.com', 'Steven lta', '', 87654321, 'Steve', '7b7a53e239400a13bd6be6c91c4f6c4e', 'y'),
(59, 'Amilcar', 'a@gmail.com', 'star war ltda', '', 45345678, 'Amilcar', '7b7a53e239400a13bd6be6c91c4f6c4e', 'y'),
(60, 'lillan', 'li@hotmail.com', 'lilli ltda', '', 6543265, 'lillan', '7b7a53e239400a13bd6be6c91c4f6c4e', 'y'),
(61, 'Patricia Ling', 'patricia@gmail.com', 'patricia ltda', '', 2147483647, 'Patricia', '7b7a53e239400a13bd6be6c91c4f6c4e', 'y'),
(62, 'miguel angel ', 'miguel@gmaill.com', 'miguel ltda', '', 987654321, 'miguelangel', '7b7a53e239400a13bd6be6c91c4f6c4e', 'y'),
(63, 'Angelina Gonzalez', 'angelina', 'angelina ltda', '', 2147483647, 'angelina', '7b7a53e239400a13bd6be6c91c4f6c4e', 'y');

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `project_id` int(11) NOT NULL,
  `client_id` int(11) NOT NULL,
  `client_fullname` varchar(50) DEFAULT NULL,
  `booking_date` date NOT NULL,
  `booking_hour` varchar(11) DEFAULT NULL,
  `booking_option` varchar(50) NOT NULL,
  `comment` varchar(1500) NOT NULL,
  `pro_status` varchar(50) NOT NULL,
  `employee` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`project_id`, `client_id`, `client_fullname`, `booking_date`, `booking_hour`, `booking_option`, `comment`, `pro_status`, `employee`) VALUES
(16, 40, 'maira lorena', '2020-08-24', '10:00:00 ', 'app', '24 of august 10 am testing, Creation of project plan and timing of the project. ', 'In process', 'Jar Jar Binks'),
(18, 42, 'Celeste', '2020-08-24', '09:00:00 ', 'other', '24 of august 9:00 testing, now luke is working in this project ', 'In process', 'Luke sky walker'),
(20, 44, 'Maira Alejandra', '2020-08-24', '12:00:00 ', 'app', '24 of August 12:00 testing ', 'new', NULL),
(22, 50, 'Filipe', '2020-08-25', '11:00:00 ', 'other', '25 of August 11 am testing ', 'In process', 'Luke sky walker'),
(23, 51, 'Belquis', '2020-08-24', '11:00:00 ', 'app', '24 of august 11 am testing ', 'New', 'Array'),
(24, 52, 'Angel', '2020-08-26', '11:00:00 ', 'app', '26 of August 11 am testing ', 'New', 'Array'),
(25, 53, 'Valery', '2020-08-26', '12:00:00 ', 'website', '26 of August 12 am testing ', '', NULL),
(31, 44, 'Maira Alejandra', '2020-08-27', '11:00:00 ', 'networking', '28 of August 11 am testing ', '', NULL),
(32, 48, 'Marlo', '2020-08-28', '09:00:00 ', 'app', '29 of August 9 am testing ', 'In process', 'Ovi wan kenobi'),
(73, 55, 'Lillan Paola', '2020-08-21', '11:00:00 ', 'website', '21', '', NULL),
(77, 59, 'Amilcar', '2020-08-12', '10:00:00 ', 'app', '12 August 10 am ', '', NULL),
(78, 61, 'Patricia Ling', '2020-08-20', '10:00:00 ', 'app', '20 of August 10 am ', '', NULL),
(79, 62, 'miguel angel ', '2020-08-13', '11:00:00 ', 'networking', '13 of Agust 11 a, ', '', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `pro_employee`
--

CREATE TABLE `pro_employee` (
  `employee_id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL,
  `employee_name` varchar(50) NOT NULL,
  `appointment_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pro_employee`
--

INSERT INTO `pro_employee` (`employee_id`, `project_id`, `employee_name`, `appointment_date`) VALUES
(0, 81, '', '2020-08-23'),
(0, 83, 'Ovi wan kenobi', '2020-08-28'),
(0, 84, 'Jar Jar Binks', '2020-08-28'),
(0, 85, '', '2020-08-14'),
(202002, 32, 'Ovi wan kenobi', '2020-08-28'),
(202002, 83, 'Ovi wan kenobi', '2020-08-28'),
(202003, 18, 'Luke sky walker', '2020-08-24'),
(202003, 22, 'Luke sky walker', '2020-08-25'),
(202003, 73, 'Luke sky walker', '2020-08-21'),
(202003, 84, 'Luke sky walker', '2020-08-28'),
(202004, 16, 'Jar Jar Binks', '2020-08-24'),
(202004, 84, 'Jar Jar Binks', '2020-08-28');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`company_id`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`employee_id`,`project_id`);

--
-- Indexes for table `invoice`
--
ALTER TABLE `invoice`
  ADD PRIMARY KEY (`n_invoice`);

--
-- Indexes for table `master_admin`
--
ALTER TABLE `master_admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `master_customer`
--
ALTER TABLE `master_customer`
  ADD PRIMARY KEY (`customer_id`);

--
-- Indexes for table `master_user`
--
ALTER TABLE `master_user`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`project_id`,`client_id`);

--
-- Indexes for table `pro_employee`
--
ALTER TABLE `pro_employee`
  ADD PRIMARY KEY (`employee_id`,`project_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `company_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `invoice`
--
ALTER TABLE `invoice`
  MODIFY `n_invoice` int(150) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `master_admin`
--
ALTER TABLE `master_admin`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `master_customer`
--
ALTER TABLE `master_customer`
  MODIFY `customer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `master_user`
--
ALTER TABLE `master_user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `project_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=87;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
