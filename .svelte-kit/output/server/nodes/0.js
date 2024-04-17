

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.f5bd68ac.js","_app/immutable/chunks/index.08ce21f5.js"];
export const stylesheets = ["_app/immutable/assets/0.9a3fd4a5.css"];
export const fonts = [];
