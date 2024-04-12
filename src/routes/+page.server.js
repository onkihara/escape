import { redirect, fail, cookies } from '@sveltejs/kit';
import { db } from '$lib/mysql.js';


export async function load({ cookies }) {

	// already logged in?
	if (cookies.get('access_key')) {
		const data = await db.getPlayer(cookies.get('access_key'));

		// if root
		if (data.player.is_root) {
			throw redirect(303,'/createhouse');
		}

		// if only one house for player
		if (data.houses.length === 1) {
			throw redirect(303,'/houses/' + data.houses[0].hash)
		}

		// else render house list
		return data;
	}

}


export const actions = {
	default: async ({ request, cookies }) => {

		const data = await request.formData();

		const formdata = {};

		for (const key of data.keys()) {
			formdata[key] = data.get(key);
		} 

		const player = await db.getPlayer(formdata.access_key);

		if (player?.player?.key) {

			// store player
			cookies.set('access_key', formdata.access_key, {
				path: '/',
				secure : false
			});

			throw redirect(303, '/');
		}

		// return with fail
		return fail(403, {
			incorrect: true,
			incorrect_parameter: 'Key not allowed',
			...formdata
		});
	}
};


