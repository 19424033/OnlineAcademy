CREATE TABLE `Job` (
  `Jobid` int PRIMARY KEY AUTO_INCREMENT,
  `Jobname` varchar(255),
  `Isactive` bit
);

CREATE TABLE `Users` (
  `Usersid` int PRIMARY KEY AUTO_INCREMENT,
  `Email` varchar(255),
  `Password` varchar(255),
  `Dislayname` varchar(255),
  `Point` decimal(18,2),
  `Jobid` int,
  `Created_at` timestamp,
  `Isactive` bit
);

CREATE TABLE `CategoryGroup` (
  `CategoryGroupid` int PRIMARY KEY AUTO_INCREMENT,
  `CategorGroupname` varchar(255),
  `Created_at` timestamp,
  `Isactive` bit
);

CREATE TABLE `Category` (
  `Categoryid` int PRIMARY KEY AUTO_INCREMENT,
  `Categoryname` varchar(255),
  `Note` varchar(255),
  `Notedetail` varchar(255),
  `Quanlike` int,
  `Quanres` int,
  `Picture` varchar(255),
  `Price` decimal(18,2),
  `CategoryGroupid` int,
  `Created_at` timestamp,
  `Update_at` timestamp,
  `Isactive` bit
);

CREATE TABLE `Product` (
  `Productid` int PRIMARY KEY AUTO_INCREMENT,
  `NumberNo` int,
  `Productname` varchar(255),
  `Video` varchar(255),
  `Public` bit,
  `Categoryid` int,
  `Created_at` timestamp,
  `Isactive` bit
);

CREATE TABLE `ResDetail` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `Usersid` int,
  `Categoryid` int,
  `Costeach` decimal(18,2),
  `Note` varchar(255),
  `Restime` timestamp,
  `Isactive` bit
);

CREATE TABLE `LikeDetail` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `Usersid` int,
  `Categoryid` int,
  `Liketime` timestamp,
  `Isactive` bit
);

CREATE TABLE `BuyPoint` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `Usersid` int,
  `Point` decimal(18,2),
  `Created_at` timestamp
);

CREATE TABLE `Discount` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `Categoryid` int,
  `Value` int,
  `Fromdate` timestamp,
  `Enddate` timestamp,
  `Created_at` timestamp,
  `Isactive` bit
);

ALTER TABLE `Users` ADD FOREIGN KEY (`Jobid`) REFERENCES `Job` (`Jobid`);

ALTER TABLE `Category` ADD FOREIGN KEY (`CategoryGroupid`) REFERENCES `CategoryGroup` (`CategoryGroupid`);

ALTER TABLE `Product` ADD FOREIGN KEY (`Categoryid`) REFERENCES `Category` (`Categoryid`);

ALTER TABLE `ResDetail` ADD FOREIGN KEY (`Categoryid`) REFERENCES `Category` (`Categoryid`);

ALTER TABLE `ResDetail` ADD FOREIGN KEY (`Usersid`) REFERENCES `Users` (`Usersid`);

ALTER TABLE `LikeDetail` ADD FOREIGN KEY (`Categoryid`) REFERENCES `Category` (`Categoryid`);

ALTER TABLE `LikeDetail` ADD FOREIGN KEY (`Usersid`) REFERENCES `Users` (`Usersid`);

ALTER TABLE `BuyPoint` ADD FOREIGN KEY (`Usersid`) REFERENCES `Users` (`Usersid`);

ALTER TABLE `Discount` ADD FOREIGN KEY (`Categoryid`) REFERENCES `Category` (`Categoryid`);
