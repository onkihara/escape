

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.c33e960b.js","_app/immutable/chunks/index.d34b98b3.js","_app/immutable/chunks/stores.36c29038.js","_app/immutable/chunks/singletons.3a316d1d.js","_app/immutable/chunks/paths.68a2a898.js"];
export const stylesheets = ["_app/immutable/assets/0.d5a5c8a2.css"];
export const fonts = [];
