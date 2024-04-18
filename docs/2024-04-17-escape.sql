-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 192.168.10.10:3306
-- Erstellungszeit: 17. Apr 2024 um 06:07
-- Server-Version: 5.7.9
-- PHP-Version: 8.2.15

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
-- Tabellenstruktur für Tabelle `clues`
--

CREATE TABLE `clues` (
  `id` bigint(20) NOT NULL,
  `riddle_id` bigint(20) NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `text` varchar(1024) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tool` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cost` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `clue_states`
--

CREATE TABLE `clue_states` (
  `id` bigint(20) NOT NULL,
  `player_id` bigint(20) NOT NULL,
  `clue_id` bigint(20) NOT NULL,
  `state` int(11) NOT NULL DEFAULT '0',
  `cost` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `houses`
--

CREATE TABLE `houses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hash` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL,
  `styles` varchar(1024) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Daten für Tabelle `houses`
--

INSERT INTO `houses` (`id`, `name`, `hash`, `styles`, `created_at`, `updated_at`) VALUES
(1, 'default', 'default', '', '2023-05-02 08:41:55', '2023-05-02 08:41:55'),
(2, 'DSB-Vault', 'dsb-vault', '', '2023-05-04 06:39:57', '2023-05-04 06:39:57'),
(3, 'Null-Chiffre', 'nullchiffre', '{\"background-color\":\"#CC0000\",\"background-image\":\"main.png\",\"background-position\":\"center\",\"background-size\":\"cover\"}', '2024-04-12 09:47:40', '2024-04-12 09:47:40');

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
(22, 3, 'AC614ZB', 'player', 0, '2023-05-05 12:16:10', '2023-05-05 12:16:10'),
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
(51, 2, 'WW852DX', 'player', 0, '2023-05-05 12:16:10', '2023-05-05 12:16:10'),
(52, 3, 'test', 'player', 0, '2024-04-12 09:47:40', '2024-04-12 09:47:40'),
(53, 3, 'FF463XZ', 'player', 0, '2024-04-12 09:47:40', '2024-04-12 09:47:40'),
(54, 3, 'GC139YU', 'player', 0, '2024-04-12 09:47:40', '2024-04-12 09:47:40');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `riddles`
--

CREATE TABLE `riddles` (
  `id` bigint(20) NOT NULL,
  `house_id` bigint(20) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `styles` varchar(1024) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gain` int(11) DEFAULT NULL,
  `task` varchar(1024) COLLATE utf8mb4_unicode_ci NOT NULL,
  `input` varchar(1024) COLLATE utf8mb4_unicode_ci NOT NULL,
  `chiffre` varchar(1024) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Daten für Tabelle `riddles`
--

INSERT INTO `riddles` (`id`, `house_id`, `name`, `content`, `styles`, `gain`, `task`, `input`, `chiffre`) VALUES
(1, 3, 'We will thrive!', '<h3>A room in the Garter Inn</h3>\r\n<p>O, she did so course o\'er my exteriors with such a greedy intention that the appetite of her eye did seem to scorch me up like a burning-glass. Here\'s another letter to her. She bears the purse too; she is a region in Guiana, all gold and bounty. I will be cheaters to them both, and they shall be exchequers to me; they shall be my East and West Indies, and I will trade to them both. Go, bear thou this letter to Mistress Page;—and thou this to Mistress Ford. We will thrive, lads, we will thrive.</p>\r\n', '{\"background-color\":\"rgba(0,0,0,.6)\",\"background-image\":\"falstaff.jpg\",\"background-position\":\"center top\",\"background-size\":\"contain\"}', 10, '', '{\"type\":\"textarea\",\"label\":\"Finde die geheime Botschaft\"}', '{\"type\":\"words\",\"sequence\":\"5\",\"solution\":\"test\"}'),
(2, 3, 'We will thrive again!', '<h3>A room in the Garter Inn</h3>\r\n<p>O, she did so course o\'er my exteriors with such a greedy intention that the appetite of her eye did seem to scorch me up like a burning-glass. Here\'s another letter to her. She bears the purse too; she is a region in Guiana, all gold and bounty.</p>\r\n', '{\"background-color\":\"blue\",\"background-image\":\"falstaff.jpg\",\"background-position\":\"center top\"}', 10, '', '{\"type\":\"textarea\",\"label\":\"Finde die geheime Botschaft\"}', '{\"type\":\"words\",\"sequence\":\"5\",\"solution\":\"test\"}'),
(3, 3, 'We will not thrive!', '<h3>A room in the Garter Inn</h3>\r\n<p>O, she did so course o\'er my exteriors with such a greedy intention that the appetite of her eye did seem to scorch me up like a burning-glass. Here\'s another letter to her. She bears the purse too; she is a region in Guiana, all gold and bounty.</p>\r\n', '{\"background-color\":\"blue\",\"background-image\":\"falstaff.jpg\",\"background-position\":\"center top\"}', 10, '', '{\"type\":\"textarea\",\"label\":\"Finde die geheime Botschaft\"}', '{\"type\":\"words\",\"sequence\":\"5\",\"solution\":\"test\"}');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `riddle_states`
--

CREATE TABLE `riddle_states` (
  `id` bigint(20) NOT NULL,
  `riddle_id` bigint(20) NOT NULL,
  `player_id` bigint(20) NOT NULL,
  `state` int(11) NOT NULL DEFAULT '0',
  `gain` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Daten für Tabelle `riddle_states`
--

INSERT INTO `riddle_states` (`id`, `riddle_id`, `player_id`, `state`, `gain`) VALUES
(1, 1, 52, 0, 10),
(2, 2, 52, 0, 5),
(3, 3, 52, 1, 10);

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `clues`
--
ALTER TABLE `clues`
  ADD PRIMARY KEY (`id`),
  ADD KEY `riddle_id` (`riddle_id`);

--
-- Indizes für die Tabelle `clue_states`
--
ALTER TABLE `clue_states`
  ADD PRIMARY KEY (`id`),
  ADD KEY `player_id` (`player_id`),
  ADD KEY `clue_id` (`clue_id`);

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
-- Indizes für die Tabelle `riddles`
--
ALTER TABLE `riddles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `house_id` (`house_id`);

--
-- Indizes für die Tabelle `riddle_states`
--
ALTER TABLE `riddle_states`
  ADD PRIMARY KEY (`id`),
  ADD KEY `house_id` (`riddle_id`),
  ADD KEY `player_id` (`player_id`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `clues`
--
ALTER TABLE `clues`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `clue_states`
--
ALTER TABLE `clue_states`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `houses`
--
ALTER TABLE `houses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT für Tabelle `players`
--
ALTER TABLE `players`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT für Tabelle `riddles`
--
ALTER TABLE `riddles`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT für Tabelle `riddle_states`
--
ALTER TABLE `riddle_states`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

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
