
const storeChats = {
    activeChats: {
        "0": { name:'Василий Петрович шиномонтаж', messagelist: ['0', '1', '2', '3'] },
        "1": { name:'Эдуард Васильевич прачечная', messagelist: ['0', '1', '2', '3'] },
        "2": { name:'Максим Евгеньевич парикмахерская', messagelist: ['0', '1', '2', '3'] },
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