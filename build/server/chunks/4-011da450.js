import { r as redirect } from './index-c0d58dbe.js';
import { d as db } from './mysql-5a8abac0.js';
import { c as canPlay } from './player-2e38ac50.js';
import 'mysql';

let hash, player;
async function load({ cookies, url }) {
  hash = url.pathname.split("/").pop();
  player = await canPlay(hash, cookies.get("access_key"));
  if (player) {
    const house = await db.getHouseByHash(hash);
    player.house = Object.assign({}, house[0]);
    return player;
  }
  throw redirect(303, "/");
}
const actions = {
  default: async ({ request }) => {
    const inputs = {
      room_0: "Schloss1998",
      room_1: "42",
      room_2: "RRNP",
      room_3: "Energie!",
      room_4: "h3ur3k4"
    };
    const data = await request.formData();
    const formdata = {};
    for (const key of data.keys()) {
      formdata[key] = data.get(key);
    }
    if (formdata.solution === inputs["room_" + formdata.room]) {
      const new_rank = await db.setRank(player.house.id, player.player.key, ++player.player.rank);
      console.log(new_rank);
    }
    return { success: true, ...formdata };
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-e72ecb38.js')).default;
const server_id = "src/routes/houses/dsb-vault/+page.server.js";
const imports = ["_app/immutable/nodes/4.506c2a2f.js","_app/immutable/chunks/index.08ce21f5.js"];
const stylesheets = ["_app/immutable/assets/4.4e698b7f.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=4-011da450.js.map
