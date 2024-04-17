import * as server from '../entries/pages/logout/_page.server.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/logout/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/logout/+page.server.js";
export const imports = ["_app/immutable/nodes/6.732bbcce.js","_app/immutable/chunks/index.08ce21f5.js"];
export const stylesheets = [];
export const fonts = [];
