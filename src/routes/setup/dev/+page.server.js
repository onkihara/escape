import { setup } from '$lib/setup.js';

const data = {
	root_key : "ABCD-1234"
};

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    
   return setup(data);

}