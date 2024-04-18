import { redirect, fail } from '@sveltejs/kit';
import { db } from '$lib/mysql.js';
import { canPlay } from '$lib/player.js';

export async function load({ cookies, url }) {

	const paths = url.pathname.split('/');
	const riddle_id = paths.pop();
	const hash = paths[paths.length-1];

	const player = await canPlay(hash,cookies.get('access_key'));

	if ( ! player) {
        throw redirect(303,'/');
	}

	const houses = await db.getHouseByHash(hash);
	const house = Object.assign({}, houses[0]);
    const allriddles = await db.getRiddlesWithStates(player.player.id,house.id);
	const riddles = allriddles.filter((rid) => rid.id == riddle_id);;
	const riddle = riddles[0];
	
	// is riddle and is open?
	if ( riddle.state && riddle.state.state === 1) {
		throw redirect(303,'/houses/'+hash);
	}

	// get clues for riddle
	riddle.clues = await db.getCluesWithStates(player.player.id,riddle.id);
	
    const data = {
		house,
        riddle
    }
	
    return data;
}


export const actions = {
	default: async ({ cookies, request }) => {

		// normalize form-data
		const data = await request.formData();
		const formdata = {};
		for (const key of data.keys()) {
			formdata[key] = data.get(key);
		}

		const paths = request.url.split('/');
		const riddle_id = paths.pop();
		const hash = paths[paths.length-1];
		
		const player = await canPlay(hash,cookies.get('access_key'));
		if ( ! player) {
			throw redirect(303,'/');
		}
		
		const houses = await db.getHouseByHash(hash);
		const house = Object.assign({}, houses[0]);
		const allriddles = await db.getRiddlesWithStates(player.player.id,house.id,true);
		const riddles = allriddles.filter((rid) => rid.id == riddle_id);;
		const chiffre = riddles[0].chiffre;

		// check input
		if (formdata.solution.trim() != chiffre.solution) {
			return fail(400, { solution : formdata.solution, match: false });
		}

		// persist solution
		const sub_clues = await db.getClueSubtractions(player.player.id,riddle_id);
		const score = riddles[0].gain - sub_clues;
		await db.writeScore(score,player.player.id,riddle_id);

		throw redirect(303,'/houses/'+hash);
	}
};

