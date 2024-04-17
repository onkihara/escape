import { r as redirect, f as fail } from "../../../chunks/index.js";
import { d as db, B as BLIKK_ESCAPE_SECRET } from "../../../chunks/mysql.js";
let connection = null;
const setup = function(data) {
  connection = db.connect();
  dropTables();
  createTables();
  createDefaults(data);
  db.close(connection);
};
function createDefaults(data) {
  const date = (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace("T", " ");
  let query = "INSERT INTO `houses` (`id`, `name`, `hash`, `created_at`, `updated_at`)VALUES (1, 'default', 'default', '" + date + "', '" + date + "');";
  runQuery(query);
  query = "INSERT INTO `players` (`id`, `house_id`, `key`, `role`, `rank`, `created_at`, `updated_at`)VALUES (1, 1, '" + data.root_key + "', 'root', 0, '" + date + "', '" + date + "');";
  runQuery(query);
}
function createTables() {
  let query = "CREATE TABLE IF NOT EXISTS `houses` (`id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,`name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,`hash` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL,`created_at` timestamp NULL DEFAULT NULL,`updated_at` timestamp NULL DEFAULT NULL,PRIMARY KEY (`id`)) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;";
  runQuery(query);
  query = "CREATE TABLE IF NOT EXISTS `players` (`id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,`house_id` bigint(20) UNSIGNED NOT NULL,`key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,`role` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'user',`rank` int(10) UNSIGNED NOT NULL DEFAULT '0',`created_at` timestamp NULL DEFAULT NULL,`updated_at` timestamp NULL DEFAULT NULL,PRIMARY KEY (`id`)) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;";
  runQuery(query);
  query = "ALTER TABLE `players`ADD UNIQUE KEY `house_id_key_unique` (`house_id`,`key`),ADD KEY `house_id_foreign` (`house_id`);";
  runQuery(query);
  query = "ALTER TABLE `players`ADD CONSTRAINT `house_id_foreign` FOREIGN KEY (`house_id`) REFERENCES `houses` (`id`) ON DELETE CASCADE;";
  runQuery(query);
}
function dropTables() {
  connection.query("DROP TABLE IF EXISTS `players`;");
  connection.query("DROP TABLE IF EXISTS `houses`;");
}
function runQuery(query) {
  connection.query(query, (err, results) => {
    console.log(err);
    console.log(results);
  });
}
const actions = {
  default: async ({ request, cookies }) => {
    const data = await request.formData();
    let validation_error = "";
    const formdata = {};
    for (const key of data.keys()) {
      formdata[key] = data.get(key);
    }
    if (data.get("passphrase") !== BLIKK_ESCAPE_SECRET) {
      validation_error = "incorrect passphrase";
    } else if (!data.get("root_key")) {
      validation_error = "no key for root given";
    }
    if (validation_error === "") {
      setup(formdata);
      throw redirect(303, "/");
    }
    return fail(403, {
      incorrect: true,
      incorrect_parameter: validation_error,
      ...formdata
    });
  }
};
export {
  actions
};
