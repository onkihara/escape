import { redirect, fail, cookies } from '@sveltejs/kit';
import { db } from '$lib/mysql.js';
import { createKey } from '$lib/accesskey.js';


export async function load({ cookies }) {

	// already logged in?
	if (cookies.get('access_key')) {
		const data = await db.getPlayer(cookies.get('access_key'));

		// if root
		if ( ! data.player.is_root) {
			throw redirect(303,'/');
		}

		// else render
		return data;
	}

	throw redirect(303,'/');

}


export const actions = {
	default: async ({ request }) => {

		const data = await request.formData();

		const formdata = {};

		for (const key of data.keys()) {
			formdata[key] = data.get(key);
		}

		// validation
		let validation_error = '';
		if ( ! formdata.name) {
			validation_error += "<br>Name must be given";
		}
		if ( ! formdata.number || parseInt(formdata.number) < 1) {
			validation_error += "<br>Number must be >= 1";
		}
		if ( ! formdata.hash || formdata.hash.match(/[^-a-z_0-9]/g) ) {
			validation_error += "<br>Invalid Slug";
		}

		// return with fail
		if (validation_error !== '') {
			return fail(403, {
				incorrect: true,
				incorrect_parameter: validation_error,
				...formdata
			});
		}

		const keys = await createHouse(formdata);
		
		formdata.number = null;
		return { success : true, keys, ...formdata };
	}
};


async function createHouse(data) {

	const date = new Date().toISOString().slice(0, 19).replace('T', ' ');
	const house = await db.getHouseByHash(data.hash);
	let house_id;

	try {

		// add player to house or create new one
		if (house.length > 0) {
			house_id = house[0].id;
		} else {
			// create house
			let query = "INSERT INTO `houses` (`name`, `hash`, `created_at`, `updated_at`)" +
				"VALUES (?,?,?,?);";
			const new_house = await db.runQuery(query, [data.name, data.hash, date, date]);
			house_id = new_house.insertId;
		}

		return createPlayersForHouse(house_id, data.number, date);

	} catch (e) {
		console.log(e)
	}

}

async function createPlayersForHouse(house_id, number, date) {

	let query = '';
	const player_keys = await db.getPlayerKeysByHouse(house_id);
	const connection = db.connect();

	for (let i=0; i < number; i++) {
		let key;
		// try several times to get random key
		for (let i=0; i < 5; i++) {
			key = createKey(); // from library
			if ( ! player_keys.includes(key)) {
				player_keys.push(key);
				break;
			}
			throw fail(403,'No valid key available');
		}
		query = "INSERT INTO `players` (`house_id`, `key`, `role`, `rank`, `created_at`, `updated_at`)" +
		"VALUES (?,?,?,?,?,?);";
		connection.query(query,[house_id,key,'player',0,date,date],(err, results) => {
            if (err) {
                throw fail(403,'Unable to create players');
            }
        });
	}
	db.close(connection);

	return player_keys;
}






