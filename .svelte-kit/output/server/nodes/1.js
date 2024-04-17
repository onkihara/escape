

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.a88450d5.js","_app/immutable/chunks/index.08ce21f5.js","_app/immutable/chunks/singletons.f3f8da28.js","_app/immutable/chunks/paths.22d683b1.js"];
export const stylesheets = [];
export const fonts = [];
