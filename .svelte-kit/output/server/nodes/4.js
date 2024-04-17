import * as server from '../entries/pages/houses/dsb-vault/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/houses/dsb-vault/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/houses/dsb-vault/+page.server.js";
export const imports = ["_app/immutable/nodes/4.506c2a2f.js","_app/immutable/chunks/index.08ce21f5.js"];
export const stylesheets = ["_app/immutable/assets/4.4e698b7f.css"];
export const fonts = [];
