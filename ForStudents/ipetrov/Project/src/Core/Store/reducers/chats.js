
const storeChats = {
    activeChats: {
        "0": { name:'Василий Петрович шиномонтаж', messagelist: ['0', '2', '1'] },
        "1": { name:'Эдуард Васильевич прачечная', messagelist: ['0', '3', '5'] },
        "2": { name:'Максим Евгеньевич парикмахерская', messagelist: ['0', '4', '1'] },
    }



/*
    activeChats: [
        {name:'Василий Петрович шиномонтаж', id: '1'}, 
        {name:'Эдуард Васильевич прачечная', id: '2'}, 
        {name:'Максим Евгеньевич парикмахерская', id: '3'}
    ]
*/
};

export default (store = storeChats, action) => {
    switch(action.type) {
        case 'LOAD_CHT': {
            return store;
        }

        default: {
            return store;
        }
    }
};