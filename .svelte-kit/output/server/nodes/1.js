

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.23b35e61.js","_app/immutable/chunks/index.d34b98b3.js","_app/immutable/chunks/stores.36c29038.js","_app/immutable/chunks/singletons.3a316d1d.js","_app/immutable/chunks/paths.68a2a898.js"];
export const stylesheets = [];
export const fonts = [];
