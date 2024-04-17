import { r as redirect, f as fail } from './index-c0d58dbe.js';
import { d as db } from './mysql-5a8abac0.js';
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
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-5421df58.js')).default;
const server_id = "src/routes/+page.server.js";
const imports = ["_app/immutable/nodes/2.37046b26.js","_app/immutable/chunks/index.08ce21f5.js","_app/immutable/chunks/paths.22d683b1.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=2-95302208.js.map
