import { r as redirect, f as fail } from "../../chunks/index.js";
import { d as db } from "../../chunks/mysql.js";
async function load({ cookies }) {
  if (cookies.get("access_key")) {
    const data = await db.getPlayer(cookies.get("access_key"));
    if (!data?.player?.key) {
      throw redirect(303, "/logout");
    }
    if (data.player.is_root) {
      throw redirect(303, "/createhouse");
    }
    if (data.houses.length === 1) {
      throw redirect(303, "/houses/" + data.houses[0].hash);
    }
    return data;
  }
}
const actions = {
  default: async ({ request, cookies }) => {
    const data = await request.formData();
    const formdata = {};
    for (const key of data.keys()) {
      formdata[key] = data.get(key);
    }
    const player = await db.getPlayer(formdata.access_key);
    if (player?.player?.key) {
      cookies.set("access_key", formdata.access_key, {
        path: "/",
        secure: false
      });
      throw redirect(303, "/");
    }
    return fail(403, {
      incorrect: true,
      incorrect_parameter: "Key not allowed",
      ...formdata
    });
  }
};
export {
  actions,
  load
};
