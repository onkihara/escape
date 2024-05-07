import { redirect, cookies } from '@sveltejs/kit';


export async function load({ cookies }) {

	// logged in?
	if (cookies.get('access_key')) {
		await cookies.delete('access_key',{path : '/'});
	}

	throw redirect(302,'/');

}
