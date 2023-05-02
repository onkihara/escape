import { redirect, fail } from '@sveltejs/kit';
import { BLIKK_ESCAPE_SECRET } from '$env/static/private';
import { setup } from '$lib/setup.js';

// export function load({ cookies }) {
// 	if (cookies.get('allowed')) {
// 		throw redirect(307, '/');
// 	}
// }

export const actions = {
	default: async ({ request, cookies }) => {

		const data = await request.formData();
		
		let validation_error = '';

		const formdata = {};

		for (const key of data.keys()) {
			formdata[key] = data.get(key);
		} 

		if (data.get('passphrase') !== BLIKK_ESCAPE_SECRET) {
			return fail(403, {
				validation_error: 'passphrase'
			});
			// cookies.set('allowed', 'true', {
			// 	path: '/'
			// });
		}

		if ( ! data.get('key')) {
			validation_error: 'no key for root given'
		}

		if (validation_error === '') {
			// ready for setup
			setup(formdata);
			throw redirect(303, '/');	
		}

		// return with fail
		return fail(403, {
			incorrect: true,
			incorrect_parameter: validation_error,
			...formdata
		});
	}
};
