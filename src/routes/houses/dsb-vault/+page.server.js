import { redirect, fail, cookies, url } from '@sveltejs/kit';
import { db } from '$lib/mysql.js';
import { canPlay } from '$lib/player.js';

let hash, player;

export async function load({ cookies, url }) {

	hash = url.pathname.split('/').pop();
	player = await canPlay(hash,cookies.get('access_key'));

	if (player) {
		const house = await db.getHouseByHash(hash);
		player.house = Object.assign({},house[0]);
		return player;
	}

	throw redirect(303,'/');
}


export const actions = {
	default: async ({ request }) => {

		// solutions
		const inputs = {
			room_0 : 'Schloss1998',
			room_1 : '42',
			room_2 : 'RRNP',
			room_3 : 'Energie!',
			room_4 : 'h3ur3k4'
		};

		// normalize form-data
		const data = await request.formData();
		const formdata = {};
		for (const key of data.keys()) {
			formdata[key] = data.get(key);
		}

		// check input
		if (formdata.solution === inputs['room_' + formdata.room]) {
			const new_rank = await db.setRank(player.house.id,player.player.key,++player.player.rank);
			console.log(new_rank);

		}

		return { success : true, ...formdata };
	}
};

