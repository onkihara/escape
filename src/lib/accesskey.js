
export const createKey = function(format='AA000AA',alphabet='ABCDEFGHJKMNPQRSTUVWXYZ',numbers='0123456789') {
 
 	let result = '';

 	// random
	for ( let i = 0; i < format.length; i++) {
		let type = format[i];
		if (type == '0') {
 			result += numbers[Math.floor(Math.random() * numbers.length)].toString();	
		} else if (type == 'A') {
	 		result += alphabet[Math.floor(Math.random() * alphabet.length)].toString();
	 	} else {
	 		result += type;
	 	}
 	}

 	return result;

}


