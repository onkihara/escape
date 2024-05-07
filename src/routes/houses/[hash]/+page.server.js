import { redirect } from '@sveltejs/kit';
import { db } from '$lib/mysql.js';
import { canPlay } from '$lib/player.js';

export async function load({ cookies, url, depends }) {

	const hash = url.pathname.split('/').pop();
	const player = await canPlay(hash,cookies.get('access_key'));

	//console.log('house - load: ',player)

	if ( ! player) {
        throw redirect(303,'/');
	}

	
    const houses = await db.getHouseByHash(hash);
	const house = Object.assign({}, houses[0]);
	const riddles = await db.getRiddlesWithStates(player.player.id,house.id);
	
    return {
        player : player.player,
		house,
		riddles
	}

}


