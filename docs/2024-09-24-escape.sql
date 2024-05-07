-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 192.168.10.10:3306
-- Erstellungszeit: 24. Apr 2024 um 09:31
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

--
-- Daten für Tabelle `clues`
--

INSERT INTO `clues` (`id`, `riddle_id`, `type`, `text`, `tool`, `cost`) VALUES
(1, 1, 'text', 'Es sind die Anfangsbuchstaben bestimmter Wörter.', '', 3),
(2, 1, 'text', 'Wörter in gleichem Abstand', 'wordsequencer', 4),
(3, 2, 'text', 'Zähle die Buchstaben in bestimmten Abständen ...', 'charsequencer', 6),
(4, 4, 'text', 'Hier gibt es die Schablone ...', 'template', 0),
(5, 4, 'text', 'Du könntest es auch andersherum probieren.', '', 3),
(6, 4, 'text', 'Das gesuchte Wort beginnt mit einem \"s\"', '', 5),
(7, 5, 'text', 'Der erste Hinweis: Im Text werden einzelne Wörter gesucht', '', 3),
(8, 5, 'text', 'In gleichem Abstand', 'wordsequencer', 4),
(9, 3, 'text', 'Es werden bestimmte Wörter gesucht.', '', 2),
(10, 3, 'text', 'In gleichbleibenden Abständen.', 'wordsequencer', 3),
(11, 3, 'text', 'Löse das Rätsel im Rätsel.', '', 2),
(12, 6, 'text', 'Über kurz oder lang wirst du es schaffen!', '', 3),
(13, 6, 'text', '1791 - 1872', '', 3),
(14, 7, 'text', 'Wörter in einer bestimmten Reihenfolge', 'wordsequencer', 5);

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
(3, 'Null-Chiffre', 'nullchiffre', '{\"background-color\":\"#CC0000\",\"background-image\":\"main.png\",\"background-position\":\"center\",\"background-size\":\"cover\"}', '2024-04-12 09:47:40', '2024-04-12 09:47:40'),
(4, 'Null-Chiffre-Demo', 'nullchiffre-demo', '{\"background-color\":\"#CC0000\",\"background-image\":\"main.png\",\"background-position\":\"center\",\"background-size\":\"cover\"}', '2024-04-12 09:47:40', '2024-04-12 09:47:40');

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
(52, 3, 'test', 'player', 10, '2024-04-12 09:47:40', '2024-04-24 09:21:32'),
(53, 3, 'FF463XZ', 'player', 0, '2024-04-12 09:47:40', '2024-04-12 09:47:40'),
(54, 3, 'GC139YU', 'player', 0, '2024-04-12 09:47:40', '2024-04-12 09:47:40'),
(55, 4, 'demo', 'player', 3, '2024-04-12 09:47:40', '2024-04-23 10:05:58');

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
  `type` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'text',
  `task` varchar(1024) COLLATE utf8mb4_unicode_ci NOT NULL,
  `input` varchar(1024) COLLATE utf8mb4_unicode_ci NOT NULL,
  `chiffre` varchar(1024) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Daten für Tabelle `riddles`
--

INSERT INTO `riddles` (`id`, `house_id`, `name`, `content`, `styles`, `gain`, `type`, `task`, `input`, `chiffre`) VALUES
(1, 3, 'Sports of the Mind', '<p>\"Sports of the Mind\" ist eine Metapher, die verwendet wird, um irgendwelche Aktivitäten und geistige Herausforderungen zu nennen, die ähnlich wie körperliche Sportarten trainierbar sind. Es bezieht sich auf Yogaübungen, die das Gehirn und auch per definitionem den Geist fordern und intensiv trainieren, ähnlich wie körperliche Übungen sich des Körpers annehmen.\nZu den chronischen Aktivitäten, die man getrost zu heutigen \"Sports of the Mind\" („Neudeutsch“) erklären kann, gehören Denkspiele als auch Rätsel wie Kreuzworträtsel, Sudoku, Logikrätsel, Schach, Tangram, Memory und andere. Diese Aktivitäten erfordern kognitive Fähigkeiten wie Problemlösung, sogenanntes X-Thinking, Konzentration, Gedächtnis und auch ein taktisches und strategisches Denken.\nViele Menschen aber genießen es, an den Aktivitäten und Aktionen aus dem Bereich des \"Sports of the Mind\" teilzunehmen, um die geistige Fitness und ihre kognitiven Erfolge zu verbessern. Durch regelmäßiges und routiniertes Training können sie ihr Denkvermögen konstant schärfen, ihr Gedächtnis stärken und obendrein ihre kognitiven Fähigkeiten aufrechterhalten.\nDie neuen \"Sports of the Mind\" können sehr wohl auch als unterhaltsame und ebenso als herausfordernde Aktivitäten betrachtet werden, reihen sie sich doch in die vielen Aktivitäten ein, die Spaß machen, etwa auch dazu beitragen, Stress abzubauen, natürlich auch die geistige Gesundheit zu dehnen. Sie sind eine großartige Möglichkeit, obendrein das Gehirn zu stimulieren und so gleichzeitig Freude und Erfüllung zu erfahren.\n</p>\n', '{\"background-image\":\"img-mBbcUfqvEvwpuZlt1fPFXDO5.png\",\"background-size\":\"cover\"}', 10, 'text', '', '{\"type\":\"textarea\",\"label\":\"Finde die geheime Botschaft\"}', '{\"type\":\"words\",\"sequence\":\"5\",\"solution\":\"ein typischer text aus der konservendose\"}'),
(2, 3, 'Queen\'s Gambit', 'Der Ausdruck Gambit wurde erstmalig 1561 im Werk eines Spaniers, Ruy Lónez de Segura, verwendet. Das Wort klingt italienisch, ist, wie Ruy Lónez anpreist, wie es scheint, einer Fachbezeichnung des Ranglsports entlehnt, etwa ganz in dem Sinne: dare il gambetto (Bein stellen). Trotz Verwendung sollte der Begriff planlos in anderen Sprachen neu aufscheinen. Dazu erschien es völlig unwahrscheinlich, noch andere Quellen heranzuziehen.', '{\"background-color\":\"blue\",\"background-image\":\"Das-Damengambit-Anya-Taylor-Joy.jpg\",\"background-position\":\"center top\"}', 10, 'text', '', '{\"type\":\"textarea\",\"label\":\"Finde die geheime Botschaft\"}', '{\"type\":\"words\",\"sequence\":\"5\",\"solution\":\"bienen spielen toll schach\"}'),
(3, 3, 'Birds on a Wire', '\"Birds on a wire\", Geheimschrift Nummer 7 von 10, zu deutsch in etwa \"Vögel auf einem Drahtseil\", einzelne umrissartige Vögel sitzen, nach genauem Hinsehen, in unterscheidbaren Posen auf einem Draht. Haltung und Richtung auf dem Draht stehen für Buchstaben.\nDer schwarze Draht ist mit einer Zeile vergleichbar. An einer Haltung erkennt man, welcher Buchstabe gemeint wird. Wenn von den Vögeln bloß keiner abgeschossen wird! Durch Analyse der Symbole und wie sie gereiht werden, entsteht dann für viele nicht der Eindruck eines Codes, es sind vielmehr verdeckte Botschaften. Damit könnte man noch den Code der Steganografie zurechnen, denn da geht es ums Verstecken.', '{\"background-image\":\"birds_on_a_line.png\"}', 10, 'text', '', '{\"type\":\"text\",\"label\":\"Ein Rätsel im Rätsel\"}', '{\"type\":\"words\",\"sequence\":\"5\",\"solution\":\"0\"}'),
(4, 3, 'Definition', '{\"background\":{\"url\":\"stegano.jpg\",\"width\":\"520\",\"height\":\"467\"},\"template\":{\"url\":\"stegano.png\",\"width\":\"402\",\"height\":\"319\",\"style\":\"display:block;\",\"rotation\":\"90\"}}', '{\"background-image\":\"img-2FHxnubKveTwv2pvqaqzM71V.png\",\"background-size\":\"cover\"}', 10, 'template', '', '{\"type\":\"text\",\"label\":\"Finde das geheime Wort!\"}', '{\"type\":\"words\",\"sequence\":\"5\",\"solution\":\"steganografie\"}'),
(5, 4, 'Null-Chiffre', '<p>Die Null-Chiffre auch bekannt als Null-Cipher, bezieht sich tatsächlich auf eine Art von Verschlüsselungstechnik, die weit verbreitet ist. Bei der Null-Chiffre wird keine spezifische Verschlüsselungsmethode verwendet. Die Methode lässt stattdessen den Klartext einfach stehen, die Null-Chiffre ist ohne jede Form von Verschlüsselung oder Substitution. Leicht kann es dazu führen, dass der chiffrierte Text für Unbefugte lesbar ist, da keine Verschlüsselung angewendet wird. Hacker, zum Beispiel, haben leichtes Spiel. Deshalb kann sie zu der Kategorie der unsicheren Verschlüsselungsmethoden gezählt werden, da knacken einfach ist. Daher lieber fortschrittlichere Verschlüsselungsmethoden verwenden.</p>\r\n', NULL, 10, 'text', '', '{\"type\":\"textarea\",\"label\":\"Finde die geheime Botschaft\"}', '{\"type\":\"words\",\"sequence\":\"5\",\"solution\":\"ein typischer text aus der konservendose\"}'),
(6, 3, 'Geheime Botschaft', '{\"background\":{\"url\":\"geheim.png\"\r\n}}', '{\"background-image\":\"geheim.png\",\"background-size\":\"cover\"}', 10, 'template', '', '{\"type\":\"text\",\"label\":\"Finde die Botschaft!\"}', '{\"type\":\"words\",\"sequence\":\"5\",\"solution\":\"der feind ist nahe\"}'),
(7, 3, 'numerus primus', 'Unter einer Primzahl, sie kann durch nichts geteilt werden, außer durch eins, die Zahl selbst. Die Lappen  allein gehen von zwei Teilern aus. \nDer Grieche Euklid hat aus bekannten guten Gründen logisch und folgerichtig geschlossen, es können so unendlich viele Primzahlen sein; Grundlage für diese Aussage von Euklid ist sein Satz. Von einigen neueren Varianten der sogenannten asymmetrischen Verschlüsselungen, sie bilden sich daraus, so wird behauptet.', '{\"background-image\":\"img-aB0xzte1TPJXjYu2V3ZFD5io.png\"}', 10, 'text', '', '{\"type\":\"textarea\",\"label\":\"Nomen est omen\"}', '{\"type\":\"words\",\"sequence\":\"5\",\"solution\":\"einer Primzahl kann nichts durch die lappen gehen aus bekannten gründen können Primzahlen Grundlage von einigen verschlüsselungen bilden\"}');

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
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT für Tabelle `clue_states`
--
ALTER TABLE `clue_states`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT für Tabelle `houses`
--
ALTER TABLE `houses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT für Tabelle `players`
--
ALTER TABLE `players`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT für Tabelle `riddles`
--
ALTER TABLE `riddles`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT für Tabelle `riddle_states`
--
ALTER TABLE `riddle_states`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

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
