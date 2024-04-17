import * as server from '../entries/pages/setup/_page.server.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/setup/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/setup/+page.server.js";
export const imports = ["_app/immutable/nodes/7.91307727.js","_app/immutable/chunks/index.08ce21f5.js"];
export const stylesheets = [];
export const fonts = [];
