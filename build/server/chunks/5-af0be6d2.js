import { r as redirect } from './index-39e97e00.js';

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

const index = 5;
const component = async () => (await import('./_page.svelte-06ebb349.js')).default;
const server_id = "src/routes/logout/+page.server.js";
const imports = ["_app/immutable/entry/logout-page.svelte.dcf02f9f.js","_app/immutable/chunks/index.5e7f823c.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=5-af0be6d2.js.map
