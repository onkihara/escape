
// riddle
export const riddles = JSON.stringify([{

	id : 1,
    name : 'We will thrive!',
    content : `<h3>A room in the Garter Inn</h3>
    <p>O, she did so course o'er my exteriors with such a greedy intention that the appetite of her eye did seem to scorch me up like a burning-glass. Here's another letter to her. She bears the purse too; she is a region in Guiana, all gold and bounty. I will be cheaters to them both, and they shall be exchequers to me; they shall be my East and West Indies, and I will trade to them both. Go, bear thou this letter to Mistress Page;—and thou this to Mistress Ford. We will thrive, lads, we will thrive.</p>`,
    styles : {
        "background-color" : 'blue',
        "background-image" : 'falstaff.jpg',
        "background-position" : 'center top'
    },
    gain : 10,
    task : '',
    input : {
        type : 'textarea',
        label : `Finde die geheime Botschaft`
    },
    // not to be put in the data: successive api-call with separate table to count
    chiffre : {
        type : 'words',
        sequence : 5,
        solution : "o'er a appettite seem like letter the a gold be and to my and them this and Ford we", 
    },


},

]);

// clues
export const clues = JSON.stringify([
    {
        id : 1,
        type : 'text',
        text : `Wörter sind gesucht`,
        cost : 3,
        used : false,
    },
    {
        id : 2,
        type : 'text',
        text : 'In gleichem Abstand',
        cost : 2,
        tool : 'wordsequencer',
        used : false,
    }
]);


// states
export const states = JSON.stringify([
    {
        id : 1,
        player_id : 22,
        house_id : 3,
        state : 1,
        'gain' : 5
    },

    {
        id : 2,
        player_id : 22,
        house_id : 3,
        state : 0,
        'gain' : 0
    },


]);


