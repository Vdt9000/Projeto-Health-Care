-- health_care.logs definition

CREATE TABLE `logs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `data_hora` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `URL` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `mensagem` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;