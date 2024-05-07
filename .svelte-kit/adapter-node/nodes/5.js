import * as server from '../entries/pages/houses/_hash_/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/houses/_hash_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/houses/[hash]/+page.server.js";
export const imports = ["_app/immutable/nodes/5.3125c99e.js","_app/immutable/chunks/index.d34b98b3.js"];
export const stylesheets = ["_app/immutable/assets/5.fefc99f5.css"];
export const fonts = [];
