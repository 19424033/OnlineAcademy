-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1:3306
-- Thời gian đã tạo: Th3 19, 2021 lúc 11:59 AM
-- Phiên bản máy phục vụ: 5.7.31
-- Phiên bản PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `onlineacademy`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `buypoint`
--

DROP TABLE IF EXISTS `buypoint`;
CREATE TABLE IF NOT EXISTS `buypoint` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `UsersId` int(11) DEFAULT NULL,
  `Point` decimal(18,2) DEFAULT NULL,
  `Created_At` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE,
  KEY `UsersId` (`UsersId`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `category`
--

DROP TABLE IF EXISTS `category`;
CREATE TABLE IF NOT EXISTS `category` (
  `CategoryId` int(11) NOT NULL AUTO_INCREMENT,
  `CategoryName` varchar(255) DEFAULT NULL,
  `Note` varchar(10000) DEFAULT NULL,
  `Remark` varchar(10000) DEFAULT NULL,
  `Rate` float DEFAULT '0',
  `QuanRes` int(11) DEFAULT '0',
  `QuanLike` int(11) DEFAULT '0',
  `VideoQuantity` int(11) DEFAULT NULL,
  `Completed` tinyint(4) DEFAULT NULL,
  `TeacherID` int(11) DEFAULT NULL,
  `Image` longtext,
  `Price` decimal(18,2) DEFAULT NULL,
  `CategoryGroupId` int(11) DEFAULT NULL,
  `Created_At` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `Update_At` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `IsActive` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`CategoryId`) USING BTREE,
  KEY `CategoryGroupId` (`CategoryGroupId`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- Đang đổ dữ liệu cho bảng `category`
--

INSERT INTO `category` (`CategoryId`, `CategoryName`, `Note`, `Remark`, `Rate`, `QuanRes`, `QuanLike`, `VideoQuantity`, `Completed`, `TeacherID`, `Image`, `Price`, `CategoryGroupId`, `Created_At`, `Update_At`, `IsActive`) VALUES
(1, 'Ngôn ngữ lập trình Pascal cơ bản', 'Ngôn ngữ lập trình Pascal là một ngôn ngữ vô cùng phổ biến hiện nay. Nó được đưa vào giảng dạy trong chương trình học tin học cấp 2, cấp 3 và môn tin học đại cương của nhiều trường đại học lớn trong nước. Đây là một ngôn ngữ đơn giản, dễ dàng sử dụng giúp bạn tạo ra những chương trình phục vụ cho mục đích công việc và học tập. </br>\r\nKhóa học sẽ giúp bạn nắm bắt các thành phần cấu trúc và các câu lệnh giúp bạn dễ dàng lập trình các chương trình Pascal.', '<Li>Nắm vững được các thành phần trong ngôn ngữ lập trình Pascal.</Li>\r\n<Li>Hiểu sâu về các kiểu dữ liệu và các câu lệnh để áp dụng hợp lý.</Li>', 5, 1, 0, 5, 1, 2, 'https://res.cloudinary.com/dzyfkhpce/image/upload/v1616128855/OnlineAcademy/Ng%C3%B4n%20ng%E1%BB%AF%20l%E1%BA%ADp%20tr%C3%ACnh/passcal_oihkqp.jpg\r\n', '0.00', 1, '2021-01-31 17:00:00', '2021-01-31 17:00:00', 1),
(2, 'Lập trình C# trong 5 tuần - Cơ bản', 'Khóa học lập trình C# trong 5 tuần cung cấp những công cụ, framework mới nhất về ngôn ngữ lập trình C# (từ định nghĩa đến kiểu dữ liệu, biến, câu lệnh, mảng, chuỗi ... cấu trúc điều khiển trong C#, phương thức, lớp....). Học viên có cơ hội thực hành và sử dụng thuần thục các control khi thiết kế giao diện; xử lý chuỗi, mảng, collections và có khả năng gỡ lỗi và kiểm soát biệt lệ.', '<li>Có được kiến thức toàn diện về ngôn ngữ lập trình C#.</li>\r\n<li>Có khả năng phát triển phần mềm ứng dụng bằng C#.</li>\r\n<li>Là cơ sở để lập trình di động đa nền tảng với Xamarin.</li>\r\n<li>Là nền tảng để tiếp tục học tương tác cơ sở dữ liệu với ADO.NET, LINQ, WPF.</li>', 0, 0, 0, 9, 1, 2, 'https://res.cloudinary.com/dzyfkhpce/image/upload/v1616128855/OnlineAcademy/Ng%C3%B4n%20ng%E1%BB%AF%20l%E1%BA%ADp%20tr%C3%ACnh/C-696x392_d4up6n.jpg', '599000.00', 1, '2021-01-31 17:00:00', '2021-01-31 17:00:00', 1),
(3, 'Thiết kế và sửa chữa các loại nguồn xung', 'Khóa học trang bị cho học viên kiến thức chuyên sâu và phương pháp kiểm tra sửa chữa các pan bệnh trên Bo mạch của các loại đều hòa Mono, giúp cho học viên học và nâng cao trình độ, nâng cao tay nghề trong lĩnh vực điện tử.', '<li>Sau khi trải qua khóa học, học viên có thể tự tin sửa chữa các bệnh từ đơn giản đến phức tạp trên các loại nguồn xung.</li>', 0, 0, 0, 3, 1, 6, 'https://res.cloudinary.com/dzyfkhpce/image/upload/v1616129245/OnlineAcademy/V%E1%BA%ADn%20h%C3%A0nh%20h%E1%BB%87%20th%E1%BB%91ng/nguon-gxung_ey7nkx.jpg', '499000.00', 2, '2021-02-01 17:00:00', '2021-02-01 17:00:00', 1),
(4, 'Sửa chữa bo mạch điều hòa Daikin mono', 'Khóa học trang bị cho học viên về nguyên lý hoạt động cũng như phân tích các pan bệnh thường gặp trên các máy điều hòa Daikin Mono, giúp cho học viên có thể chủ động học nghề ở mọi lúc mọi nơi, phát triển nghề Điện tử', '<li>Sau khi trải qua khóa học, học viên có thể tự tin sửa chữa các bệnh từ đơn giản đến phức tạp trên các loại điều hòa không khí hãng Daikin Mono</li>', 0, 0, 0, 5, 1, 6, 'https://res.cloudinary.com/dzyfkhpce/image/upload/v1616129245/OnlineAcademy/V%E1%BA%ADn%20h%C3%A0nh%20h%E1%BB%87%20th%E1%BB%91ng/c30c29819325864bf719afd88965ad76_a0xgjo.jpg', '599000.00', 2, '2021-02-02 17:00:00', '2021-02-02 17:00:00', 1),
(5, 'Lập trình C\\C++ (POP vs OOP)', 'Khóa học là một sự tổng hợp một chuỗi các kiến thức về lập trình căn bản thông qua 2 ngôn ngữ C và C++ tách biệt nhau. Qua khóa học, học viên có thể nhận thấy ưu, nhược điểm của hai ngôn ngữ cha con này. Từ đó, hình thành khái niệm về cấu trúc và đối tượng; nắm được một số thuật toán và hình thành tư duy lập trình. Các bài học kèm theo một chuỗi các bài tập có liên quan nên không khuyến khích học viên nhảy bài học!\r\n\r\n', '<li>Nhắm rõ các kiến thức lập trình C/C++ từ số 0</li>\r\n<li>Có khả năng làm một số dự án quản lý đơn giản</li>\r\n<li>Hình thành khái niệm về POP và OOP</li>\r\n<li>Làm quen với cách thiết kế giải thuật, từ đó hình thành tư duy lập trình<li>', 0, 0, 1, 17, 0, 2, 'https://res.cloudinary.com/dzyfkhpce/image/upload/v1616128855/OnlineAcademy/Ng%C3%B4n%20ng%E1%BB%AF%20l%E1%BA%ADp%20tr%C3%ACnh/aptechbmt_18-12_yvzgne.jpg', '349000.00', 1, '2021-03-08 17:00:00', '2021-03-08 17:00:00', 1),
(6, 'Internet of Things starter', 'Internet of Things (IoT) là một xu hướng lớn của thế giới, tác động đến mọi mặt của xã hội. Tuy nhiên, việc tiếp cận với Internet of Things cho người mới bắt đầu gặp nhiều khó khăn, do IoT là sự tham gia của nhiều lĩnh vực, cả phần cứng và phần mềm.Khóa học IoT Starter được thiết kế để người học có thể tiếp cận với IoT một cách nhanh, đơn giản nhất. Được thiết kế theo phương pháp project based, tức là học qua thực hành, giúp người học dễ dàng hiểu và ghi nhớ kiến thức được truyền tải trong khóa.Sau khi hoàn thành khóa học, học viên hiểu được các thành phần của một hệ thống IoT, có kỹ năng để tự mình xây dựng một hệ thống IoT đơn giản bao gồm cả phần cứng và phần mềm, có khả năng sử dụng các tài nguyên mở (opensource) trong IoT.Học viên tham gia khóa học cần chủ động làm các bài thực hành được nêu trong khóa học để thực sự hiểu. Ngoài ra, việc làm các bài thực hành sẽ giúp học viên có những \"\"Aha moment\"\" những khoảnh khắc thú vị với những sản phẩm mình tạo ra.', '<li>Sau khi hoàn thành khóa học, học viên sẽ:</li>\r\n<li>Có kỹ năng cơ bản để làm sản phẩm IoT: điện tử cơ bản, cloud, mobile app.</li>\r\n<li>Hiểu được kiến trúc và các thành phần của một hệ thống IoT.</li>\r\n<li>Biết dùng các nền tảng có sẵn trên cloud và mobile.</li>\r\n<li>Xây dựng hoàn thiện sản phẩm IoT nhanh và đơn giản.</li>\r\n<li>Cụ thể, trong khóa học, học viên sẽ được học:\r\nLàm việc với ngôn ngữ Arduino trên KIT ESP8266 (có kết nối Wifi), lập trình tương tác với môi trường thông qua các loại sensor thông dụng.</li>\r\n<li>Hiểu được các giao thức truyền tin trong IoT (MQTT, HTTP,...), cách một sản phẩm IoT hoạt động như thế nào, các thành phần của hệ thống IoT.</li>\r\n<li>Cách kết nối dữ liệu lên cloud (website, mobile), hiển thị dữ liệu và điều khiển các thiết bị thông qua cloud (website, mobile).</li>', 0, 0, 0, 5, 1, 4, 'https://res.cloudinary.com/dzyfkhpce/image/upload/v1616129887/OnlineAcademy/M%E1%BA%A1ng%20m%C3%A1y%20t%C3%ADnh/internet_rkbbdn.jpg', '699000.00', 5, '2021-02-18 17:00:00', '2021-02-18 17:00:00', 1),
(7, 'Chuyên gia mạng quốc tế CCNA Routing and Switching', '<li>Khóa học được tổ chức theo giáo trình đào tạo chuyên gia mạng quốc tế CCNA Routing and Switching của Học viện mạng Cisco.</li>\r\n<li>Phương thức học gồm 2 phần: học lý thuyết kèm thực hành, thực hành trên thiết bị Router, Switch thật hoặc giả lập bằng một trong các phần mềm miễn phí Cisco Packet Tracer, Unetlab, GNS3.</li>\r\n<li>Khóa học CCNA Routing and Switching Online cho phép người học linh động về thời gian, phù hợp đối với các chuyên gia triển khai hạ tầng mạng phải đi công tác thường xuyên, bộ video này cũng giúp cho những người đã từng học khóa CCNA Routing and Switching ở các trung tâm đào tạo Network có thể chủ động ôn tập lại kiến thức đã học một cách nhanh chóng.</li.\r\n<li>Khóa học CCNA Routing and Switching là nền tảng để theo học các khóa nâng cao khác như chứng chỉ mạng quốc tế CCNP Routing and Switching, chứng chỉ bảo mật CCNA Security, chứng chỉ VoIP và Video CCNA Collaboration, chứng chỉ CCNA Data Center, và nhiều chứng chỉ khác của Học viện Cisco. Kiến thức của khóa học cũng hỗ trợ đắc lực cho những người đang theo học các chứng chỉ mạng của Microsoft như MCSA, MCSE, chứng chỉ quản trị hệ điều hành Linux LPI1 và LPI2.</li>\r\n<li>Nội dung khóa học tập trung phân tích cơ chế trao đổi dữ liệu giữa các thiết bị mạng (máy tính, thiết bị chuyển mạch Switch, thiết bị định tuyến Router, tường lửa Firewall), cơ chế hoạt động của các giao thức mạng (Ethernet, CDP, EtherChannel), các kỹ thuật sử dụng trên hệ thống mạng LAN nội bộ trong doanh nghiệp, phòng net, hộ gia đình và các kỹ thuật sử dụng trên hệ thống mạng diện rộng WAN mà nhiều doanh nghiệp, tổ chức hiện đang sử dụng. Bên cạnh đó, khóa học còn trang bị cho người học kỹ năng cấu hình các dòng sản phẩm Cisco Switch, Router, Firewall, Access Point.</li>', '<li>Bám sát giáo trình đào tạo Chuyên gia mạng quốc tế của học viện Cisco.</li>\r\n<li>Hiểu được tổng quan về mạng máy tính, mạng không dây từ cơ bản đến nâng cao.</li>\r\n<li>Hiểu cơ chế trao đổi dữ liệu giữa các thiết bị mạng.</li>\r\n<li>Cơ chế hoạt động của các giao thức mạng.</li>\r\n<li>Phương thức hoạt động các kỹ thuật, công nghệ sử dụng trên mạng LAN, WAN.</li>\r\n<li>Phân tích cơ chế hoạt động của các phương thức tấn công mạng và giải pháp phòng chống.<li.', 0, 0, 0, 25, 0, 4, 'https://res.cloudinary.com/dzyfkhpce/image/upload/v1616129887/OnlineAcademy/M%E1%BA%A1ng%20m%C3%A1y%20t%C3%ADnh/CCNA_xpvzsm.jpg', '599000.00', 5, '2021-02-02 17:00:00', '2021-02-02 17:00:00', 1),
(8, 'Ứng dụng về an ninh mạng', 'Khái niệm và kiến thức về quản trị an ninh mạng.\r\nBài học mang lại cái nhìn tổng quan nhất về an ninh mạng.', '<li>Học viên hiểu được những vấn đề về an ninh mạng và bảo vệ an ninh mạng</li>', 0, 0, 0, 1, 1, 5, 'https://res.cloudinary.com/dzyfkhpce/image/upload/v1616129852/OnlineAcademy/An%20ninh%20m%E1%BA%A1ng/anninhmang_iszmhd.jpg', '0.00', 4, '2021-02-21 17:00:00', '2021-02-21 17:00:00', 1),
(9, 'Khám phá thế giới hacker', '<li>Vấn đề của học viên: Luôn luôn mong muốn tìm hiểu về thế giới của những Hacker? Họ là ai? Tại sao họ lại có thể làm được như vậy?>/li>\r\n<li>Nội dung chính của khóa học bao gồm:</li>\r\n+ Hacker là ai? họ tốt hay xấu.</br>\r\n+ Cách suy nghĩ của Hacker.</br>\r\n+ Những kỹ thuật, những công cụ mà Hacker thường sử dụng.</br>\r\n+ Tìm hiểu chi tiết về các bước hành động của Hacker.</br>\r\n+ Các kỹ thuật thu thập thông tin của Hacker về website mục tiêu.</br>\r\n+ Tại sao hacker có thể ẩn mình trên mạng.</br>\r\n+ Thế giới ngầm trên mạng deep web là gì?</br>\r\n+ Đào tiền Bitcoin và cách thanh toán.</br>\r\n+ Bảo vệ ví Bitcoin trước Hacker ra sao?</br>\r\n+ Truy cập vào mạng ẩn danh Tor.</br>\r\n+ Khám phá những thứ bên trong thế giới ngầm deep web.</br>\r\n+ Sử dụng hệ điều hành bí mật.</br>\r\n+ Chat và gửi email bí mật trên mạng.</br>\r\n+ Kỹ thuật chống lại sự theo dõi trên mạng.</br>\r\n<li>Lợi ích khi mua khóa học: Thỏa mãn sự tò mò về thế giới Hacker; có thể dẫn đến yêu thích nghề làm an toàn thông tin (Hacker mũ trắng) hiện đang được Nhà nước khuyến khích tuyển dụng và đào tạo; có ý thức và kỹ năng bảo vệ thông tin cá nhân, thông tin của tổ chức... trên mạng để tránh bị kẻ xấu lợi dụng.</li>\r\n<li>Phương thức giảng dạy: Học lý thuyết và hướng dẫn thực hành minh họa song hành, trong đó lý thuyết 40%, thực hành 60%.</li>\r\n<li>Sự đặc biệt của khóa học: Chủ đề của khóa học ở trình độ cao của lĩnh vực công nghệ thông tin, tuy nhiên nội dung đã được thiết kế và chọn lọc để người học có trình độ cơ bản về công nghệ thông tin vẫn học tốt.</li>', '<li>Kiến thức học được: Hacker là ai; họ tốt hay xấu; cách suy nghĩ của Hacker; những kỹ thuật, những công cụ mà hacker thường sử dụng; tại sao hacker có thể ẩn mình trên mạng khiến rất khó để truy tìm. Thế giới ngầm trên mạng deep web là gì; thế giới này tốt hay xấu; có những thứ gì bên trong đó; việc mua bán trao đổi trong deep web bằng Bitcoin như thế nào? Làm sao để có Bitcoin, thanh toán như thế nào?</li>\r\n<li>Áp dụng công việc cá nhân: Có kỹ năng bảo vệ bí mật các thông tin cá nhân, thông tin của tổ chức... trên mạng để tránh bị kẻ xấu lợi dụng.</li>\r\n<li>Lợi ích về lâu dài: Có thể dẫn đến yêu thích nghề làm an toàn thông tin (Hacker mũ trắng) hiện đang được Nhà nước khuyến khích tuyển dụng và đào tạo; luôn có ý thức bảo vệ thông tin cá nhân, thông tin của tổ chức... trên mạng để tránh bị kẻ xấu lợi dụng.</li>', 0, 0, 0, 6, 1, 5, 'https://res.cloudinary.com/dzyfkhpce/image/upload/v1616129852/OnlineAcademy/An%20ninh%20m%E1%BA%A1ng/kham-pha-the-gioi-hacker_ltqayw.png', '699000.00', 4, '2021-01-29 17:00:00', '2021-01-29 17:00:00', 1),
(10, 'Hacker mũ trắng và bảo mật thông tin', 'Khóa học này sẽ cung cấp những kiến thức mang tính thực hành chuyên sâu để bạn có thể bảo vệ hệ thống mạng của tổ chức mình tốt hơn nữa.', '<li>Tìm hiểu kỹ năng hack website, sever, email, sms, facebook... biết cách tấn công và phòng thủ hack website, server...</li>\r\n<li>Xác định được nguyên nhân, những cách thức của kẻ tấn công xâm nhập dữ liệu hệ thống, mối nguy hiểm thường trực về an ninh máy tính của tổ chức doanh nghiệp.</li>\r\n<li>Khai thác lỗ hổng bảo mật cho hệ thống mạng doanh nghiệp và gia cố bảo mật.</li>', 0, 0, 0, 10, 1, 5, 'https://res.cloudinary.com/dzyfkhpce/image/upload/v1616129852/OnlineAcademy/An%20ninh%20m%E1%BA%A1ng/hacker_mu_trang_rbdcpc.jpg', '999000.00', 4, '2021-03-10 17:00:00', '2021-03-10 17:00:00', 1),
(11, 'Học về cơ sở dữ liệu với SQL', 'Ý nghĩa của phần học dữ liệu giúp học viên có kiến thức nền tảng về thiết kế dữ liệu quan hệ, một phần không thể thiếu trong lập trình ứng dụng và lập trình backend', '<li>Sau khi học xong bạn có thể thiết kế được cơ sở dữ liệu cho các website thông dụng như website tin tức và website bán hàng.</li>\r\n<li>Phân tích dữ liệu và thiết lập quan hệ dữ liệu cho một ứng dụng</li>\r\n<li>Đọc và hiểu được các bảng dữ liệu của một website.</li>', 0, 0, 0, 9, 1, 3, 'https://res.cloudinary.com/dzyfkhpce/image/upload/v1616129760/OnlineAcademy/Qu%E1%BA%A3n%20tr%E1%BB%8B%20c%C6%A1%20s%E1%BB%9F%20d%E1%BB%AF%20li%E1%BB%87u/sql_yotouo.png', '699000.00', 3, '2021-02-21 17:00:00', '2021-02-21 17:00:00', 1),
(12, 'Docker cơ bản', 'Nội dung khóa học: các thao tác cơ bản với Docker và áp dụng Docker vào các yêu cầu môi trường cụ thểLộ trình khóa học: hướng dẫn cài đặt môi trường, chạy ứng dụng đầu tiên trên nền Docker, cơ chế, cách quản lý và tạo lập Docker image...Học viên sẽ được trang bị nhiều kinh nghiệm thực tiễn do phương pháp giảng dạy tập trung chủ yếu vào việc thực hành qua các bài tập và ví dụ.Nội dung kiến thức dựa trên việc đúc kết từ nhiều nguồn tài liệu giảng dạy khác nhau trên thế giới. Bài tập thực hành được hướng dẫn chi tiết để học viên có thể dễ dàng hiểu, làm theo và vận dụng.Sau khi kết thúc khóa học, học viên sẽ có thể:</br>\r\n<li>Hiểu được các thành phần cấu thành nền tảng Docker</li>\r\n<li>Hiểu được các khái niệm cốt lõi: container và image</li>\r\n<li>Chạy và quản lý Docker container sử dụng image có sẵn</li>\r\n<li>Tự tạo image từ container</li>\r\n<li>Tự tạo image từ Dockerfile</li>\r\n<li>Upload và download image từ DockerHub</li>\r\n<li>Thiết lập cấu hình mạng và chạy các container cùng mạng</li>\r\n<li>Hiểu khái niệm Docker volume</li>\r\n<li>Cấu hình và mount volume trên các containerTừ đó, học viên có thể áp dụng Docker vào các dự án cá nhân hoặc công ty, giúp tăng hiệu suất phát triển phần mềm và giảm thiểu thời gian cấu hình, cài đặt các thư viện bổ trợ.</li>\r\nCòn chờ gì nữa, hãy đăng kí để học Docker ngay thôi nào!', '<li>Hiểu được các thành phần cấu thành nền tảng Docker</li>\r\n<li>Hiểu được các khái niệm cốt lõi: container và image</li>\r\n<li>Chạy và quản lý Docker container sử dụng image có sẵn</li>\r\n<li>Tự tạo image từ Dockerfile</li>\r\n<li>Upload và download image từ DockerHub</li>\r\n<li>Thiết lập cấu hình mạng và chạy các container cùng mạng</li>\r\n<li>Hiểu khái niệm Docker volume</li>\r\n<li>Cấu hình và mount volume trên các container</li>\r\n<li>Từ đó, học viên có thể áp dụng Docker vào các dự án cá nhân hoặc công ty, giúp tăng hiệu suất phát triển phần mềm và giảm thiểu thời gian cấu hình, cài đặt các thư viện bổ trợ</li>', 0, 0, 0, 7, 1, 3, 'https://res.cloudinary.com/dzyfkhpce/image/upload/v1616129759/OnlineAcademy/Qu%E1%BA%A3n%20tr%E1%BB%8B%20c%C6%A1%20s%E1%BB%9F%20d%E1%BB%AF%20li%E1%BB%87u/docker-co-ban_uccjqk.jpg', '349000.00', 3, '2021-02-02 17:00:00', '2021-02-02 17:00:00', 1),
(13, 'Cấu trúc dữ liệu và giải thuật', 'Khoá học cung cấp các kiến thức cơ bản về cấu trúc dữ liệu và giải thuật, chi tiết về các cấu trúc dữ liệu cụ thể (danh sách, ngăn xếp, hàng đợi, cây) và các giải thuật quan trọng là tìm kiếm và sắp xếp. Trong mỗi phần có trình bày về phương pháp cài đặt và ứng dụng của cấu trúc dữ liệu và giải thuật trong thực tế.', '<li>Nắm được những kiến thức cơ bản nhất về cấu trúc dữ liệu và giải thuật.</li>\r\n<li>Sử dụng thành thạo các cấu trúc dữ liệu (danh sách, ngăn xếp, hàng đợi, cây) để mô tả đúng các kiểu dữ liệu trừu tượng một cách chính xác.</li>\r\n<li>Mô tả ngôn ngữ diễn đạt giải thuật đúng và vận dụng nó để diễn đạt các thuật toán một cách chính xác.</li>', 0, 0, 0, 7, 1, 3, 'https://res.cloudinary.com/dzyfkhpce/image/upload/v1616129761/OnlineAcademy/Qu%E1%BA%A3n%20tr%E1%BB%8B%20c%C6%A1%20s%E1%BB%9F%20d%E1%BB%AF%20li%E1%BB%87u/cau_truc_du_lieu_hsbwc0.png', '549000.00', 3, '2021-01-29 17:00:00', '2021-01-29 17:00:00', 1),
(14, 'Quản trị hệ thống mạng Windows Server MCSA', '<li>Học xong có thể đi triển khai hệ thống máy chủ quản lý mạng, có thể quản trị một hệ thống mạng cho khoảng 100 nhân viên.</li.>\r\nNội dung chính của khóa học:</br>\r\n<li>Những thành phần của hệ thống mạng và máy chủ.</li>\r\n<li>Kiến thức cốt lõi về quản trị máy chủ Active Directory, Workgroup và Domain, Site, Forest.</li>\r\n<li>Cách xây dựng một hệ thống mạng cho doanh nghiệp theo mô hình Domain.</li>\r\n<li>Cách xây dựng thành phần quản lý mạng: Group Policy, quản lý tài nguyên, quản lý các dịch vụ mạng.</li>', '<li>Học viên biết cách cài đặt phần mềm ảo hóa, cài máy chủ Windows Sever, cài máy trạm.</li>\r\n<li>Học viên biết cách thăng cấp máy chủ quản lý miền, gia nhập Domain, quản lý người dùng, quản lý các đối tượng hệ thống AD.</li>\r\n<li>Học viên biết cách triển khai các dịch vụ mạng: DNS, DHCP, chia sẻ tài nguyên, Email.</li>\r\n<li>Học viên biết cách cài đặt các công cụ quản trị từ xa để quản lý.</li>', 0, 0, 0, 8, 1, 3, 'https://res.cloudinary.com/dzyfkhpce/image/upload/v1616129760/OnlineAcademy/Qu%E1%BA%A3n%20tr%E1%BB%8B%20c%C6%A1%20s%E1%BB%9F%20d%E1%BB%AF%20li%E1%BB%87u/quan-tri-he-thong-mcsa_zl07di.jpg', '799000.00', 3, '2021-02-21 17:00:00', '2021-02-21 17:00:00', 1),
(15, 'Selenium 4 Các Tính Năng Mới', 'Nếu đã sử dụng và làm việc với Selenium 3 thì việc update lên Selenium 4 với những cải tiến phù hợp và tốt hơn nhiều dành cho bạn.', '<li>Khóa học sẽ tìm hiểu các tính năng mới của Selenium 4 như: cách chụp hình cho từng element, từng section và cả trang web. Với Selenium 4, chúng ta sẽ không quan tâm nhiều về driver như Chrome, Firefox, IE,... vì nó sẽ làm việc với WebDriver manager để lấy các driver này.</li>\r\n<li>Chúng ta sẽ làm việc với các tính năng mới như getRest, fullScreen,.. và đặc biệt làm với DevTool trong Chrome. Bên cạnh đó chúng ta sẽ biết cách cài đặt và gỡ bỏ các addon trong FireFox.</li>\r\n<li>Chúng ta sẽ so sánh xem Selenium 3 và Selenium 4 khác nhau như thế nào, và khi sử dụng Selenium 4 sẽ đươc lợi ích gì, ví dụ như Selenium Grid chẳng hạn.</li>', 0, 0, 0, 3, 1, 3, 'https://res.cloudinary.com/dzyfkhpce/image/upload/v1616129760/OnlineAcademy/Qu%E1%BA%A3n%20tr%E1%BB%8B%20c%C6%A1%20s%E1%BB%9F%20d%E1%BB%AF%20li%E1%BB%87u/selenium4_rpdoo6.png', '549000.00', 3, '2021-03-08 17:00:00', '2021-03-08 17:00:00', 1),
(16, 'Quản trị Linux siêu tốc', 'Khóa học dành riêng cho những người sử dụng nền tảng, hệ điều hành Linux.</br>\r\nChỉ với hơn 2 giờ, 36 bài học, bạn sẽ được giới thiệu toàn bộ về hệ điều hành Linux. Các lệnh chủ yếu khi làm việc với file system, thao tác với file cấu hình, quản trị hệ thống và mạng, cài đặt và cấu hình các dịch vụ cơ bản', '<li>Khóa học trang bị kỹ năng cơ bản nhất như kỹ năng thực hành và tư duy để giải quyết vấn đề trong lúc làm việc với hệ điều hành mã nguồn mở.</li>', 0, 0, 0, 4, 1, 3, 'https://res.cloudinary.com/dzyfkhpce/image/upload/v1616129760/OnlineAcademy/Qu%E1%BA%A3n%20tr%E1%BB%8B%20c%C6%A1%20s%E1%BB%9F%20d%E1%BB%AF%20li%E1%BB%87u/linux_ii5rtp.jpg', '699000.00', 3, '2021-03-10 17:00:00', '2021-03-10 17:00:00', 1),
(17, 'Điện tử cơ bản (Phần 1)', 'Khi mà xã hội đang rơi vào tình trạng \"\"Thừa thầy thiếu thợ\"\" như hiện nay thì việc học nghề đang dần trở thành một hướng đi mới cho rất nhiều bạn trẻ.</br>\r\n\r\nThực tế cho thấy, có rất nhiều bạn trẻ đã tốt nghiệp Đại học nhưng loay hoay không tìm được việc làm bởi khi học Đại học, các bạn ít được trang bị những kỹ năng chuyên môn là điều mà những doanh nghiệp đang cần.</br>\r\n\r\nQua thống kê của Bộ lao động thương binh & Xã Hội thì thấy rằng, có đến 80% học viên tốt nghiệp các Trường nghề đã tìm được việc làm, trong khi đó chỉ có 30% sinh viên ở các trường Đại học tìm được công việc phù hợp với những gì mình được học.</br>\r\n\r\nHọc nghề đặc biệt là những nghề đang “Hot” luôn mang lại cơ hội có việc làm ổn định và xa hơn nữa là cơ hội thăng tiến trong sự nghiệp cho tất cả các bạn trẻ.</br>\r\n\r\nVậy nghề “HOT” là gì ?</br>\r\n\r\nBạn có biết, hiện nay mỗi gia đình ở Việt Nam đều có ít nhất 10 thiết bị điện tử</br>\r\n\r\n<li>Máy tính – Điện lạnh & Điện thoại ở trong nhà như Tivi, Dàn âm thanh, Máy vi tính, Laptop, Điều hòa, Tủ lạnh, Máy giặt, Lò vi sóng, Bếp từ, Quạt điều khiển, Điện thoại di động vv…, thậm chí có những loại máy thì mỗi người phải sở hữu một đến 2 chiếc như máy tính, điện thoại đi động, máy tính bảng vv…và với môi trường khí hậu nóng ẩm là yếu tố làm cho các thiết bị điện tử hay gặp sự cố, điều đó là cơ hội rất lớn cho các bạn trẻ yêu mến nghề Điện tử</li>\r\n<li>Máy tính – Điện lạnh – Điện thoại.</li>\r\nThực tế đã chứng minh: Không có ai làm nghề điện tử, điện lạnh mà bị thất nghiệp và cùng không có ai giỏi nghề điện tử, điện lạnh mà bị nghèo.</br>\r\nVà thực tế cũng đã chứng minh, rất nhiều bạn lao vào học nghề điện tử với một tâm thế nóng vội, muốn học thật nhanh, muốn đốt cháy giai đoạn nên đã bỏ qua những kiến thức cơ bản và điều đáng tiếc là những bạn ấy đã chọn một phương pháp học sai lầm là học cái khó trước, không chuẩn bị cho mình những kiến thức cơ bản, và cuối cùng các bạn đã không đạt được mục đích, làm mất đi cơ hội quý giá cho sự nghiệp của bản thân.</br>\r\n\r\nVới kinh nghiệm của bản thân tôi với trên 20 năm trong nghề, tôi đã trực tiếp giảng dạy và đã chứng kiến rất nhiều bạn học viên đã chịu khó học hỏi, xác định đúng cho mình phương pháp học là phải đi từ dễ đến khó, từ thấp lên cao, từ cơ bản đến chuyên sâu thì nay đã trở nên rất thành đạt.</br>\r\n\r\nVới những lý do trên, tôi và OnlineAcademy đã hợp tác để đem đến cho các bạn khóa học “Điện tử cơ bản (Phần 1)”, khóa học đầu tiên trong chuỗi khóa học dạy nghề Điện tử</br>\r\n\r\n<li>Máy tính – Điện lạnh & Điện thoại.</li>\r\nTham gia khoá học bạn sẽ được trang bị những kiến thức nền tảng cực kì quan trọng để bạn có thể học tiếp bất kỳ một chương trình nâng cao nào sau đó. Bạn sẽ hiểu được bản chất của dòng điện, của điện áp, bạn được hướng dẫn sử dụng các thiết bị sửa chữa như đồng hồ đo các loại, máy hiện sóng. Các bạn sẽ được hướng dẫn kỹ năng sử dụng các loại máy hàn và được hướng dẫn cách thay thế các loại IC. Bạn được học và được nhìn thấy tất cả các linh kiện điện tử chúng hoạt động  ra sao, cách đo khi chúng hư hỏng, bạn sẽ được trang bị kiến thức về tất cả các mạch điện tử cơ bản đã cấu tạo nên tất cả các thiết bị điện tử từ đơn giản đến phức tạp.</br>\r\n\r\nCòn chờ gì nữa, hãy đăng kí khóa học của chúng tôi để được học nghề một cách chuyên nghiệp nhất!</br>', '<li>Khóa học sẽ trang bị cho bạn những kiến thức vô cùng cần thiết trước khi bạn tìm đến học các khóa sửa chữa Điện tử - Máy tính - Điện lạnh và Điện thoại</li>\r\n<li>Bạn được trang bị tất cả kiến thức để giúp bạn dễ dàng học tiếp các chương trình nâng cao như những kiến thức về dòng điện, diện áp, được hướng dẫn sử dụng tất cả các thiết bị đo, thiết bị hàn thay thế linh kiện.</li>\r\n<li>Được học và thực nghiệm sự hoạt động của tất cả các linh kiện điện trở, tụ điện, cuộn dây, đi ốt , bóng bán dẫn các loại, IC thông dụng các loại, mạch điện tử thông dụng các loại</li>\r\n<li>Sau hai khóa học điện tử căn bản, bạn sẽ thấy học các chương trình nâng cao sẽ trở nên dễ dàng hơn bao giờ hết</li>', 0, 0, 0, 7, 1, 6, 'https://res.cloudinary.com/dzyfkhpce/image/upload/v1616129244/OnlineAcademy/V%E1%BA%ADn%20h%C3%A0nh%20h%E1%BB%87%20th%E1%BB%91ng/dien-tu-can-ban_pnirox.jpg', '599000.00', 2, '2021-01-29 17:00:00', '2021-01-29 17:00:00', 1),
(18, 'Điện tử cơ bản (Phần 2)', 'Khi mà xã hội đang rơi vào tình trạng \"\"Thừa thầy thiếu thợ\"\" như hiện nay thì việc học nghề đang dần trở thành một hướng đi mới cho rất nhiều bạn trẻ.</br>\r\n\r\nThực tế cho thấy, có rất nhiều bạn trẻ đã tốt nghiệp Đại học nhưng loay hoay không tìm được việc làm bởi khi học Đại học, các bạn ít được trang bị những kỹ năng chuyên môn là điều mà những doanh nghiệp đang cần.</br>\r\n\r\nQua thống kê của Bộ lao động thương binh & Xã Hội thì thấy rằng, có đến 80% học viên tốt nghiệp các Trường nghề đã tìm được việc làm, trong khi đó chỉ có 30% sinh viên ở các trường Đại học tìm được công việc phù hợp với những gì mình được học.</br>\r\n\r\nHọc nghề đặc biệt là những nghề đang “Hot” luôn mang lại cơ hội có việc làm ổn định và xa hơn nữa là cơ hội thăng tiến trong sự nghiệp cho tất cả các bạn trẻ.</br>\r\n\r\nVậy nghề “HOT” là gì ?</br>\r\n\r\nBạn có biết, hiện nay mỗi gia đình ở Việt Nam đều có ít nhất 10 thiết bị điện tử</br>\r\n\r\n<li>Máy tính – Điện lạnh & Điện thoại ở trong nhà như Tivi, Dàn âm thanh, Máy vi tính, Laptop, Điều hòa, Tủ lạnh, Máy giặt, Lò vi sóng, Bếp từ, Quạt điều khiển, Điện thoại di động vv…, thậm chí có những loại máy thì mỗi người phải sở hữu một đến 2 chiếc như máy tính, điện thoại đi động, máy tính bảng vv…và với môi trường khí hậu nóng ẩm là yếu tố làm cho các thiết bị điện tử hay gặp sự cố, điều đó là cơ hội rất lớn cho các bạn trẻ yêu mến nghề Điện tử</li>\r\n<li>Máy tính – Điện lạnh – Điện thoại.</li>\r\nThực tế đã chứng minh: Không có ai làm nghề điện tử, điện lạnh mà bị thất nghiệp và cùng không có ai giỏi nghề điện tử, điện lạnh mà bị nghèo.</br>\r\nVà thực tế cũng đã chứng minh, rất nhiều bạn lao vào học nghề điện tử với một tâm thế nóng vội, muốn học thật nhanh, muốn đốt cháy giai đoạn nên đã bỏ qua những kiến thức cơ bản và điều đáng tiếc là những bạn ấy đã chọn một phương pháp học sai lầm là học cái khó trước, không chuẩn bị cho mình những kiến thức cơ bản, và cuối cùng các bạn đã không đạt được mục đích, làm mất đi cơ hội quý giá cho sự nghiệp của bản thân.</br>\r\n\r\nVới kinh nghiệm của bản thân tôi với trên 20 năm trong nghề, tôi đã trực tiếp giảng dạy và đã chứng kiến rất nhiều bạn học viên đã chịu khó học hỏi, xác định đúng cho mình phương pháp học là phải đi từ dễ đến khó, từ thấp lên cao, từ cơ bản đến chuyên sâu thì nay đã trở nên rất thành đạt.</br>\r\n\r\nVới những lý do trên, tôi và OnlineAcademy đã hợp tác để đem đến cho các bạn khóa học “Điện tử cơ bản (Phần 1)”, khóa học đầu tiên trong chuỗi khóa học dạy nghề Điện tử</br>\r\n\r\n<li>Máy tính – Điện lạnh & Điện thoại.</li>\r\nTham gia khoá học bạn sẽ được trang bị những kiến thức nền tảng cực kì quan trọng để bạn có thể học tiếp bất kỳ một chương trình nâng cao nào sau đó. Bạn sẽ hiểu được bản chất của dòng điện, của điện áp, bạn được hướng dẫn sử dụng các thiết bị sửa chữa như đồng hồ đo các loại, máy hiện sóng. Các bạn sẽ được hướng dẫn kỹ năng sử dụng các loại máy hàn và được hướng dẫn cách thay thế các loại IC. Bạn được học và được nhìn thấy tất cả các linh kiện điện tử chúng hoạt động  ra sao, cách đo khi chúng hư hỏng, bạn sẽ được trang bị kiến thức về tất cả các mạch điện tử cơ bản đã cấu tạo nên tất cả các thiết bị điện tử từ đơn giản đến phức tạp.</br>\r\n\r\nCòn chờ gì nữa, hãy đăng kí khóa học của chúng tôi để được học nghề một cách chuyên nghiệp nhất!</br>', '<li>Khóa học sẽ trang bị cho bạn những kiến thức vô cùng cần thiết trước khi bạn tìm đến học các khóa sửa chữa Điện tử - Máy tính - Điện lạnh và Điện thoại</li>\r\n<li>Bạn được trang bị tất cả kiến thức để giúp bạn dễ dàng học tiếp các chương trình nâng cao như những kiến thức về dòng điện, điện áp, được hướng dẫn sử dụng tất cả các thiết bị đo, thiết bị hàn thay thế linh kiện.</li>\r\n<li>Được học và thực nghiệm sự hoạt động của tất cả các linh kiện điện trở, tụ điện, cuộn dây, đi ốt , bóng bán dẫn các loại, IC thông dụng các loại, mạch điện tử thông dụng các loại</li>\r\n<li>Sau hai khóa học điện tử căn bản, bạn sẽ thấy học các chương trình nâng cao sẽ trở nên dễ dàng hơn bao giờ hết</li>', 0, 0, 0, 4, 1, 6, 'https://res.cloudinary.com/dzyfkhpce/image/upload/v1616129245/OnlineAcademy/V%E1%BA%ADn%20h%C3%A0nh%20h%E1%BB%87%20th%E1%BB%91ng/dien_tu_can_ban_2_bkfw9c.jpg', '599000.00', 2, '2021-02-21 17:00:00', '2021-02-21 17:00:00', 1),
(19, 'Phân tích thiết kế hệ thống', 'Hệ thống thông tin tin học hoá là một trong những ứng dụng đầy đủ và toàn diện nhất các thành tựu của công nghệ thông tin vào một tổ chức, doanh nghiệp. Việc sở hữu một hệ thống thông tin quản lý toàn diện giúp bộ máy công ty hoạt động tốt hơn, góp một phần không nhỏ trong sự thành công của một doanh nghiệp. Nắm được những nhu cầu về thiết kế hệ thống thông tin của các tổ chức, doanh nghiệp đang rất cấp thiết hiện nay, OnlineAcademy cung cấp khóa học \"\"Phân tích thiết kế hệ thống\"\" nhằm giúp các lập trình viên nâng cao chuyên môn để tìm được những cơ hội nghề nghiệp tốt hơn, đồng thời hỗ trợ các tổ chức, doanh nghiệp nâng cao năng lực cho nhân sự mảng thông tin.</br>\r\n\r\nKhoá học \"\"Phân tích thiết kế hệ thống\"\" được thiết kế dựa trên các giáo trình đào tạo chuẩn của các trường Đại học khối ngành Công Nghệ Thông Tin, dưới sự dẫn dắt của giảng viên ĐH Bách Khoa Hà Nội Thạch Bình Cường. Khóa học này giúp học viên hiểu được hệ thống thông tin quản lý, phương pháp luận và công nghệ phân tích và thiết kế một hệ thống thông tin kinh tế theo 2 hướng cơ bản là hướng cấu trúc và hướng đối tượng, có hiểu biết căn bản về hệ thống thông tin trong doanh nghiệp.</br>\r\n\r\nKhoá học cũng hướng dẫn cho học viên các quy trình để phát triển hệ thống cũng như các phương pháp xác định, phân tích để phát triển hệ thống thông tin.', '<li>Được trang bị những kỹ năng thực hành về phân tích – thiết kế một hệ thống thông tin quản lý đáp ứng yêu cầu quản lý của một tổ chức theo phương pháp có cấu trúc</li>\r\n<li>Nắm được cách làm thế nào để xác định yêu cầu, phân tích và cách phát triển hệ thống thông tin.</li>\r\n<li>Thực hành phân tích thiết kế 1 hệ thống thông tin cụ thể</li>', 0, 0, 0, 7, 1, 6, 'https://res.cloudinary.com/dzyfkhpce/image/upload/v1616129245/OnlineAcademy/V%E1%BA%ADn%20h%C3%A0nh%20h%E1%BB%87%20th%E1%BB%91ng/phantichthietkeHTTT_e9ixs7.jpg', '549000.00', 2, '2021-03-08 17:00:00', '2021-03-08 17:00:00', 1),
(20, 'Luyện thi lấy chứng chỉ quốc tế ISTQB Advanced Level', 'Nội dung của ISTQB advanced level tập trung vào các kỹ năng sau:</br>\r\n\r\n<li>Xây dựng và quản lý dự án bằng các phép đo (Test metrics).</li>\r\n<li>Quản lý quy trình dự án test từ việc lập kế hoạch, phân tích, thiết kế, quản lý chạy test, lập báo cáo, quyết định dừng test và quản lý đóng dự án test.</li.\r\n<li>Dự đoán và quản lý các rủi ro, các vấn đề phát sinh trong quá trình dự án.</li>\r\n<li>Cải tiến quy trình liên tục.</li>\r\n<li>Các kỹ thuật thiết kế test case nâng cao và tăng hiệu quả test.</li>\r\nTrong các kỹ năng này, khá nhiều bạn khi bắt đầu học sẽ cảm thấy bỡ ngỡ bởi 4 kỹ năng đầu tiên hầu như ít bạn được tham gia vào làm và có kinh nghiệm với nó. Phần lớp phải là cấp trưởng phòng, trưởng dự án, quản lý của cả đội tester của một công ty mới thường xuyên làm việc với các kỹ năng này.</br>\r\n\r\nNhưng bạn yên tâm, kinh nghiệm làm việc giúp bạn tiếp cận các vấn đề dễ dàng hơn, hiểu nhanh hơn các nội dung trình bày trong ISTQB advanced level. Nhưng thi vẫn là thi, nó vẫn bám rất sát với sách vở và những nội dung trong tài liệu Syllabus vẫn chiếm khoảng 65%</br>\r\n\r\n<li>70% nội dung câu hỏi thi.</li>\r\nHọc ISTQB advanced level để giúp bạn mở rộng thêm các kỹ năng mới trong test, mục đích để giúp bạn chủ động với công việc của mình hơn là đang bị động đối phó với nhiều vấn đề đang phát sinh trong dự án.', '<li>Khóa học ISTQB nâng cao cho tester giúp bạn hoàn thiện toàn bộ quy trình kiến thức về testing, nâng cao các kỹ năng quản lý, kỹ thuật phân tích yêu cầu và thực hiện test nâng cao.</li>\r\n<li>Kỹ năng lập kế hoạch và kiểm soát tiến độ testing.</li>\r\n<li>Kỹ năng phân tích yêu cầu và theo dõi yêu cầu thay đổi.</li>\r\n<li>Kỹ năng lập ma trận theo dõi tiến độ test của cả đội.</li>\r\n<li>Kỹ năng lập chiến lược test.</li>\r\n<li>Kỹ năng phân tích rủi ro.</li>\r\n<li>Kỹ năng phán đoán các vùng tập trung lỗi.</li>\r\n<li>Áp dụng đúng kỹ thuật test ở đúng giai đoạn, tình huống test.</li>\r\n<li>Kỹ năng test ở giai đoạn nước rút.</li>\r\n<li>Kỹ năng phân tích và lập báo cáo test.</li>\r\n<li>Kỹ năng làm việc với khách hàng, lập trình khó tính.</li>', 0, 0, 0, 11, 0, 2, 'https://res.cloudinary.com/dzyfkhpce/image/upload/v1616129245/OnlineAcademy/V%E1%BA%ADn%20h%C3%A0nh%20h%E1%BB%87%20th%E1%BB%91ng/phantichthietkeHTTT_e9ixs7.jpg', '799000.00', 1, '2021-03-10 17:00:00', '2021-03-10 17:00:00', 1),
(21, 'Lấy tin tự động trong PHP', 'Là một trong những ngôn ngữ lập trình phổ biến nhất hiện nay, học lập trình PHP là một yêu cầu bắt buộc của một lập trình viên. Chuyên sâu hơn đó là lập trình hướng đối tượng trong PHP hay OOP, với sự phát triển hiện nay của công nghệ kỹ thuật thì kiến thức về lập trình hướng đối tượng là kiến thức bắt buộc mà bất kỳ lập trình viên nào cũng cần phải trang bị và trang bị thật vững cho mình.</br>\r\n\r\nĐến từ Trung tâm đào tạo lập trình Web trực tuyến ZendVN, giảng viên Lưu Trường Hải Lân sẽ đồng hành cùng các bạn trong khóa học \"\"Lập trình hướng đối tượng từ cơ bản đến nâng cao trong PHP\"\". Với kinh nghiệm giảng dạy nhiều năm về lập trình, anh Lưu Trường Hải Lân sẽ từng bước giúp các bạn đang muốn học lập trình đào sâu các kiến thức về lập trình hướng đối tượng trong PHP từ cơ bản đến nâng cao.', '<li>Khoá học sẽ giúp học viên nắm được kỹ thuật lấy tin tự động , xử lý dữ liệu, kỹ thuật Ajax</li>\r\n<li>Hiểu được ứng dụng của HTACCESS trong thực tế.</li>', 0, 0, 0, 7, 1, 2, 'https://res.cloudinary.com/dzyfkhpce/image/upload/v1616128855/OnlineAcademy/Ng%C3%B4n%20ng%E1%BB%AF%20l%E1%BA%ADp%20tr%C3%ACnh/php_xr1of0.jpg', '249000.00', 1, '2021-03-08 17:00:00', '2021-03-08 17:00:00', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `categorygroup`
--

DROP TABLE IF EXISTS `categorygroup`;
CREATE TABLE IF NOT EXISTS `categorygroup` (
  `CategoryGroupId` int(11) NOT NULL AUTO_INCREMENT,
  `CategoryGroupName` varchar(255) DEFAULT NULL,
  `Created_At` timestamp NULL DEFAULT NULL,
  `Image` longtext,
  `IsActive` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`CategoryGroupId`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- Đang đổ dữ liệu cho bảng `categorygroup`
--

INSERT INTO `categorygroup` (`CategoryGroupId`, `CategoryGroupName`, `Created_At`, `Image`, `IsActive`) VALUES
(1, 'Ngôn ngữ lập trình', '2021-01-31 17:00:00', 'https://res.cloudinary.com/dzyfkhpce/image/upload/v1615522754/OnlineAcademy/Ng%C3%B4n%20ng%E1%BB%AF%20l%E1%BA%ADp%20tr%C3%ACnh/ngonngulaptrinh_szzn7m.png', 1),
(2, 'Vận hành hệ thống', '2021-01-31 17:00:00', 'https://res.cloudinary.com/dzyfkhpce/image/upload/v1615522754/OnlineAcademy/V%E1%BA%ADn%20h%C3%A0nh%20h%E1%BB%87%20th%E1%BB%91ng/vanhanhhethong_y4hchr.jpg', 1),
(3, 'Quản trị cơ sở dữ liệu', '2021-01-31 17:00:00', 'https://res.cloudinary.com/dzyfkhpce/image/upload/v1615522753/OnlineAcademy/Qu%E1%BA%A3n%20tr%E1%BB%8B%20c%C6%A1%20s%E1%BB%9F%20d%E1%BB%AF%20li%E1%BB%87u/quantricosodulieu_htmrh2.jpg', 1),
(4, 'An ninh mạng', '2021-01-31 17:00:00', 'https://res.cloudinary.com/dzyfkhpce/image/upload/v1615522754/OnlineAcademy/An%20ninh%20m%E1%BA%A1ng/anninhmang_whwhrg.jpg', 1),
(5, 'Mạng máy tính', '2021-01-31 17:00:00', 'https://res.cloudinary.com/dzyfkhpce/image/upload/v1615522754/OnlineAcademy/M%E1%BA%A1ng%20m%C3%A1y%20t%C3%ADnh/mangmaytinh_tckrc4.jpg', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `discount`
--

DROP TABLE IF EXISTS `discount`;
CREATE TABLE IF NOT EXISTS `discount` (
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

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `job`
--

DROP TABLE IF EXISTS `job`;
CREATE TABLE IF NOT EXISTS `job` (
  `JobId` int(11) NOT NULL AUTO_INCREMENT,
  `JobName` varchar(255) DEFAULT NULL,
  `IsActive` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`JobId`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- Đang đổ dữ liệu cho bảng `job`
--

INSERT INTO `job` (`JobId`, `JobName`, `IsActive`) VALUES
(1, 'Admin', 1),
(2, 'Học Viên', 1),
(3, 'Giảng Viên', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `likedetail`
--

DROP TABLE IF EXISTS `likedetail`;
CREATE TABLE IF NOT EXISTS `likedetail` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `UsersId` int(11) DEFAULT NULL,
  `CategoryId` int(11) DEFAULT NULL,
  `LikeTime` timestamp NULL DEFAULT NULL,
  `IsActive` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`Id`) USING BTREE,
  KEY `CategoryId` (`CategoryId`) USING BTREE,
  KEY `UsersId` (`UsersId`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- Đang đổ dữ liệu cho bảng `likedetail`
--

INSERT INTO `likedetail` (`Id`, `UsersId`, `CategoryId`, `LikeTime`, `IsActive`) VALUES
(1, 8, 2, '2021-03-19 10:33:18', 0),
(2, 8, 1, '2021-03-19 10:33:40', 0),
(3, 8, 3, '2021-03-19 10:33:57', 0),
(4, 8, 4, '2021-03-19 10:17:42', 0),
(5, 8, 5, '2021-03-19 11:34:33', 1),
(6, 8, 17, '2021-03-19 10:17:45', 0),
(7, 8, 6, '2021-03-19 10:17:46', 0);

--
-- Bẫy `likedetail`
--
DROP TRIGGER IF EXISTS `UpdateQuanLike_Insert`;
DELIMITER $$
CREATE TRIGGER `UpdateQuanLike_Insert` AFTER INSERT ON `likedetail` FOR EACH ROW UPDATE CATEGORY SET QUANLIKE = (SELECT COUNT(USERSID) FROM likedetail WHERE CategoryId = NEW.CATEGORYID AND IsActive = TRUE)
WHERE CategoryId = NEW.CATEGORYID
$$
DELIMITER ;
DROP TRIGGER IF EXISTS `UpdateQuanLike_Update`;
DELIMITER $$
CREATE TRIGGER `UpdateQuanLike_Update` AFTER UPDATE ON `likedetail` FOR EACH ROW UPDATE CATEGORY SET QUANLIKE = (SELECT COUNT(USERSID) FROM likedetail WHERE CategoryId = NEW.CATEGORYID AND IsActive = TRUE)
WHERE CategoryId = NEW.CATEGORYID
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product`
--

DROP TABLE IF EXISTS `product`;
CREATE TABLE IF NOT EXISTS `product` (
  `ProductId` int(11) NOT NULL AUTO_INCREMENT,
  `NumberNo` int(11) DEFAULT NULL,
  `ProductName` varchar(255) DEFAULT NULL,
  `Video` varchar(255) DEFAULT NULL,
  `Viewer` int(11) DEFAULT '0',
  `Public` tinyint(1) DEFAULT '1',
  `CategoryId` int(11) DEFAULT NULL,
  `Created_At` timestamp NULL DEFAULT NULL,
  `IsActive` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`ProductId`) USING BTREE,
  KEY `CategoryId` (`CategoryId`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=137 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- Đang đổ dữ liệu cho bảng `product`
--

INSERT INTO `product` (`ProductId`, `NumberNo`, `ProductName`, `Video`, `Viewer`, `Public`, `CategoryId`, `Created_At`, `IsActive`) VALUES
(1, 1, 'Giới Thiệu', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134157/OnlineAcademy/Video/1_h32box.mp4', 2, 1, 1, '2021-03-19 09:08:41', 1),
(2, 2, 'Các thành phần cơ bản của ngôn ngữ lập trình pascal', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134104/OnlineAcademy/Video/02_jm6ws3.mp4', 1, 0, 1, '2021-03-19 09:08:41', 1),
(3, 3, 'Các kiểu dữ liệu', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134105/OnlineAcademy/Video/03_q3vovq.mp4', 1, 0, 1, '2021-03-19 09:08:41', 1),
(4, 4, 'Các câu lệnh có cấu trúc', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134104/OnlineAcademy/Video/04_jrxr4n.mp4', 1, 0, 1, '2021-03-19 09:08:41', 1),
(5, 5, 'Thực hành', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134105/OnlineAcademy/Video/05_dg1edh.mp4', 1, 0, 1, '2021-03-19 09:08:41', 1),
(6, 1, 'Giới thiệu, các cài đặt và sử dụng công cụ lập trình C#', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134157/OnlineAcademy/Video/1_h32box.mp4', 0, 1, 2, '2021-03-19 09:08:41', 1),
(7, 2, 'Tổng quan lập trình C#', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134104/OnlineAcademy/Video/02_jm6ws3.mp4', 0, 0, 2, '2021-03-19 09:08:41', 1),
(8, 3, 'Cách thức debug và xử lí biệt lệ trong C#', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134105/OnlineAcademy/Video/03_q3vovq.mp4', 0, 0, 2, '2021-03-19 09:08:41', 1),
(9, 4, 'Chuỗi, mảng và collection trong C#', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134104/OnlineAcademy/Video/04_jrxr4n.mp4', 0, 0, 2, '2021-03-19 09:08:41', 1),
(10, 5, 'Lập trình hướng đối tượng trong C#', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134105/OnlineAcademy/Video/05_dg1edh.mp4', 0, 0, 2, '2021-03-19 09:08:41', 1),
(11, 6, 'Lập trình windows form cơ bản trong C#', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134105/OnlineAcademy/Video/06_rieoa7.mp4', 0, 0, 2, '2021-03-19 09:08:41', 1),
(12, 7, 'Các bài tập rèn luyện tổng hợp', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134104/OnlineAcademy/Video/07_zjxlrw.mp4', 0, 0, 2, '2021-03-19 09:08:41', 1),
(13, 8, 'Tổng kết', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134107/OnlineAcademy/Video/08_uinrpk.mp4', 0, 0, 2, '2021-03-19 09:08:41', 1),
(14, 1, 'Giới thiệu', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134157/OnlineAcademy/Video/1_h32box.mp4', 0, 1, 3, '2021-03-19 09:08:41', 1),
(15, 2, 'Thiết kế và sửa chữa các loại nguồn xung', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134104/OnlineAcademy/Video/02_jm6ws3.mp4', 0, 0, 3, '2021-03-19 09:08:41', 1),
(16, 3, 'Tổng kết', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134105/OnlineAcademy/Video/03_q3vovq.mp4', 0, 0, 3, '2021-03-19 09:08:41', 1),
(17, 1, 'Giới thiệu', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134157/OnlineAcademy/Video/1_h32box.mp4', 0, 1, 4, '2021-03-19 09:08:41', 1),
(18, 2, 'Nguyên lý chung của máy điều hòa Mono', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134104/OnlineAcademy/Video/02_jm6ws3.mp4', 0, 0, 4, '2021-03-19 09:08:41', 1),
(19, 3, 'Phân tích sơ đồ khối trên bo mạch điều hòa Daikin Mono', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134105/OnlineAcademy/Video/03_q3vovq.mp4', 0, 0, 4, '2021-03-19 09:08:41', 1),
(20, 4, 'Nguyên lý hoạt động của các khối & phân tích các bệnh liên quan', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134104/OnlineAcademy/Video/04_jrxr4n.mp4', 0, 0, 4, '2021-03-19 09:08:41', 1),
(21, 5, 'Tổng kết', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134105/OnlineAcademy/Video/05_dg1edh.mp4', 0, 0, 4, '2021-03-19 09:08:41', 1),
(22, 1, 'Cài IDE', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134157/OnlineAcademy/Video/1_h32box.mp4', 0, 1, 5, '2021-03-19 09:08:41', 1),
(23, 2, 'Cấu trúc một chương trình C cơ bản', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134104/OnlineAcademy/Video/02_jm6ws3.mp4', 0, 0, 5, '2021-03-19 09:08:41', 1),
(24, 3, 'Thư viện và nhập xuất dữ liệu', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134105/OnlineAcademy/Video/03_q3vovq.mp4', 0, 0, 5, '2021-03-19 09:08:41', 1),
(25, 4, 'Toán tử trong C', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134104/OnlineAcademy/Video/04_jrxr4n.mp4', 0, 0, 5, '2021-03-19 09:08:41', 1),
(26, 5, 'Cấu trúc rẽ nhánh', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134105/OnlineAcademy/Video/05_dg1edh.mp4', 0, 0, 5, '2021-03-19 09:08:41', 1),
(27, 6, 'Cấu trúc lặp', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134105/OnlineAcademy/Video/06_rieoa7.mp4', 0, 0, 5, '2021-03-19 09:08:41', 1),
(28, 7, 'Functions', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134104/OnlineAcademy/Video/07_zjxlrw.mp4', 0, 0, 5, '2021-03-19 09:08:41', 1),
(29, 8, 'Con trỏ và thư viện người dùng', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134107/OnlineAcademy/Video/08_uinrpk.mp4', 0, 0, 5, '2021-03-19 09:08:41', 1),
(30, 9, 'Mảng ', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134107/OnlineAcademy/Video/09_kvssh1.mp4', 0, 0, 5, '2021-03-19 09:08:41', 1),
(31, 10, 'Chuỗi ký tự', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134107/OnlineAcademy/Video/10_rcvobe.mp4', 0, 0, 5, '2021-03-19 09:08:41', 1),
(32, 1, 'Giới thiệu tổng quan', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134157/OnlineAcademy/Video/1_h32box.mp4', 0, 1, 6, '2021-03-19 09:08:41', 1),
(33, 2, 'Internet Of Things là gì?', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134104/OnlineAcademy/Video/02_jm6ws3.mp4', 0, 0, 6, '2021-03-19 09:08:41', 1),
(34, 3, 'Điện tử cơ bản và IOT Starter Kit', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134105/OnlineAcademy/Video/03_q3vovq.mp4', 0, 0, 6, '2021-03-19 09:08:41', 1),
(35, 4, 'Kiến trúc hệ thống IOT', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134104/OnlineAcademy/Video/04_jrxr4n.mp4', 0, 0, 6, '2021-03-19 09:08:41', 1),
(36, 5, 'Hoàn thiện sản phẩm IOT', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134105/OnlineAcademy/Video/05_dg1edh.mp4', 0, 0, 6, '2021-03-19 09:08:41', 1),
(37, 1, 'Giới thiệu ', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134157/OnlineAcademy/Video/1_h32box.mp4', 0, 1, 7, '2021-03-19 09:08:41', 1),
(38, 2, 'Tổng quan về mạng máy tính', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134104/OnlineAcademy/Video/02_jm6ws3.mp4', 0, 0, 7, '2021-03-19 09:08:41', 1),
(39, 3, 'Mô hình OSI và TCP/IP', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134105/OnlineAcademy/Video/03_q3vovq.mp4', 0, 0, 7, '2021-03-19 09:08:41', 1),
(40, 4, 'Giao thức vận chuyển dữ liệu UDP và TCP', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134104/OnlineAcademy/Video/04_jrxr4n.mp4', 0, 0, 7, '2021-03-19 09:08:41', 1),
(41, 5, 'Công nghệ Ethernet LAN', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134105/OnlineAcademy/Video/05_dg1edh.mp4', 0, 0, 7, '2021-03-19 09:08:41', 1),
(42, 6, 'Chia mạng con Subnet và quy hoạch IPV4', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134105/OnlineAcademy/Video/06_rieoa7.mp4', 0, 0, 7, '2021-03-19 09:08:41', 1),
(43, 7, 'Cáp đồng Ethernet LAN', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134104/OnlineAcademy/Video/07_zjxlrw.mp4', 0, 0, 7, '2021-03-19 09:08:41', 1),
(44, 8, 'Cấu hình cơ bản trên Cisco Router', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134107/OnlineAcademy/Video/08_uinrpk.mp4', 0, 0, 7, '2021-03-19 09:08:41', 1),
(45, 9, 'Kỹ thuật Telnet cấu hình thiết bị từ xa', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134107/OnlineAcademy/Video/09_kvssh1.mp4', 0, 0, 7, '2021-03-19 09:08:41', 1),
(46, 10, 'Kỹ thuật AAA hỗ trợ xác thực và phân quyền Telnet trên thiết bị', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134107/OnlineAcademy/Video/10_rcvobe.mp4', 0, 0, 7, '2021-03-19 09:08:41', 1),
(47, 1, 'Giáo trình', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134157/OnlineAcademy/Video/1_h32box.mp4', 0, 1, 8, '2021-03-19 09:08:41', 1),
(48, 1, 'Giới thiệu tổng quan', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134157/OnlineAcademy/Video/1_h32box.mp4', 0, 1, 9, '2021-03-19 09:08:41', 1),
(49, 2, 'Hacker là ai?', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134104/OnlineAcademy/Video/02_jm6ws3.mp4', 0, 0, 9, '2021-03-19 09:08:41', 1),
(50, 3, 'Các bước hành động của một Hacker', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134105/OnlineAcademy/Video/03_q3vovq.mp4', 0, 0, 9, '2021-03-19 09:08:41', 1),
(51, 4, 'Google Hacking', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134104/OnlineAcademy/Video/04_jrxr4n.mp4', 0, 0, 9, '2021-03-19 09:08:41', 1),
(52, 5, 'Thế giới ngầm deep web', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134105/OnlineAcademy/Video/05_dg1edh.mp4', 0, 0, 9, '2021-03-19 09:08:41', 1),
(53, 6, 'Bitcoin', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134105/OnlineAcademy/Video/06_rieoa7.mp4', 0, 0, 9, '2021-03-19 09:08:41', 1),
(54, 1, 'Giới thiệu', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134157/OnlineAcademy/Video/1_h32box.mp4', 0, 1, 10, '2021-03-19 09:08:41', 1),
(55, 2, 'Thiết lập sơ đồ', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134104/OnlineAcademy/Video/02_jm6ws3.mp4', 0, 0, 10, '2021-03-19 09:08:41', 1),
(56, 3, 'Thu thập thông tin', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134105/OnlineAcademy/Video/03_q3vovq.mp4', 0, 0, 10, '2021-03-19 09:08:41', 1),
(57, 4, 'System Hacking', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134104/OnlineAcademy/Video/04_jrxr4n.mp4', 0, 0, 10, '2021-03-19 09:08:41', 1),
(58, 5, 'Trojan Backdoor', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134105/OnlineAcademy/Video/05_dg1edh.mp4', 0, 0, 10, '2021-03-19 09:08:41', 1),
(59, 6, 'Sniffer', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134105/OnlineAcademy/Video/06_rieoa7.mp4', 0, 0, 10, '2021-03-19 09:08:41', 1),
(60, 7, 'Các kỹ thuật tấn công ứng dụng web', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134104/OnlineAcademy/Video/07_zjxlrw.mp4', 0, 0, 10, '2021-03-19 09:08:41', 1),
(61, 8, 'Wifi', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134107/OnlineAcademy/Video/08_uinrpk.mp4', 0, 0, 10, '2021-03-19 09:08:41', 1),
(62, 9, 'Cryptography', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134107/OnlineAcademy/Video/09_kvssh1.mp4', 0, 0, 10, '2021-03-19 09:08:41', 1),
(63, 10, 'Evade Firewall', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134107/OnlineAcademy/Video/10_rcvobe.mp4', 0, 0, 10, '2021-03-19 09:08:41', 1),
(64, 1, 'Giới thiệu và cài đặt', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134157/OnlineAcademy/Video/1_h32box.mp4', 0, 1, 11, '2021-03-19 09:08:41', 1),
(65, 2, 'Các khái niệm cơ bản các kiểu dữ liệu các kiểu table', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134104/OnlineAcademy/Video/02_jm6ws3.mp4', 0, 0, 11, '2021-03-19 09:08:41', 1),
(66, 3, 'Các câu lệnh T-SQL', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134105/OnlineAcademy/Video/03_q3vovq.mp4', 0, 0, 11, '2021-03-19 09:08:41', 1),
(67, 4, 'Thuực hành phân tích và thiết kế dữ liệu cho web bán hàng', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134104/OnlineAcademy/Video/04_jrxr4n.mp4', 0, 0, 11, '2021-03-19 09:08:41', 1),
(68, 5, 'Thực hành các câu lệnh SQL', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134105/OnlineAcademy/Video/05_dg1edh.mp4', 0, 0, 11, '2021-03-19 09:08:41', 1),
(69, 6, 'Thực hành tháo tác với kháo ngoại trong dữ liệu web bán hàng', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134105/OnlineAcademy/Video/06_rieoa7.mp4', 0, 0, 11, '2021-03-19 09:08:41', 1),
(70, 7, 'Các hàm SQL thông dụng', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134104/OnlineAcademy/Video/07_zjxlrw.mp4', 0, 0, 11, '2021-03-19 09:08:41', 1),
(71, 8, 'Thực hành phân tích và thiết kế dữ liệu cho website zing.vn', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134107/OnlineAcademy/Video/08_uinrpk.mp4', 0, 0, 11, '2021-03-19 09:08:41', 1),
(72, 9, 'Tổng kết', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134107/OnlineAcademy/Video/09_kvssh1.mp4', 0, 0, 11, '2021-03-19 09:08:41', 1),
(73, 1, 'Giới thiệu về Docker', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134157/OnlineAcademy/Video/1_h32box.mp4', 0, 1, 12, '2021-03-19 09:08:41', 1),
(74, 2, 'Cài đặt Docker', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134104/OnlineAcademy/Video/02_jm6ws3.mp4', 0, 0, 12, '2021-03-19 09:08:41', 1),
(75, 3, 'Vòng đời của Docker', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134105/OnlineAcademy/Video/03_q3vovq.mp4', 0, 0, 12, '2021-03-19 09:08:41', 1),
(76, 4, 'Container', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134104/OnlineAcademy/Video/04_jrxr4n.mp4', 0, 0, 12, '2021-03-19 09:08:41', 1),
(77, 5, 'Image', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134105/OnlineAcademy/Video/05_dg1edh.mp4', 0, 0, 12, '2021-03-19 09:08:41', 1),
(78, 6, 'Tạo Docker Image', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134105/OnlineAcademy/Video/06_rieoa7.mp4', 0, 0, 12, '2021-03-19 09:08:41', 1),
(79, 7, 'Tổng kết', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134104/OnlineAcademy/Video/07_zjxlrw.mp4', 0, 0, 12, '2021-03-19 09:08:41', 1),
(80, 1, 'Giới thiệu cấu trúc dữ liệu và giải thuật', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134157/OnlineAcademy/Video/1_h32box.mp4', 0, 1, 13, '2021-03-19 09:08:41', 1),
(81, 2, 'Danh sách', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134104/OnlineAcademy/Video/02_jm6ws3.mp4', 0, 0, 13, '2021-03-19 09:08:41', 1),
(82, 3, 'Ngăn xếp ', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134105/OnlineAcademy/Video/03_q3vovq.mp4', 0, 0, 13, '2021-03-19 09:08:41', 1),
(83, 4, 'Hàng đợi', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134104/OnlineAcademy/Video/04_jrxr4n.mp4', 0, 0, 13, '2021-03-19 09:08:41', 1),
(84, 5, 'Cấu trúc cây', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134105/OnlineAcademy/Video/05_dg1edh.mp4', 0, 0, 13, '2021-03-19 09:08:41', 1),
(85, 6, 'Tìm kiếm', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134105/OnlineAcademy/Video/06_rieoa7.mp4', 0, 0, 13, '2021-03-19 09:08:41', 1),
(86, 7, 'Sắp xếp', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134104/OnlineAcademy/Video/07_zjxlrw.mp4', 0, 0, 13, '2021-03-19 09:08:41', 1),
(87, 1, 'Giới thiệu tổng quan', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134157/OnlineAcademy/Video/1_h32box.mp4', 0, 1, 14, '2021-03-19 09:08:41', 1),
(88, 2, 'Giới thiệu hệ thống máy và mạng tại doanh nghiệp', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134104/OnlineAcademy/Video/02_jm6ws3.mp4', 0, 0, 14, '2021-03-19 09:08:41', 1),
(89, 3, 'Tìm kiếm kiến trúc Active Directory trên windows server', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134105/OnlineAcademy/Video/03_q3vovq.mp4', 0, 0, 14, '2021-03-19 09:08:41', 1),
(90, 4, 'Cài đặt hệ thống lab MCSA', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134104/OnlineAcademy/Video/04_jrxr4n.mp4', 0, 0, 14, '2021-03-19 09:08:41', 1),
(91, 5, 'Triển khai mô hình mạng Domain', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134105/OnlineAcademy/Video/05_dg1edh.mp4', 0, 0, 14, '2021-03-19 09:08:41', 1),
(92, 6, 'Các thao tác quản trị Domain', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134105/OnlineAcademy/Video/06_rieoa7.mp4', 0, 0, 14, '2021-03-19 09:08:41', 1),
(93, 7, 'Quản trị Domain Bằng các chính sách Group Policy', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134104/OnlineAcademy/Video/07_zjxlrw.mp4', 0, 0, 14, '2021-03-19 09:08:41', 1),
(94, 8, 'Quản trị máy chủ thông qua giao diện dòng lệnh', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134107/OnlineAcademy/Video/08_uinrpk.mp4', 0, 0, 14, '2021-03-19 09:08:41', 1),
(95, 1, 'Giới thiệu', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134157/OnlineAcademy/Video/1_h32box.mp4', 0, 1, 15, '2021-03-19 09:08:41', 1),
(96, 2, 'Selenium 4 ', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134104/OnlineAcademy/Video/02_jm6ws3.mp4', 0, 0, 15, '2021-03-19 09:08:41', 1),
(97, 3, 'Tổng kết', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134105/OnlineAcademy/Video/03_q3vovq.mp4', 0, 0, 15, '2021-03-19 09:08:41', 1),
(98, 1, 'Giới thiệu về hệ điều hành linux', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134157/OnlineAcademy/Video/1_h32box.mp4', 0, 1, 16, '2021-03-19 09:08:41', 1),
(99, 2, 'Làm việc với file', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134104/OnlineAcademy/Video/02_jm6ws3.mp4', 0, 0, 16, '2021-03-19 09:08:41', 1),
(100, 3, 'Làm việc với hệ thống và mạng', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134105/OnlineAcademy/Video/03_q3vovq.mp4', 0, 0, 16, '2021-03-19 09:08:41', 1),
(101, 4, 'Cài đặt và cấu hình các dịch vụ cơ bản', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134104/OnlineAcademy/Video/04_jrxr4n.mp4', 0, 0, 16, '2021-03-19 09:08:41', 1),
(102, 1, 'Giới thiệu', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134157/OnlineAcademy/Video/1_h32box.mp4', 0, 1, 17, '2021-03-19 09:08:41', 1),
(103, 2, 'Kiến thức cơ bản về dòng DC, điện từ trường, dòng AC', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134104/OnlineAcademy/Video/02_jm6ws3.mp4', 0, 0, 17, '2021-03-19 09:08:41', 1),
(104, 3, 'Hướng dẫn sử dụng các thiết bị trong sửa  chữa', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134105/OnlineAcademy/Video/03_q3vovq.mp4', 0, 0, 17, '2021-03-19 09:08:41', 1),
(105, 4, 'Linh kiệnđiện tử thụ động', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134104/OnlineAcademy/Video/04_jrxr4n.mp4', 0, 0, 17, '2021-03-19 09:08:41', 1),
(106, 5, 'Linh kiện bán dẫn', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134105/OnlineAcademy/Video/05_dg1edh.mp4', 0, 0, 17, '2021-03-19 09:08:41', 1),
(107, 6, 'Một số linh kiện khác', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134105/OnlineAcademy/Video/06_rieoa7.mp4', 0, 0, 17, '2021-03-19 09:08:41', 1),
(108, 7, 'Tổng kết', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134104/OnlineAcademy/Video/07_zjxlrw.mp4', 0, 0, 17, '2021-03-19 09:08:41', 1),
(109, 1, 'Giới thiệu', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134157/OnlineAcademy/Video/1_h32box.mp4', 0, 1, 18, '2021-03-19 09:08:41', 1),
(110, 2, 'Các IC (mạch tích hợp) thông dụng', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134104/OnlineAcademy/Video/02_jm6ws3.mp4', 0, 0, 18, '2021-03-19 09:08:41', 1),
(111, 3, 'Các máy điện tử thường gặp trên các thiết bị điện tử - máy tính - điện lạnh', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134105/OnlineAcademy/Video/03_q3vovq.mp4', 0, 0, 18, '2021-03-19 09:08:41', 1),
(112, 4, 'Tổng kết', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134104/OnlineAcademy/Video/04_jrxr4n.mp4', 0, 0, 18, '2021-03-19 09:08:41', 1),
(113, 1, 'Các khái niệm cơ bản ', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134157/OnlineAcademy/Video/1_h32box.mp4', 0, 1, 19, '2021-03-19 09:08:41', 1),
(114, 2, 'Phương pháp luận về phát triển một hệ thống thông tin (HTTT)', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134104/OnlineAcademy/Video/02_jm6ws3.mp4', 0, 0, 19, '2021-03-19 09:08:41', 1),
(115, 3, 'Quy trình phát triển thết kế hệ thống hướng cấu trúc', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134105/OnlineAcademy/Video/03_q3vovq.mp4', 0, 0, 19, '2021-03-19 09:08:41', 1),
(116, 4, 'Các kỹ thuật phân tích cơ bản', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134104/OnlineAcademy/Video/04_jrxr4n.mp4', 0, 0, 19, '2021-03-19 09:08:41', 1),
(117, 5, 'Các kỹ thuật thiết kế cơ bản', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134105/OnlineAcademy/Video/05_dg1edh.mp4', 0, 0, 19, '2021-03-19 09:08:41', 1),
(118, 6, 'Kỹ nghệ phần mềm hướng đối tượng', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134105/OnlineAcademy/Video/06_rieoa7.mp4', 0, 0, 19, '2021-03-19 09:08:41', 1),
(119, 7, 'Quá trình phát triển phần mềm hướng đối tượng', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134104/OnlineAcademy/Video/07_zjxlrw.mp4', 0, 0, 19, '2021-03-19 09:08:41', 1),
(120, 1, 'Giới thiệu về nội dung và cách thức ôn thi', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134157/OnlineAcademy/Video/1_h32box.mp4', 0, 1, 20, '2021-03-19 09:08:41', 1),
(121, 2, 'Các khái niệm cơ bản về test và các độ đo', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134104/OnlineAcademy/Video/02_jm6ws3.mp4', 0, 0, 20, '2021-03-19 09:08:41', 1),
(122, 3, 'Quy trình test', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134105/OnlineAcademy/Video/03_q3vovq.mp4', 0, 0, 20, '2021-03-19 09:08:41', 1),
(123, 4, 'Quản lý hoạt động test', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134104/OnlineAcademy/Video/04_jrxr4n.mp4', 0, 0, 20, '2021-03-19 09:08:41', 1),
(124, 5, 'Kỹ thuật thiết kế test case', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134105/OnlineAcademy/Video/05_dg1edh.mp4', 0, 0, 20, '2021-03-19 09:08:41', 1),
(125, 6, 'Test đặc điểm chất lượng phần mềm', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134105/OnlineAcademy/Video/06_rieoa7.mp4', 0, 0, 20, '2021-03-19 09:08:41', 1),
(126, 7, 'Quản lý lỗi', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134104/OnlineAcademy/Video/07_zjxlrw.mp4', 0, 0, 20, '2021-03-19 09:08:41', 1),
(127, 8, 'Cải tiến quy trình test', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134107/OnlineAcademy/Video/08_uinrpk.mp4', 0, 0, 20, '2021-03-19 09:08:41', 1),
(128, 9, 'Test tools và automation', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134107/OnlineAcademy/Video/09_kvssh1.mp4', 0, 0, 20, '2021-03-19 09:08:41', 1),
(129, 10, 'Kỹ năng của con người và khả năng xây dựng team', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134107/OnlineAcademy/Video/10_rcvobe.mp4', 0, 0, 20, '2021-03-19 09:08:41', 1),
(130, 1, 'Xây dựng chương trình thức nghiệm tin học ', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134157/OnlineAcademy/Video/1_h32box.mp4', 0, 1, 21, '2021-03-19 09:08:41', 1),
(131, 2, 'Kỹ thuật trình bày dữ liệu với ajax', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134104/OnlineAcademy/Video/02_jm6ws3.mp4', 0, 0, 21, '2021-03-19 09:08:41', 1),
(132, 3, 'Kỹ thuật phân trang bằng ajax', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134105/OnlineAcademy/Video/03_q3vovq.mp4', 0, 0, 21, '2021-03-19 09:08:41', 1),
(133, 4, 'Lấy tin tự động bằng cách khai thác RSS', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134104/OnlineAcademy/Video/04_jrxr4n.mp4', 0, 0, 21, '2021-03-19 09:08:41', 1),
(134, 5, 'Lấy tin tự động bằng Regular Expression', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134105/OnlineAcademy/Video/05_dg1edh.mp4', 0, 0, 21, '2021-03-19 09:08:41', 1),
(135, 6, 'Lấy tin tự động bằng DOM', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134105/OnlineAcademy/Video/06_rieoa7.mp4', 0, 0, 21, '2021-03-19 09:08:41', 1),
(136, 7, 'Sử dụng .HTACCESS trong ứng dụng web', 'https://res.cloudinary.com/dzyfkhpce/video/upload/v1616134104/OnlineAcademy/Video/07_zjxlrw.mp4', 0, 0, 21, '2021-03-19 09:08:41', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `ratedetail`
--

DROP TABLE IF EXISTS `ratedetail`;
CREATE TABLE IF NOT EXISTS `ratedetail` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `UsersId` int(11) DEFAULT NULL,
  `CategoryId` int(11) DEFAULT NULL,
  `RateValue` int(11) DEFAULT NULL,
  `Cmt` varchar(10000) DEFAULT NULL,
  `RateTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`Id`) USING BTREE,
  KEY `CategoryId` (`CategoryId`) USING BTREE,
  KEY `UsersId` (`UsersId`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- Đang đổ dữ liệu cho bảng `ratedetail`
--

INSERT INTO `ratedetail` (`Id`, `UsersId`, `CategoryId`, `RateValue`, `Cmt`, `RateTime`) VALUES
(1, 8, 1, 5, 'Khóa học này hữu ích, giúp hiểu được ngôn ngữ cơ bản.', '2021-03-19 17:20:05');

--
-- Bẫy `ratedetail`
--
DROP TRIGGER IF EXISTS `UpdateRate`;
DELIMITER $$
CREATE TRIGGER `UpdateRate` AFTER INSERT ON `ratedetail` FOR EACH ROW UPDATE CATEGORY SET RATE = (SELECT ROUND(SUM(RATEVALUE) / COUNT(USERSID),1) 
FROM ratedetail
WHERE CategoryId = NEW.CATEGORYID)
WHERE CategoryId = NEW.CATEGORYID
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `resdetail`
--

DROP TABLE IF EXISTS `resdetail`;
CREATE TABLE IF NOT EXISTS `resdetail` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `UsersId` int(11) DEFAULT NULL,
  `CategoryId` int(11) DEFAULT NULL,
  `CostEach` decimal(18,2) DEFAULT NULL,
  `ResTime` timestamp NULL DEFAULT NULL,
  `IsActive` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`Id`) USING BTREE,
  KEY `CategoryId` (`UsersId`) USING BTREE,
  KEY `UsersId` (`UsersId`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- Đang đổ dữ liệu cho bảng `resdetail`
--

INSERT INTO `resdetail` (`Id`, `UsersId`, `CategoryId`, `CostEach`, `ResTime`, `IsActive`) VALUES
(1, 8, 1, '0.00', NULL, 1);

--
-- Bẫy `resdetail`
--
DROP TRIGGER IF EXISTS `UpdatePoint_Users`;
DELIMITER $$
CREATE TRIGGER `UpdatePoint_Users` AFTER INSERT ON `resdetail` FOR EACH ROW UPDATE Users
SET POINT = POINT - (SELECT CostEach
                      FROM resdetail
               WHERE CATEGORYID = NEW.CATEGORYID AND USERSID = NEW.USERSID)
                     WHERE USERSID = NEW.USERSID
$$
DELIMITER ;
DROP TRIGGER IF EXISTS `UpdateQuanRes_Category`;
DELIMITER $$
CREATE TRIGGER `UpdateQuanRes_Category` AFTER INSERT ON `resdetail` FOR EACH ROW UPDATE Category
SET QUANRES = (SELECT COUNT(UsersId)
                      FROM resdetail
               WHERE CATEGORYID = NEW.CATEGORYID)
                     WHERE CATEGORYID = NEW.CATEGORYID
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `UsersId` int(11) NOT NULL AUTO_INCREMENT,
  `Email` varchar(255) DEFAULT NULL,
  `Password` varchar(255) DEFAULT NULL,
  `DislayName` varchar(255) DEFAULT NULL,
  `Image` longtext,
  `TeacherNote` longtext,
  `Point` decimal(18,2) DEFAULT NULL,
  `JobId` int(11) DEFAULT NULL,
  `Created_At` timestamp NULL DEFAULT NULL,
  `rfToken` varchar(255) DEFAULT NULL,
  `Telephone` varchar(255) DEFAULT NULL,
  `OTP` varchar(255) DEFAULT NULL,
  `OTP_Confim` bit(1) DEFAULT b'0',
  `IsActive` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`UsersId`) USING BTREE,
  KEY `Jobid` (`JobId`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`UsersId`, `Email`, `Password`, `DislayName`, `Image`, `TeacherNote`, `Point`, `JobId`, `Created_At`, `rfToken`, `Telephone`, `OTP`, `OTP_Confim`, `IsActive`) VALUES
(1, 'admin@gmail.com', '$2a$04$28gE9ffkoJxhJ0mHaJxmtOv29LVVAX7kCKsIR7phJErKxRpbsQjsG', 'Admin', 'https://res.cloudinary.com/dzyfkhpce/image/upload/v1616132109/OnlineAcademy/Avatar/avata_ywn2ea.png', NULL, '1000000.00', 1, '2021-01-31 17:00:00', '7uz1u9TCTyubmryncvJNYWxXkMOaSX9b', NULL, NULL, b'1', 1),
(2, 'nndkhoa@fit.hcmus.edu.vn', '$2a$04$28gE9ffkoJxhJ0mHaJxmtOv29LVVAX7kCKsIR7phJErKxRpbsQjsG', 'Ngô Ngọc Đăng Khoa', 'https://res.cloudinary.com/dzyfkhpce/image/upload/v1616132109/OnlineAcademy/Avatar/avata_ywn2ea.png', '<div>Giảng viên Khoa Công nghệ Thông tin, Trường ĐH KHTN, ĐHQG-HCM</div><br><div><strong>Học vị:</strong> Thạc sĩ </div><br><div> Lĩnh vực/ bộ môn giảng dạy: </div><li>Công nghệ phần mềm</li>\r\n', '1000000.00', 3, '2021-01-31 17:00:00', 'EkSPwRLconL7nu726eJmdltIjr1UoWIP', NULL, '190321', b'1', 1),
(3, 'hthvy@fit.hcmus.edu.vn', '$2a$04$28gE9ffkoJxhJ0mHaJxmtOv29LVVAX7kCKsIR7phJErKxRpbsQjsG', 'Hồ Thị Hoàng Vy', 'https://res.cloudinary.com/dzyfkhpce/image/upload/v1616132109/OnlineAcademy/Avatar/avata_ywn2ea.png', '<div>Giảng viên Khoa Công nghệ Thông tin, Trường ĐH KHTN, ĐHQG-HCM</div><br><div><strong>Học vị:</strong> Thạc sĩ </div><br><div> Lĩnh vực/ bộ môn giảng dạy: </div><li>Hệ thống thông tin</li>', '1000000.00', 3, '2021-01-31 17:00:00', 'VlK4kisWTuS8VpOvy2i2G8k0lL98ysHb', NULL, '190321', b'1', 1),
(4, 'htbtran@fit.hcmus.edu.vn', '$2a$04$28gE9ffkoJxhJ0mHaJxmtOv29LVVAX7kCKsIR7phJErKxRpbsQjsG', 'Huỳnh Thụy Bảo Trân', 'https://res.cloudinary.com/dzyfkhpce/image/upload/v1616132109/OnlineAcademy/Avatar/avata_ywn2ea.png', '<div>Giảng viên Khoa Công nghệ Thông tin, Trường ĐH KHTN, ĐHQG-HCM</div><br><div><strong>Học vị:</strong> Thạc sĩ </div><br><div> Lĩnh vực/ bộ môn giảng dạy: </div><li>Công nghệ phần mềm</li>', '1000000.00', 3, '2021-01-31 17:00:00', 'VlK4kisWTuS8VpOvy2i2G8k0lL98ysHb', NULL, '190321', b'1', 1),
(5, 'ttson@fit.hcmus.edu.vn', '$2a$04$28gE9ffkoJxhJ0mHaJxmtOv29LVVAX7kCKsIR7phJErKxRpbsQjsG', 'Trần Thái Sơn', 'https://res.cloudinary.com/dzyfkhpce/image/upload/v1616132109/OnlineAcademy/Avatar/avata_ywn2ea.png', '<div>Giảng viên Khoa Công nghệ Thông tin, Trường ĐH KHTN, ĐHQG-HCM</div><br><div><strong>Học vị:</strong> Thạc sĩ </div><br><div> Lĩnh vực/ bộ môn giảng dạy: </div><li>Khoa học Máy tính</li>', '1000000.00', 3, '2021-01-31 17:00:00', 'VlK4kisWTuS8VpOvy2i2G8k0lL98ysHb', NULL, '190321', b'1', 1),
(6, 'btlen@fit.hcmus.edu.vn', '$2a$04$28gE9ffkoJxhJ0mHaJxmtOv29LVVAX7kCKsIR7phJErKxRpbsQjsG', 'Bùi Tiến Lên', 'https://res.cloudinary.com/dzyfkhpce/image/upload/v1616132109/OnlineAcademy/Avatar/avata_ywn2ea.png', '<div>Giảng viên Khoa Công nghệ Thông tin, Trường ĐH KHTN, ĐHQG-HCM</div><br><div><strong>Học vị:</strong> Tiến sĩ</div><br><div> Lĩnh vực/ bộ môn giảng dạy: </div><li>Khoa học máy tính</li><li>Trí tuệ nhân tạo\r\n</li><li>Kỹ thuật lập trình</li>\r\n', '1000000.00', 3, '2021-01-31 17:00:00', 'vQPfySTC4Un4pV3p1DIYtV18ULygMi3P', NULL, '190321', b'1', 1),
(7, '19424031@student.hcmus.edu.vn', '$2a$04$28gE9ffkoJxhJ0mHaJxmtOv29LVVAX7kCKsIR7phJErKxRpbsQjsG', 'Oanh Nguyễn', 'https://res.cloudinary.com/dzyfkhpce/image/upload/v1616132109/OnlineAcademy/Avatar/avata_ywn2ea.png', '', '1000000.00', 2, '2021-01-31 17:00:00', 'VlK4kisWTuS8VpOvy2i2G8k0lL98ysHb', NULL, '190321', b'1', 1),
(8, '19424033@student.hcmus.edu.vn', '$2a$04$28gE9ffkoJxhJ0mHaJxmtOv29LVVAX7kCKsIR7phJErKxRpbsQjsG', 'Phong Huỳnh', 'https://res.cloudinary.com/dzyfkhpce/image/upload/v1616132109/OnlineAcademy/Avatar/avata_ywn2ea.png', '', '1000000.00', 2, '2021-01-31 17:00:00', 'Yd9WFaUTJ1tIWAGx1CNbwAgIW5V772DN', NULL, '190321', b'1', 1),
(9, '19424044@student.hcmus.edu.vn', '$2a$04$28gE9ffkoJxhJ0mHaJxmtOv29LVVAX7kCKsIR7phJErKxRpbsQjsG', 'Nguyễn Mai Thi', 'https://res.cloudinary.com/dzyfkhpce/image/upload/v1616132109/OnlineAcademy/Avatar/avata_ywn2ea.png', '', '1000000.00', 2, '2021-01-31 17:00:00', 'VlK4kisWTuS8VpOvy2i2G8k0lL98ysHb', NULL, '190321', b'1', 1),
(10, '19424052@student.hcmus.edu.vn', '$2a$04$28gE9ffkoJxhJ0mHaJxmtOv29LVVAX7kCKsIR7phJErKxRpbsQjsG', 'Hà Minh Bảo Toàn', 'https://res.cloudinary.com/dzyfkhpce/image/upload/v1616132109/OnlineAcademy/Avatar/avata_ywn2ea.png', '', '1000000.00', 2, '2021-01-31 17:00:00', 'VlK4kisWTuS8VpOvy2i2G8k0lL98ysHb', NULL, '190321', b'1', 1);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `category`
--
ALTER TABLE `category` ADD FULLTEXT KEY `CategoryName` (`CategoryName`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users` ADD FULLTEXT KEY `DislayName` (`DislayName`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
