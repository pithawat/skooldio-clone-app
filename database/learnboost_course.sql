-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: learnboost
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `course`
--

DROP TABLE IF EXISTS `course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course` (
  `course_id` int NOT NULL AUTO_INCREMENT,
  `course_name` text,
  `course_descrb` text,
  `course_rating` text,
  `course_instructor` text,
  `course_duration` text,
  `course_price` int DEFAULT NULL,
  `course_img` text,
  PRIMARY KEY (`course_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course`
--

LOCK TABLES `course` WRITE;
/*!40000 ALTER TABLE `course` DISABLE KEYS */;
INSERT INTO `course` VALUES (1,'UI Fundamentals','ออกแบบ User Interface ให้เป็นที่รักของผู้ใช้งาน',NULL,'อภิรักษ์ ปนาทกูล','6-7 ชั่วโมง',2990,'https://public-assets.skooldio.com/storefront-sku%2F3387202b-8377-4aad-953b-55505f06be90%2FUI%2520Fundamentals.png'),(2,'OOP The Right Way','เขียนโค้ดให้เป็นระบบด้วย OOP Concept',NULL,'ชาคริต ฤทธาคนี','3-4 ชั่วโมง',1490,'https://public-assets.skooldio.com/storefront-sku%2F57bf3133-2426-43ac-9dcc-3b47e4cf7c17%2FCourse%2520Card%2520_%2520OOP%2520The%2520Right%2520Way.png'),(3,'Enhancing UX Design Process with AI and ChatGPT','เก็บทุกรายละเอียดที่อาจถูกมองข้ามด้วยพลังของ AI ลดงานซับซ้อนเพิ่มพลังความ Creative เท่าตัว',NULL,'ธนนท์ วงษ์ประยูร','1-2 ชั่วโมง',990,'https://public-assets.skooldio.com/storefront-sku%2Fa4a0a830-63c8-44e6-9078-dcffe6c33d58%2FEnhancing%2520UX%2520Design%2520Process%2520with%2520AI%2520and%2520ChatGPT.png'),(4,'AWS: DevSecOps Fundamentals','พัฒนารระบบ DevOps / DevSecOps บน AWS Cloud ระดับองค์กร',NULL,'พงศกร ธีรภาพวงศ์',NULL,1490,'https://public-assets.skooldio.com/storefront-sku%2Fa8b7ef79-9a3d-46e2-8e87-e15112eefbf5%2FAWS_%2520DevSecOps%2520Fundamentals.jpg'),(5,'AWS: Well Architected Essentials','แม่นยำ Concept การออกแบบระบบ AWS และเตรียมความพร้อมสู่สนามสอบ AWS Certificate',NULL,'พงศกร ธีรภาพวงศ์',NULL,1490,'https://public-assets.skooldio.com/storefront-sku%2Fcf8cb5c0-402f-4785-9393-6be8c4241104%2FAWS_%2520Well-Architected%2520Essentials.jpg');
/*!40000 ALTER TABLE `course` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-09-29 17:59:17
