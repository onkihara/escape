export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/login.png","assets/nullchiffre/birds_on_a_line.png","assets/nullchiffre/Das-Damengambit-Anya-Taylor-Joy.jpg","assets/nullchiffre/geheim.png","assets/nullchiffre/img-2FHxnubKveTwv2pvqaqzM71V.png","assets/nullchiffre/img-aB0xzte1TPJXjYu2V3ZFD5io.png","assets/nullchiffre/img-mBbcUfqvEvwpuZlt1fPFXDO5.png","assets/nullchiffre/img-ryuM0jIH8h7cgcCYIHKkzNKq.png","assets/nullchiffre/img-T6xf4mgf0Qlz5MpBIsbncZ3x.png","assets/nullchiffre/img-UVhWQOz4ljFq6CaL5jeMXKBL.png","assets/nullchiffre/main.png","assets/nullchiffre/stegano.fw.png","assets/nullchiffre/stegano.jpg","assets/nullchiffre/stegano.png","assets/nullchiffre/stegano1.fw.png","assets/nullchiffre-demo/img-ryuM0jIH8h7cgcCYIHKkzNKq.png","assets/nullchiffre-demo/main.png","assets/SourceCodePro-Regular.ttf","favicon.ico"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".ttf":"font/ttf"},
	_: {
		client: {"start":"_app/immutable/entry/start.b42d4332.js","app":"_app/immutable/entry/app.f0569cfe.js","imports":["_app/immutable/entry/start.b42d4332.js","_app/immutable/chunks/index.d34b98b3.js","_app/immutable/chunks/singletons.3a316d1d.js","_app/immutable/chunks/paths.68a2a898.js","_app/immutable/entry/app.f0569cfe.js","_app/immutable/chunks/index.d34b98b3.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js'))
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
				id: "/api/clue",
				pattern: /^\/api\/clue\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/clue/_server.js'))
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
				id: "/houses/[hash]",
				pattern: /^\/houses\/([^/]+?)\/?$/,
				params: [{"name":"hash","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/houses/[hash]/[id]",
				pattern: /^\/houses\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"hash","optional":false,"rest":false,"chained":false},{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/logout",
				pattern: /^\/logout\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/setup",
				pattern: /^\/setup\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

export const prerendered = new Set([]);
