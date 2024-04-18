import { json, fail } from '@sveltejs/kit';
import { db } from '$lib/mysql.js';
import { canPlay } from '$lib/player.js';

export async function GET({ params, request, cookies }) {

    const urlParams = new URLSearchParams(request.url.split('?')[1]);

    // authentication
    const player = await canPlay(urlParams.hash,cookies.get('access_key'));
	if ( ! player) {
        return fail(403, { error : 'Not authentificated!' });
	}

    // get first not opened clue for riddle
    const clues = await db.getCluesWithStates(player.player.id,urlParams.get('riddle_id'));
    const first_not_open_clue = clues.find((clue) => clue.open === false);

    // mark as opened in states
    const new_clue_id = await db.openClue(player.player.id,first_not_open_clue.id,first_not_open_clue.cost);
    const state = await db.getCluesWithStates(player.player.id,urlParams.get('riddle_id'));

    return json(state);
    
}