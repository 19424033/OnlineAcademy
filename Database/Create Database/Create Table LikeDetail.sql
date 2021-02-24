

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

ALTER TABLE `Category` ADD QuanLike int(11) NULL DEFAULT 0;