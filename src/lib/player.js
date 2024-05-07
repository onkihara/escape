import { db } from '$lib/mysql.js';

export async function canPlay(hash, access_key) {

	if (access_key) {
		
		const data = await db.getPlayer(access_key);

		//console.log('Player: ',data)

		if (! data?.player?.id) {
			return false;
		}

		// has root privilege
		if (data.player.is_root) {
			return data;
		}

		// canPlay
		for (let house in data.houses) {
			if (house.hash === hash) {
				return data;
			}
		}

		// else render
		return data;
	}

	// goto to login
	return false;
}