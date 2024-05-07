import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.eae99e3b.js","_app/immutable/chunks/index.d34b98b3.js","_app/immutable/chunks/paths.68a2a898.js"];
export const stylesheets = ["_app/immutable/assets/2.44bbcaf0.css"];
export const fonts = [];
