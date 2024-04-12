const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico"]),
	mimeTypes: {".ico":"image/vnd.microsoft.icon"},
	_: {
		client: {"start":"_app/immutable/entry/start.3d52355d.js","app":"_app/immutable/entry/app.91cc9dae.js","imports":["_app/immutable/entry/start.3d52355d.js","_app/immutable/chunks/index.5e7f823c.js","_app/immutable/chunks/singletons.9bdd340b.js","_app/immutable/entry/app.91cc9dae.js","_app/immutable/chunks/index.5e7f823c.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-b38bfd69.js'),
			() => import('./chunks/1-1f13f1b2.js'),
			() => import('./chunks/2-6913b4a4.js'),
			() => import('./chunks/3-e3fd66b2.js'),
			() => import('./chunks/4-5731352a.js'),
			() => import('./chunks/5-af0be6d2.js'),
			() => import('./chunks/6-db6e1ba3.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/createhouse",
				pattern: /^\/createhouse\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/houses/dsb-vault",
				pattern: /^\/houses\/dsb-vault\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/logout",
				pattern: /^\/logout\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/setup",
				pattern: /^\/setup\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
