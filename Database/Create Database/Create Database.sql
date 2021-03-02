
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+07:00";

DROP TABLE IF EXISTS `CategoryGroup`;
CREATE TABLE IF NOT EXISTS `CategoryGroup` (
  `CategoryGroupId` int(11) NOT NULL AUTO_INCREMENT,
  `CategoryGroupName` varchar(255) DEFAULT NULL,
  `Created_At` timestamp NULL DEFAULT NULL,
  `Image` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `IsActive` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`CategoryGroupId`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

DROP TABLE IF EXISTS `Category`;
CREATE TABLE IF NOT EXISTS `Category` (
  `CategoryId` int(11) NOT NULL AUTO_INCREMENT,
  `CategoryName` varchar(255) DEFAULT NULL,
  `Note` varchar(10000) DEFAULT NULL,
  `Remark` LONGTEXT DEFAULT NULL,
  `Rate` float(11) DEFAULT '0',
  `QuanLike` int(11) DEFAULT '0',
  `QuanRes` int(11) DEFAULT '0',
  `TeacherID` int(11) DEFAULT NULL,
  `Image` longtext,
  `Price` decimal(18,2) DEFAULT NULL,
  `CategoryGroupId` int(11) DEFAULT NULL,
  `Created_At` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `Update_At` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `IsActive` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`CategoryId`) USING BTREE,
  KEY `CategoryGroupId` (`CategoryGroupId`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

DROP TABLE IF EXISTS `Product`;
CREATE TABLE IF NOT EXISTS `Product` (
  `ProductId` int(11) NOT NULL AUTO_INCREMENT,
  `NumberNo` int(11) DEFAULT NULL,
  `ProductName` varchar(255) DEFAULT NULL,
  `Video` varchar(255) DEFAULT NULL,
  `View` int DEFAULT 0,
  `Public` bit(1) NULL DEFAULT NULL,
  `CategoryId` int(11) DEFAULT NULL,
  `Created_At` timestamp NULL DEFAULT NULL,
  `IsActive` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`ProductId`) USING BTREE,
  KEY `CategoryId` (`CategoryId`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

DROP TABLE IF EXISTS `Job`;
CREATE TABLE IF NOT EXISTS `Job` (
  `JobId` int(11) NOT NULL AUTO_INCREMENT,
  `JobName` varchar(255) DEFAULT NULL,
  `IsActive` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`Jobid`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

DROP TABLE IF EXISTS `Users`;
CREATE TABLE IF NOT EXISTS `Users` (
  `UsersId` int(11) NOT NULL AUTO_INCREMENT,
  `Email` varchar(255) DEFAULT NULL,
  `Password` varchar(255) DEFAULT NULL,
  `DislayName` varchar(255) DEFAULT NULL,
  `Image` LONGTEXT CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `TeacherNote` LONGTEXT DEFAULT NULL,
  `Point` decimal(18,2) DEFAULT NULL,
  `JobId` int(11) DEFAULT NULL,
  `Created_At` timestamp NULL DEFAULT NULL,
  `rfToken` varchar(255) DEFAULT NULL,
  `Telephone` varchar(255) DEFAULT NULL,
  `OTP` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `OTP_Confim` bit(1) DEFAULT b'0',
  `IsActive` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`UsersId`) USING BTREE,
  KEY `Jobid` (`JobId`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

DROP TABLE IF EXISTS `BuyPoint`;
CREATE TABLE IF NOT EXISTS `BuyPoint` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `UsersId` int(11) DEFAULT NULL,
  `Point` decimal(18,2) DEFAULT NULL,
  `Created_At` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE,
  KEY `UsersId` (`UsersId`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

DROP TABLE IF EXISTS `Discount`;
CREATE TABLE IF NOT EXISTS `Discount` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `CategoryId` int(11) DEFAULT NULL,
  `Value` int(11) DEFAULT NULL,
  `Fromdate` timestamp NULL DEFAULT NULL,
  `Enddate` timestamp NULL DEFAULT NULL,
  `Created_At` timestamp NULL DEFAULT NULL,
  `IsActive` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`Id`) USING BTREE,
  KEY `CategoryId` (`CategoryId`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

DROP TABLE IF EXISTS `RateDetail`;
CREATE TABLE IF NOT EXISTS `RateDetail` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `UsersId` int(11) DEFAULT NULL,
  `CategoryId` int(11) DEFAULT NULL,
  `RateValue` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE,
  KEY `CategoryId` (`CategoryId`) USING BTREE,
  KEY `UsersId` (`UsersId`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

DROP TABLE IF EXISTS `ResDetail`;
CREATE TABLE IF NOT EXISTS `ResDetail` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `UsersId` int(11) DEFAULT NULL,
  `CategoryId` int(11) DEFAULT NULL,
  `CostEach` decimal(18,2) DEFAULT NULL,
  `ResTime` timestamp NULL DEFAULT NULL,
  `IsActive` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`Id`) USING BTREE,
  KEY `CategoryId` (`UsersId`) USING BTREE,
  KEY `UsersId` (`Usersid`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

DROP TABLE IF EXISTS `CmtDetail`;
CREATE TABLE IF NOT EXISTS `CmtDetail` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `UsersId` int(11) DEFAULT NULL,
  `CategoryId` int(11) DEFAULT NULL,
  `Cmt` varchar(10000) DEFAULT NULL,
  `CmtTime` timestamp NULL DEFAULT NULL,
  `IsActive` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`Id`) USING BTREE,
  KEY `CategoryId` (`UsersId`) USING BTREE,
  KEY `UsersId` (`Usersid`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

DROP TABLE IF EXISTS `LikeDetail`;
CREATE TABLE `LikeDetail`  (
  `Id` int(0) NOT NULL AUTO_INCREMENT,
  `UsersId` int(0) NULL DEFAULT NULL,
  `CategoryId` int(0) NULL DEFAULT NULL,
  `LikeTime` timestamp(0) NULL DEFAULT NULL,
  `IsActive` tinyint(1) NULL DEFAULT 1,
  PRIMARY KEY (`Id`) USING BTREE,
  KEY `CategoryId`(`CategoryId`) USING BTREE,
  KEY `UsersId`(`UsersId`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;


