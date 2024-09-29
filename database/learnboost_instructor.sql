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
-- Table structure for table `instructor`
--

DROP TABLE IF EXISTS `instructor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `instructor` (
  `instr_id` int NOT NULL AUTO_INCREMENT,
  `instr_name` text,
  `instr_biography` text,
  `profile_img` text,
  `instr_title` text,
  `english_name` text,
  PRIMARY KEY (`instr_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `instructor`
--

LOCK TABLES `instructor` WRITE;
/*!40000 ALTER TABLE `instructor` DISABLE KEYS */;
INSERT INTO `instructor` VALUES (1,'อภิรักษ์ ปนาทกูล','ผมมี Passion กับการช่วยงานคนอื่น ผมชอบที่จะเตรียมเครื่องมือให้คนอื่นได้ใช้ เพื่อให้เค้าทำงานให้ได้อย่างเต็มศักยภาพของเค้า โดยที่ไม่ต้องเสียสมาธิกับการเรียนรู้เครื่องมือ หรือไม่ต้องตั้งสมาธิถึงจะใช้เครื่องมือได้ เพราะถ้าเค้าต้องตั้งใจใช้เครื่องมือขนาดนั้น จะทำให้เค้ามีสมาธิกับงานของตัวเองน้อยลง ยิ่งเค้าทำงานได้ดีเท่าไหรผมก็มีความสุขเท่านั้น และนั่นทำให้ผมเลือกมาทำอาชีพ UX เพราะวินาทีนี้ อาชีพนี้ช่วยให้ผมทำสิ่งที่ผมรักได้เต็มที่','https://public-assets.skooldio.com/storefront-category%2F78689285-39da-4129-9ddd-e54c0a14ca31%2FApirak-Panatkool.png','Founder of UX Academy และอดีต Google Developers Expert in UX/UI','apirak-panatkool'),(2,'ชาคริต ฤทธาคนี','Technical Lead Innovation Studio Southeast Asia, ThoughtWorks','https://public-assets.skooldio.com/storefront-category%2Fee58ba74-ebb5-45c3-afb4-96f413cbe441%2Fchris-chakrit.jpg','Technical Lead Innovation Studio Southeast Asia, ThoughtWorks','chris-chakrit'),(3,'พงศกร ธีรภาพวงศ์','อดีต Senior Software Development Engineer ที่ Amazon.com','https://public-assets.skooldio.com/storefront-category%2F44635e6b-11b5-47b9-9c74-bbbb62314c1f%2Fpongsakorn.jpeg','CTO ที่ Hato Hub','pongsakorn-teeraparpwong'),(4,'ธนนท์ วงษ์ประยูร','Lead Designer ที่ Ko-fi','https://public-assets.skooldio.com/storefront-category%2F141f219a-3681-4aa6-b05d-a41284ea1727%2Fthanon.png','Lead Designer ที่ Ko-fi','thanon-vongprayoon');
/*!40000 ALTER TABLE `instructor` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-09-29 17:59:16
