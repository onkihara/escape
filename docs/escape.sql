-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 192.168.10.10:3306
-- Erstellungszeit: 06. Mai 2023 um 15:21
-- Server-Version: 5.7.9
-- PHP-Version: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `escape`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `houses`
--

CREATE TABLE `houses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hash` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Daten für Tabelle `houses`
--

INSERT INTO `houses` (`id`, `name`, `hash`, `created_at`, `updated_at`) VALUES
(1, 'default', 'default', '2023-05-02 08:41:55', '2023-05-02 08:41:55'),
(2, 'DSB-Vault', 'dsb-vault', '2023-05-04 06:39:57', '2023-05-04 06:39:57');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `players`
--

CREATE TABLE `players` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `house_id` bigint(20) UNSIGNED NOT NULL,
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'user',
  `rank` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Daten für Tabelle `players`
--

INSERT INTO `players` (`id`, `house_id`, `key`, `role`, `rank`, `created_at`, `updated_at`) VALUES
(1, 1, 'ESMineral4', 'root', 0, '2023-05-02 08:41:55', '2023-05-02 08:41:55'),
(2, 2, 'BS086PX', 'player', 0, '2023-05-04 06:39:57', '2023-05-04 06:39:57'),
(3, 2, 'DQ392WJ', 'player', 0, '2023-05-04 06:39:57', '2023-05-04 06:39:57'),
(4, 2, 'TU161BF', 'player', 0, '2023-05-04 06:39:57', '2023-05-05 10:33:57'),
(5, 2, 'ZT475AP', 'player', 0, '2023-05-04 06:39:57', '2023-05-05 10:01:54'),
(6, 2, 'FJ812NW', 'player', 0, '2023-05-04 06:39:57', '2023-05-04 06:39:57'),
(7, 2, 'CD655YD', 'player', 0, '2023-05-05 12:16:10', '2023-05-05 12:16:10'),
(8, 2, 'SF914YH', 'player', 0, '2023-05-05 12:16:10', '2023-05-05 12:16:10'),
(9, 2, 'QC771HJ', 'player', 0, '2023-05-05 12:16:10', '2023-05-05 12:16:10'),
(10, 2, 'JG401PB', 'player', 0, '2023-05-05 12:16:10', '2023-05-05 12:16:10'),
(11, 2, 'BH795JH', 'player', 0, '2023-05-05 12:16:10', '2023-05-05 12:16:10'),
(12, 2, 'HB939KC', 'player', 0, '2023-05-05 12:16:10', '2023-05-05 12:16:10'),
(13, 2, 'XE384SZ', 'player', 0, '2023-05-05 12:16:10', '2023-05-05 12:16:10'),
(14, 2, 'NW476FH', 'player', 0, '2023-05-05 12:16:10', '2023-05-05 12:16:10'),
(15, 2, 'ZH670US', 'player', 0, '2023-05-05 12:16:10', '2023-05-05 12:16:10'),
(16, 2, 'NW556GW', 'player', 0, '2023-05-05 12:16:10', '2023-05-05 12:16:10'),
(17, 2, 'XP327NQ', 'player', 0, '2023-05-05 12:16:10', '2023-05-05 12:16:10'),
(18, 2, 'NZ747KT', 'player', 0, '2023-05-05 12:16:10', '2023-05-05 12:16:10'),
(19, 2, 'SP178XP', 'player', 0, '2023-05-05 12:16:10', '2023-05-05 12:16:10'),
(20, 2, 'UU560SF', 'player', 0, '2023-05-05 12:16:10', '2023-05-05 12:16:10'),
(21, 2, 'EX350EE', 'player', 0, '2023-05-05 12:16:10', '2023-05-05 12:16:10'),
(22, 2, 'AC614ZB', 'player', 0, '2023-05-05 12:16:10', '2023-05-05 12:16:10'),
(23, 2, 'UQ324RH', 'player', 0, '2023-05-05 12:16:10', '2023-05-05 12:16:10'),
(24, 2, 'YP944MD', 'player', 0, '2023-05-05 12:16:10', '2023-05-05 12:16:10'),
(25, 2, 'SS596GW', 'player', 0, '2023-05-05 12:16:10', '2023-05-05 12:16:10'),
(26, 2, 'EG512GR', 'player', 0, '2023-05-05 12:16:10', '2023-05-05 12:16:10'),
(27, 2, 'UB669VY', 'player', 0, '2023-05-05 12:16:10', '2023-05-05 12:16:10'),
(28, 2, 'HR664TG', 'player', 0, '2023-05-05 12:16:10', '2023-05-05 12:16:10'),
(29, 2, 'XV565RB', 'player', 0, '2023-05-05 12:16:10', '2023-05-05 12:16:10'),
(30, 2, 'DP283QN', 'player', 0, '2023-05-05 12:16:10', '2023-05-05 12:16:10'),
(31, 2, 'SY201XG', 'player', 0, '2023-05-05 12:16:10', '2023-05-05 12:16:10'),
(32, 2, 'XB718BQ', 'player', 0, '2023-05-05 12:16:10', '2023-05-05 12:16:10'),
(33, 2, 'RD627SM', 'player', 0, '2023-05-05 12:16:10', '2023-05-05 12:16:10'),
(34, 2, 'YT771VK', 'player', 0, '2023-05-05 12:16:10', '2023-05-05 12:16:10'),
(35, 2, 'KA926FV', 'player', 0, '2023-05-05 12:16:10', '2023-05-05 12:16:10'),
(36, 2, 'NU261KA', 'player', 0, '2023-05-05 12:16:10', '2023-05-05 12:16:10'),
(37, 2, 'FK601PF', 'player', 0, '2023-05-05 12:16:10', '2023-05-05 12:16:10'),
(38, 2, 'VW879PN', 'player', 0, '2023-05-05 12:16:10', '2023-05-05 12:16:10'),
(39, 2, 'TS061XQ', 'player', 0, '2023-05-05 12:16:10', '2023-05-05 12:16:10'),
(40, 2, 'ZR329QF', 'player', 0, '2023-05-05 12:16:10', '2023-05-05 12:16:10'),
(41, 2, 'YD702YX', 'player', 0, '2023-05-05 12:16:10', '2023-05-05 12:16:10'),
(42, 2, 'MF732QH', 'player', 0, '2023-05-05 12:16:10', '2023-05-05 12:16:10'),
(43, 2, 'YT973VP', 'player', 0, '2023-05-05 12:16:10', '2023-05-05 12:16:10'),
(44, 2, 'YB913DD', 'player', 0, '2023-05-05 12:16:10', '2023-05-05 12:16:10'),
(45, 2, 'MC303KB', 'player', 0, '2023-05-05 12:16:10', '2023-05-05 12:16:10'),
(46, 2, 'ZD977TX', 'player', 0, '2023-05-05 12:16:10', '2023-05-05 12:16:10'),
(47, 2, 'TJ368HP', 'player', 0, '2023-05-05 12:16:10', '2023-05-05 12:16:10'),
(48, 2, 'PW589KY', 'player', 0, '2023-05-05 12:16:10', '2023-05-05 12:16:10'),
(49, 2, 'DF419YH', 'player', 0, '2023-05-05 12:16:10', '2023-05-05 12:16:10'),
(50, 2, 'VR920YC', 'player', 0, '2023-05-05 12:16:10', '2023-05-05 12:16:10'),
(51, 2, 'WW852DX', 'player', 0, '2023-05-05 12:16:10', '2023-05-05 12:16:10');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `houses`
--
ALTER TABLE `houses`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `players`
--
ALTER TABLE `players`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `house_id_key_unique` (`house_id`,`key`),
  ADD KEY `house_id_foreign` (`house_id`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `houses`
--
ALTER TABLE `houses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT für Tabelle `players`
--
ALTER TABLE `players`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- Constraints der exportierten Tabellen
--

--
-- Constraints der Tabelle `players`
--
ALTER TABLE `players`
  ADD CONSTRAINT `house_id_foreign` FOREIGN KEY (`house_id`) REFERENCES `houses` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
