/*
 Navicat Premium Data Transfer

 Source Server         : mysqlwbb
 Source Server Type    : MySQL
 Source Server Version : 80022
 Source Host           : localhost:3366
 Source Schema         : onlineacademy

 Target Server Type    : MySQL
 Target Server Version : 80022
 File Encoding         : 65001

 Date: 05/02/2021 20:45:03
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for buypoint
-- ----------------------------
DROP TABLE IF EXISTS `buypoint`;
CREATE TABLE `buypoint`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `Usersid` int(0) NULL DEFAULT NULL,
  `Point` decimal(18, 2) NULL DEFAULT NULL,
  `Created_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `Usersid`(`Usersid`) USING BTREE,
  CONSTRAINT `buypoint_ibfk_1` FOREIGN KEY (`Usersid`) REFERENCES `users` (`Usersid`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category`  (
  `Categoryid` int(0) NOT NULL AUTO_INCREMENT,
  `Categoryname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `Note` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `Notedetail` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `Quanlike` int(0) NULL DEFAULT NULL,
  `Quanres` int(0) NULL DEFAULT NULL,
  `Picture` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `Price` decimal(18, 2) NULL DEFAULT NULL,
  `CategoryGroupid` int(0) NULL DEFAULT NULL,
  `Created_at` timestamp(0) NULL DEFAULT NULL,
  `Update_at` timestamp(0) NULL DEFAULT NULL,
  `Isactive` bit(1) NULL DEFAULT NULL,
  PRIMARY KEY (`Categoryid`) USING BTREE,
  INDEX `CategoryGroupid`(`CategoryGroupid`) USING BTREE,
  CONSTRAINT `category_ibfk_1` FOREIGN KEY (`CategoryGroupid`) REFERENCES `categorygroup` (`CategoryGroupid`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for categorygroup
-- ----------------------------
DROP TABLE IF EXISTS `categorygroup`;
CREATE TABLE `categorygroup`  (
  `CategoryGroupid` int(0) NOT NULL AUTO_INCREMENT,
  `CategorGroupname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `Created_at` timestamp(0) NULL DEFAULT NULL,
  `Isactive` bit(1) NULL DEFAULT NULL,
  PRIMARY KEY (`CategoryGroupid`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for discount
-- ----------------------------
DROP TABLE IF EXISTS `discount`;
CREATE TABLE `discount`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `Categoryid` int(0) NULL DEFAULT NULL,
  `Value` int(0) NULL DEFAULT NULL,
  `Fromdate` timestamp(0) NULL DEFAULT NULL,
  `Enddate` timestamp(0) NULL DEFAULT NULL,
  `Created_at` timestamp(0) NULL DEFAULT NULL,
  `Isactive` bit(1) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `Categoryid`(`Categoryid`) USING BTREE,
  CONSTRAINT `discount_ibfk_1` FOREIGN KEY (`Categoryid`) REFERENCES `category` (`Categoryid`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for job
-- ----------------------------
DROP TABLE IF EXISTS `job`;
CREATE TABLE `job`  (
  `Jobid` int(0) NOT NULL AUTO_INCREMENT,
  `Jobname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `Isactive` bit(1) NULL DEFAULT NULL,
  PRIMARY KEY (`Jobid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of job
-- ----------------------------
INSERT INTO `job` VALUES (1, 'Admin', b'1');
INSERT INTO `job` VALUES (2, 'Học Viên', b'1');
INSERT INTO `job` VALUES (3, 'Giảng Viên', b'1');

-- ----------------------------
-- Table structure for likedetail
-- ----------------------------
DROP TABLE IF EXISTS `likedetail`;
CREATE TABLE `likedetail`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `Usersid` int(0) NULL DEFAULT NULL,
  `Categoryid` int(0) NULL DEFAULT NULL,
  `Liketime` timestamp(0) NULL DEFAULT NULL,
  `Isactive` bit(1) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `Categoryid`(`Categoryid`) USING BTREE,
  INDEX `Usersid`(`Usersid`) USING BTREE,
  CONSTRAINT `likedetail_ibfk_1` FOREIGN KEY (`Categoryid`) REFERENCES `category` (`Categoryid`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `likedetail_ibfk_2` FOREIGN KEY (`Usersid`) REFERENCES `users` (`Usersid`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product`  (
  `Productid` int(0) NOT NULL AUTO_INCREMENT,
  `NumberNo` int(0) NULL DEFAULT NULL,
  `Productname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `Video` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `Public` bit(1) NULL DEFAULT NULL,
  `Categoryid` int(0) NULL DEFAULT NULL,
  `Created_at` timestamp(0) NULL DEFAULT NULL,
  `Isactive` bit(1) NULL DEFAULT NULL,
  PRIMARY KEY (`Productid`) USING BTREE,
  INDEX `Categoryid`(`Categoryid`) USING BTREE,
  CONSTRAINT `product_ibfk_1` FOREIGN KEY (`Categoryid`) REFERENCES `category` (`Categoryid`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for resdetail
-- ----------------------------
DROP TABLE IF EXISTS `resdetail`;
CREATE TABLE `resdetail`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `Usersid` int(0) NULL DEFAULT NULL,
  `Categoryid` int(0) NULL DEFAULT NULL,
  `Costeach` decimal(18, 2) NULL DEFAULT NULL,
  `Note` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `Restime` timestamp(0) NULL DEFAULT NULL,
  `Isactive` bit(1) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `Categoryid`(`Categoryid`) USING BTREE,
  INDEX `Usersid`(`Usersid`) USING BTREE,
  CONSTRAINT `resdetail_ibfk_1` FOREIGN KEY (`Categoryid`) REFERENCES `category` (`Categoryid`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `resdetail_ibfk_2` FOREIGN KEY (`Usersid`) REFERENCES `users` (`Usersid`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `Usersid` int(0) NOT NULL AUTO_INCREMENT,
  `Email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `Password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `Dislayname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `Point` decimal(18, 2) NULL DEFAULT NULL,
  `Jobid` int(0) NULL DEFAULT NULL,
  `Created_at` timestamp(0) NULL DEFAULT NULL,
  `Isactive` bit(1) NULL DEFAULT NULL,
  `rfToken` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `Telephone` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `OTP` int(0) NULL DEFAULT NULL,
  `OTP_Confim` bit(1) NULL DEFAULT b'0',
  PRIMARY KEY (`Usersid`) USING BTREE,
  INDEX `Jobid`(`Jobid`) USING BTREE,
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`Jobid`) REFERENCES `job` (`Jobid`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1036 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1000, 'hmbt', '$2a$04$iKtF44brw0HVA19d9KsPh.lg3Ma4uv1jiV20Sr.r7VUmGMucaG8pa', 'hà toàn', 123.00, 2, '2021-01-13 19:39:23', b'1', 'aDrUzrcrIMUY4oZpXk0pQwmFNO12OktF', NULL, NULL, b'1');
INSERT INTO `users` VALUES (1008, 'admin', '$2a$04$iKtF44brw0HVA19d9KsPh.lg3Ma4uv1jiV20Sr.r7VUmGMucaG8pa', 'Admin', NULL, 1, NULL, NULL, '0qKr4OrSkc7bGn2XXBSMo3v0XeIPQzuq', NULL, NULL, b'1');
INSERT INTO `users` VALUES (1035, 'hmbt93@gmail.com', '$2a$04$g4wfvE1T11mSqIBfXLXc6.RpdWqPjU9cWTtcG.6Ls.FvMq7zgCtBO', 'Hà Minh Bảo Toàn', NULL, 2, '2021-02-04 09:40:54', NULL, 'PahNK2qSmf1QmiG3IrZBQzHY7cW66rh5', NULL, 611051, b'1');

SET FOREIGN_KEY_CHECKS = 1;
