import * as server from '../entries/pages/createhouse/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/createhouse/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/createhouse/+page.server.js";
export const imports = ["_app/immutable/nodes/3.fdc04184.js","_app/immutable/chunks/index.d34b98b3.js"];
export const stylesheets = [];
export const fonts = [];
