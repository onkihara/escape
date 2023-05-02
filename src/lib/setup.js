import { db } from '$lib/mysql.js';
import { error } from '@sveltejs/kit';

let connection = null;

export const setup = function(data) {

	connection = db.connect();

	// in dev only
	dropTables();

	createTables();

	createDefaults(data);

	db.close(connection);
}


function createDefaults(data) {

	const date = new Date().toISOString().slice(0, 19).replace('T', ' ');

	// default house
	let query = "INSERT INTO `houses` (`id`, `name`, `hash`, `created_at`, `updated_at`)" +
		"VALUES (1, 'default', 'default', '" + date + "', '" + date + "');";

	runQuery(query);

	// root
	query = "INSERT INTO `players` (`id`, `house_id`, `key`, `role`, `rank`, `created_at`, `updated_at`)" +
		"VALUES (1, 1, '" + data.root_key + "', 'root', 0, '" + date + "', '" + date + "');";

	runQuery(query);
}


function createTables() {

	// houses table
	let query = "CREATE TABLE IF NOT EXISTS `houses` (" +
	  "`id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT," +
	  "`name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL," +
	  "`hash` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL," +
	  "`created_at` timestamp NULL DEFAULT NULL," +
	  "`updated_at` timestamp NULL DEFAULT NULL," +
	  "PRIMARY KEY (`id`)" +
	  ") ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;";

	runQuery(query);

	// players table
	query = "CREATE TABLE IF NOT EXISTS `players` (" +
	  "`id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT," +
	  "`house_id` bigint(20) UNSIGNED NOT NULL," +
	  "`key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL," +
	  "`role` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'user'," +
	  "`rank` int(10) UNSIGNED NOT NULL DEFAULT '0'," +
	  "`created_at` timestamp NULL DEFAULT NULL," +
	  "`updated_at` timestamp NULL DEFAULT NULL," +
	  "PRIMARY KEY (`id`)" +
	  ") ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;";

	runQuery(query);

	// foreign keys and constraints
	query = "ALTER TABLE `players`" +
  		"ADD UNIQUE KEY `house_id_key_unique` (`house_id`,`key`)," +
  		"ADD KEY `house_id_foreign` (`house_id`);";

  	runQuery(query);

  	// constraints
  	query = "ALTER TABLE `players`" +
  		"ADD CONSTRAINT `house_id_foreign` FOREIGN KEY (`house_id`) REFERENCES `houses` (`id`) ON DELETE CASCADE;";

  	runQuery(query);
}


function dropTables() {
	connection.query("DROP TABLE IF EXISTS `players`;");
	connection.query("DROP TABLE IF EXISTS `houses`;");
}


function runQuery(query) {
	connection.query(query,(err, results) => {
		console.log(err)
		console.log(results)
	});
}