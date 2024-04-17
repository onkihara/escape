import * as server from '../entries/pages/createhouse/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/createhouse/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/createhouse/+page.server.js";
export const imports = ["_app/immutable/nodes/3.4451790f.js","_app/immutable/chunks/index.08ce21f5.js"];
export const stylesheets = [];
export const fonts = [];
