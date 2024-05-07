import * as server from '../entries/pages/logout/_page.server.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/logout/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/logout/+page.server.js";
export const imports = ["_app/immutable/nodes/7.a9c797e3.js","_app/immutable/chunks/index.d34b98b3.js"];
export const stylesheets = [];
export const fonts = [];
