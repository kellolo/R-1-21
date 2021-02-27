
const storeChats = {
    activeChats: [
        {name:'Василий Петрович шиномонтаж', id: '1'}, 
        {name:'Эдуард Васильевич прачечная', id: '2'}, 
        {name:'Максим Евгеньевич парикмахерская', id: '3'}
    ]
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