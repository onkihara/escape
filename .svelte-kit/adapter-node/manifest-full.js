export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/nullchiffre/falstaff.jpg","favicon.ico"]),
	mimeTypes: {".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.42e80725.js","app":"_app/immutable/entry/app.b0171be8.js","imports":["_app/immutable/entry/start.42e80725.js","_app/immutable/chunks/index.08ce21f5.js","_app/immutable/chunks/singletons.f3f8da28.js","_app/immutable/chunks/paths.22d683b1.js","_app/immutable/entry/app.b0171be8.js","_app/immutable/chunks/index.08ce21f5.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/createhouse",
				pattern: /^\/createhouse\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/houses/dsb-vault",
				pattern: /^\/houses\/dsb-vault\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/houses/nullchiffre",
				pattern: /^\/houses\/nullchiffre\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/logout",
				pattern: /^\/logout\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/setup",
				pattern: /^\/setup\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
