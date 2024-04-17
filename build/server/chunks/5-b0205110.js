import { r as redirect } from './index-c0d58dbe.js';
import { d as db } from './mysql-5a8abac0.js';
import { c as canPlay } from './player-2e38ac50.js';
import 'mysql';

const jdata = JSON.stringify([
  {
    id: 1,
    name: "We will thrive!",
    content: `<h3>A room in the Garter Inn</h3>
    <p>O, she did so course o'er my exteriors with such a greedy intention that the appetite of her eye did seem to scorch me up like a burning-glass. Here's another letter to her. She bears the purse too; she is a region in Guiana, all gold and bounty. I will be cheaters to them both, and they shall be exchequers to me; they shall be my East and West Indies, and I will trade to them both. Go, bear thou this letter to Mistress Page;—and thou this to Mistress Ford. We will thrive, lads, we will thrive.</p>`,
    background: {
      color: "blue",
      image: "falstaff.jpg",
      position: "center top"
    },
    gain: 10,
    task: "",
    input: {
      type: "textarea",
      label: `Finde die geheime Botschaft`
    },
    // not to be put in the data: successive api-call with separate table to count
    chiffre: {
      type: "words",
      sequence: 5,
      solution: "o'er a appettite seem like letter the a gold be and to my and them this and Ford we"
    },
    clues: [
      {
        id: 1,
        type: "text",
        text: `Wörter sind gesucht`,
        cost: 3,
        used: false
      },
      {
        id: 2,
        type: "text",
        text: "In gleichem Abstand",
        cost: 2,
        tool: "wordsequencer",
        used: false
      }
    ]
  }
]);
let hash, player;
async function load({ cookies, url }) {
  hash = url.pathname.split("/").pop();
  player = await canPlay(hash, cookies.get("access_key"));
  if (!player) {
    throw redirect(303, "/");
  }
  const house = await db.getHouseByHash(hash);
  player.house = Object.assign({}, house[0]);
  const data = {
    player,
    riddle: JSON.parse(jdata)[0]
  };
  return data;
}
const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const formdata = {};
    for (const key of data.keys()) {
      formdata[key] = data.get(key);
    }
    return { success: true, ...formdata };
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-40fd4c51.js')).default;
const server_id = "src/routes/houses/nullchiffre/+page.server.js";
const imports = ["_app/immutable/nodes/5.e769bd0d.js","_app/immutable/chunks/index.08ce21f5.js"];
const stylesheets = ["_app/immutable/assets/5.9748ceff.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=5-b0205110.js.map
