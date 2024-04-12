import { r as redirect, f as fail } from './index-39e97e00.js';
import { d as db } from './mysql-c2b6bb75.js';
import 'mysql';

async function load({ cookies }) {
  if (cookies.get("access_key")) {
    const data = await db.getPlayer(cookies.get("access_key"));
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

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 2;
const component = async () => (await import('./_page.svelte-2b5c60c8.js')).default;
const server_id = "src/routes/+page.server.js";
const imports = ["_app/immutable/entry/_page.svelte.9b058bb4.js","_app/immutable/chunks/index.5e7f823c.js","_app/immutable/chunks/singletons.9bdd340b.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=2-6913b4a4.js.map
