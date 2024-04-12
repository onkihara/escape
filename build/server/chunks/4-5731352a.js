import { r as redirect } from './index-39e97e00.js';
import { d as db } from './mysql-c2b6bb75.js';
import 'mysql';

async function canPlay(hash2, access_key) {
  if (access_key) {
    const data = await db.getPlayer(access_key);
    if (data.player.is_root) {
      return data;
    }
    for (let house in data.houses) {
      if (house.hash === hash2) {
        return data;
      }
    }
    return data;
  }
  return false;
}
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
const component = async () => (await import('./_page.svelte-2174337f.js')).default;
const server_id = "src/routes/houses/dsb-vault/+page.server.js";
const imports = ["_app/immutable/entry/houses-dsb-vault-page.svelte.4020e7af.js","_app/immutable/chunks/index.5e7f823c.js"];
const stylesheets = ["_app/immutable/assets/_page.4e698b7f.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=4-5731352a.js.map
