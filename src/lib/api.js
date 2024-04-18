
 
export const api = {
    getClue
}


async function getClue(house_hash,riddle_id,responseCallback) {

    try {
        const response = await fetch('/api/clue/?riddle_id='+riddle_id+'&hash='+house_hash);
        if (!response.ok) {
            throw new Error("Network response was not OK");
        }
        
        const data = await response.json();
        responseCallback(data);

    } catch (error) { 

        console.log('Api error: ' + error);

    }


}

