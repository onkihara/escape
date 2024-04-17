import { r as redirect } from './index-c0d58dbe.js';

async function load({ cookies }) {
  if (cookies.get("access_key")) {
    await cookies.delete("access_key");
  }
  throw redirect(302, "/");
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 6;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-030ea266.js')).default;
const server_id = "src/routes/logout/+page.server.js";
const imports = ["_app/immutable/nodes/6.732bbcce.js","_app/immutable/chunks/index.08ce21f5.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=6-1d6fc83b.js.map
