import { r as redirect, f as fail } from "../../../chunks/index.js";
import { d as db } from "../../../chunks/mysql.js";
const createKey = function(format = "AA000AA", alphabet = "ABCDEFGHJKMNPQRSTUVWXYZ", numbers = "0123456789") {
  let result = "";
  for (let i = 0; i < format.length; i++) {
    let type = format[i];
    if (type == "0") {
      result += numbers[Math.floor(Math.random() * numbers.length)].toString();
    } else if (type == "A") {
      result += alphabet[Math.floor(Math.random() * alphabet.length)].toString();
    } else {
      result += type;
    }
  }
  return result;
};
async function load({ cookies }) {
  if (cookies.get("access_key")) {
    const data = await db.getPlayer(cookies.get("access_key"));
    if (!data.player.is_root) {
      throw redirect(303, "/");
    }
    return data;
  }
  throw redirect(303, "/");
}
const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const formdata = {};
    for (const key of data.keys()) {
      formdata[key] = data.get(key);
    }
    let validation_error = "";
    if (!formdata.name) {
      validation_error += "<br>Name must be given";
    }
    if (!formdata.number || parseInt(formdata.number) < 1) {
      validation_error += "<br>Number must be >= 1";
    }
    if (!formdata.hash || formdata.hash.match(/[^-a-z_0-9]/g)) {
      validation_error += "<br>Invalid Slug";
    }
    if (validation_error !== "") {
      return fail(403, {
        incorrect: true,
        incorrect_parameter: validation_error,
        ...formdata
      });
    }
    const keys = await createHouse(formdata);
    formdata.number = null;
    return { success: true, keys, ...formdata };
  }
};
async function createHouse(data) {
  const date = (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace("T", " ");
  const house = await db.getHouseByHash(data.hash);
  let house_id;
  try {
    if (house.length > 0) {
      house_id = house[0].id;
    } else {
      let query = "INSERT INTO `houses` (`name`, `hash`, `created_at`, `updated_at`)VALUES (?,?,?,?);";
      const new_house = await db.runQuery(query, [data.name, data.hash, date, date]);
      house_id = new_house.insertId;
    }
    return createPlayersForHouse(house_id, data.number, date);
  } catch (e) {
    console.log(e);
  }
}
async function createPlayersForHouse(house_id, number, date) {
  let query = "";
  const player_keys = await db.getPlayerKeysByHouse(house_id);
  const connection = db.connect();
  for (let i = 0; i < number; i++) {
    let key;
    for (let i2 = 0; i2 < 5; i2++) {
      key = createKey();
      if (!player_keys.includes(key)) {
        player_keys.push(key);
        break;
      }
      throw fail(403, "No valid key available");
    }
    query = "INSERT INTO `players` (`house_id`, `key`, `role`, `rank`, `created_at`, `updated_at`)VALUES (?,?,?,?,?,?);";
    connection.query(query, [house_id, key, "player", 0, date, date], (err, results) => {
      if (err) {
        throw fail(403, "Unable to create players");
      }
    });
  }
  db.close(connection);
  return player_keys;
}
export {
  actions,
  load
};
