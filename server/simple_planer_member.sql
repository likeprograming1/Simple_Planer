-- MySQL dump 10.13  Distrib 8.0.32, for macos13 (x86_64)
--
-- Host: 127.0.0.1    Database: simple_planer
-- ------------------------------------------------------
-- Server version	8.0.33

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
-- Table structure for table `member`
--

DROP TABLE IF EXISTS `member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `member` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` varchar(20) NOT NULL,
  `user_name` varchar(100) NOT NULL,
  `pwd` varchar(128) NOT NULL,
  `created` datetime DEFAULT CURRENT_TIMESTAMP,
  `update_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `point` int NOT NULL,
  `email` varchar(25) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `member`
--

LOCK TABLES `member` WRITE;
/*!40000 ALTER TABLE `member` DISABLE KEYS */;
INSERT INTO `member` VALUES (1,'hans12','seoung-jin han','783732','2023-06-09 10:32:13','2023-06-20 13:45:15',0,'hsj2216@naver.com'),(2,'hans123','han','han12','2023-06-09 10:42:21','2023-06-09 10:42:21',0,''),(3,'hans1234','hans','han12','2023-06-10 19:45:01','2023-06-12 09:11:53',0,''),(4,'hans134','hans','han12','2023-06-10 19:46:56','2023-06-12 09:11:53',0,''),(13,'hans122','seoung-jin han','hans122','2023-06-12 14:39:33','2023-06-12 14:39:33',0,'hsj2216@naver.com'),(14,'has1','test1234','test1234','2023-06-20 12:56:36','2023-06-20 12:56:36',0,'test1234@naver.com'),(15,'hsss1','dasdas','test1234','2023-06-20 12:59:22','2023-06-20 12:59:22',0,'dhsad@naver.com'),(16,'test11111','test2222','188582','2023-06-20 13:31:07','2023-06-20 13:45:42',0,'rhwjdgns123@naver.com'),(17,'hsj1234567','hsj1234567','hsj1234567','2023-06-20 14:04:58','2023-06-20 14:04:58',0,'hsj2216@naver.com'),(18,'hsj1234567','hsj1234567','hsj1234567','2023-06-20 14:23:56','2023-06-20 14:23:56',0,'hsj2216@naver.com'),(19,'hsj12345678','hsj12345678','154316','2023-06-20 15:34:25','2023-06-20 15:39:46',0,'hsj2216@naver.com'),(20,'hsj56789','hsj56789','873564','2023-06-20 15:36:17','2023-06-20 15:37:19',0,'hsj2216@naver.com');
/*!40000 ALTER TABLE `member` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-28 16:09:59
